import { router } from "./src/router";
import { applyMiddleware } from "./src/middleware";
import { logger } from "./src/middleware/logger";
import { errorHandler } from "./src/middleware/errorHandler";

const PORT = 3000;

const handler = applyMiddleware(router, [errorHandler, logger]);

Bun.serve({
  port: PORT,
  fetch: handler,
});

console.log(`Server running at http://localhost:${PORT}`);
