const UPSTREAM_HOST = "michellesalcedovallenilla-ai.github.io";
const UPSTREAM_BASE_PATH = "/myportfolio";

export default {
  async fetch(request) {
    const publicUrl = new URL(request.url);
    const upstreamUrl = new URL(`https://${UPSTREAM_HOST}`);
    upstreamUrl.pathname = `${UPSTREAM_BASE_PATH}${publicUrl.pathname}`;
    upstreamUrl.search = publicUrl.search;

    const upstreamRequest = new Request(upstreamUrl, request);
    const response = await fetch(upstreamRequest, { redirect: "manual" });
    const headers = new Headers(response.headers);
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
