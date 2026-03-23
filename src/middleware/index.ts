import type { Handler, Middleware } from "../types";

export function applyMiddleware(handler: Handler, middlewares: Middleware[]): Handler {
  return middlewares.reduceRight((next, mw) => mw(next), handler);
}
