import { router } from "./src/router";

const PORT = 3000;

Bun.serve({
  port: PORT,
  fetch: router,
});

console.log(`Server running at http://localhost:${PORT}`);
