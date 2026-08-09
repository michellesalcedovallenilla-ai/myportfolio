import assert from "node:assert/strict";
import worker from "../worker.js";

let fetchCalls = 0;
let capturedRequest;
const originalFetch = globalThis.fetch;

globalThis.fetch = async (request) => {
  fetchCalls += 1;
  capturedRequest = request;
  return new Response("redirect", {
    status: 302,
    headers: {
      Location:
        "https://michellesalcedovallenilla-ai.github.io/myportfolio/mobile-app/",
      "Set-Cookie": "upstream=value",
    },
  });
};

try {
  const rejected = await worker.fetch(new Request("https://mydigitalcrib.com/", {
    method: "POST",
    body: "not allowed",
  }));
  assert.equal(rejected.status, 405);
  assert.equal(rejected.headers.get("allow"), "GET, HEAD");
  assert.equal(fetchCalls, 0);

  const response = await worker.fetch(new Request(
    "https://mydigitalcrib.com/mobile-app/?preview=1",
    {
      headers: {
        Authorization: "Bearer should-not-leave-cloudflare",
        Cookie: "private=value",
        Range: "bytes=0-99",
      },
    }
  ));

  assert.equal(fetchCalls, 1);
  assert.equal(
    capturedRequest.url,
    "https://michellesalcedovallenilla-ai.github.io/myportfolio/mobile-app/?preview=1"
  );
  assert.equal(capturedRequest.headers.get("authorization"), null);
  assert.equal(capturedRequest.headers.get("cookie"), null);
  assert.equal(capturedRequest.headers.get("range"), "bytes=0-99");
  assert.equal(response.status, 302);
  assert.equal(response.headers.get("set-cookie"), null);
  assert.equal(
    response.headers.get("location"),
    "https://mydigitalcrib.com/mobile-app/"
  );
  assert.equal(response.headers.get("x-content-type-options"), "nosniff");
  assert.equal(response.headers.get("x-frame-options"), "SAMEORIGIN");
  assert.match(response.headers.get("content-security-policy"), /frame-ancestors/);

  console.log("Worker tests passed: methods, header stripping, redirects, and security headers.");
} finally {
  globalThis.fetch = originalFetch;
}

