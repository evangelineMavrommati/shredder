import { accessToken } from "./blizzard-api";

console.log("Hello via Bun!");

const server = Bun.serve({
  port: 3000,
  fetch(req: Request) {
    return new Response(`access token: ${accessToken}`);
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
