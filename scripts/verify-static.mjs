import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const errors = [];
let inlineScriptCount = 0;
let localReferenceCount = 0;

function walk(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules") continue;
    const absolute = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...walk(absolute));
    else files.push(absolute);
  }
  return files;
}

function relative(file) {
  return path.relative(root, file).replaceAll(path.sep, "/");
}

function checkInlineScripts(file, source) {
  const pattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;
  let match;
  let index = 0;

  while ((match = pattern.exec(source))) {
    const attributes = match[1];
    const code = match[2];
    if (/\bsrc\s*=/i.test(attributes) || !code.trim()) continue;

    const type = attributes.match(/\btype\s*=\s*["']([^"']+)["']/i)?.[1];
    if (type && !/^(module|text\/javascript|application\/javascript)$/i.test(type)) {
      continue;
    }

    index += 1;
    inlineScriptCount += 1;
    const line = source.slice(0, match.index).split("\n").length;
    try {
      new vm.Script(code, { filename: `${relative(file)}:${line}:inline-${index}` });
    } catch (error) {
      errors.push(`${relative(file)}:${line} inline script: ${error.message}`);
    }
  }
}

function checkLocalReferences(file, source) {
  const pattern = /\b(?:src|href|poster|data-src)\s*=\s*(["'])(.*?)\1/gi;
  let match;

  while ((match = pattern.exec(source))) {
    const reference = match[2].trim();
    if (
      !reference ||
      reference.startsWith("#") ||
      reference.includes("${") ||
      reference.includes(" + ") ||
      /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(reference)
    ) {
      continue;
    }

    const clean = reference.split(/[?#]/, 1)[0];
    if (!clean) continue;

    let decoded;
    try {
      decoded = decodeURIComponent(clean);
    } catch {
      errors.push(`${relative(file)} has an invalid encoded path: ${reference}`);
      continue;
    }

    const target = decoded.startsWith("/")
      ? path.resolve(root, `.${decoded}`)
      : path.resolve(path.dirname(file), decoded);
    const insideRoot = target === root || target.startsWith(`${root}${path.sep}`);
    if (!insideRoot) {
      errors.push(`${relative(file)} references a path outside the repository: ${reference}`);
      continue;
    }

    localReferenceCount += 1;
    if (!fs.existsSync(target)) {
      errors.push(`${relative(file)} references a missing local file: ${reference}`);
    }
  }
}

const htmlFiles = walk(root).filter((file) => file.endsWith(".html"));
for (const file of htmlFiles) {
  const source = fs.readFileSync(file, "utf8");
  checkInlineScripts(file, source);
  checkLocalReferences(file, source);
}

if (errors.length) {
  console.error("Static verification failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(
    `Static verification passed: ${htmlFiles.length} HTML files, ` +
    `${inlineScriptCount} inline scripts, ${localReferenceCount} local references.`
  );
}
