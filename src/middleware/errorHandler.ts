import type { Middleware } from "../types";

export const errorHandler: Middleware = (next) => async (req) => {
  try {
    return await next(req);
  } catch (err) {
    console.error("[error]", err);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
};
