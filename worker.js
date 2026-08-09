const UPSTREAM_HOST = "michellesalcedovallenilla-ai.github.io";
const UPSTREAM_BASE_PATH = "/myportfolio";
const ALLOWED_METHODS = new Set(["GET", "HEAD"]);
const PRIVATE_REQUEST_HEADERS = [
  "authorization",
  "cookie",
  "proxy-authorization",
  "cf-connecting-ip",
  "cf-ipcountry",
  "cf-ray",
  "x-forwarded-for",
  "x-real-ip",
];
const SECURITY_HEADERS = {
  "Content-Security-Policy":
    "frame-ancestors 'self'; base-uri 'self'; object-src 'none'",
  "Permissions-Policy":
    "camera=(self), microphone=(self), geolocation=(self), payment=(), usb=(), serial=(), hid=(), browsing-topics=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Strict-Transport-Security": "max-age=31536000",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "SAMEORIGIN",
  "X-Permitted-Cross-Domain-Policies": "none",
};

function applySecurityHeaders(headers) {
  for (const [name, value] of Object.entries(SECURITY_HEADERS)) {
    headers.set(name, value);
  }
  return headers;
}

export default {
  async fetch(request) {
    if (!ALLOWED_METHODS.has(request.method)) {
      const headers = applySecurityHeaders(new Headers({
        Allow: "GET, HEAD",
        "Content-Type": "text/plain; charset=utf-8",
      }));
      return new Response("Method Not Allowed", { status: 405, headers });
    }

    const publicUrl = new URL(request.url);
    const upstreamUrl = new URL(`https://${UPSTREAM_HOST}`);
    upstreamUrl.pathname = `${UPSTREAM_BASE_PATH}${publicUrl.pathname}`;
    upstreamUrl.search = publicUrl.search;

    const upstreamHeaders = new Headers(request.headers);
    for (const name of PRIVATE_REQUEST_HEADERS) upstreamHeaders.delete(name);

    const upstreamRequest = new Request(upstreamUrl, {
      method: request.method,
      headers: upstreamHeaders,
      redirect: "manual",
    });
    const response = await fetch(upstreamRequest, { redirect: "manual" });
    const headers = applySecurityHeaders(new Headers(response.headers));
    headers.delete("set-cookie");
    const location = headers.get("location");

    if (location) {
      const redirectUrl = new URL(location, upstreamUrl);

      if (
        redirectUrl.hostname === UPSTREAM_HOST &&
        redirectUrl.pathname.startsWith(UPSTREAM_BASE_PATH)
      ) {
        publicUrl.pathname =
          redirectUrl.pathname.slice(UPSTREAM_BASE_PATH.length) || "/";
        publicUrl.search = redirectUrl.search;
        headers.set("location", publicUrl.toString());
      }
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers,
    });
  },
};
