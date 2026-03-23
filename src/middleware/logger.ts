import type { Middleware } from "../types";

export const logger: Middleware = (next) => async (req) => {
  const start = Date.now();
  const res = await next(req);
  const ms = Date.now() - start;
  console.log(`[${new Date().toISOString()}] ${req.method} ${new URL(req.url).pathname} ${res.status} - ${ms}ms`);
  return res;
};
