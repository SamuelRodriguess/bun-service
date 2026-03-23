import { productRoutes, productByIdRoute } from "./routes/products";
import { userRoutes, userByIdRoute } from "./routes/users";
import { cartRoutes, cartByIdRoute } from "./routes/carts";
import type { Handler } from "./types";

const staticRoutes: Record<string, Handler> = {
  ...productRoutes,
  ...userRoutes,
  ...cartRoutes,
};

export const router: Handler = async (req) => {
  const path = new URL(req.url).pathname;

  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  if (staticRoutes[path]) return staticRoutes[path](req);

  if (/^\/products\/(\d+)$/.test(path)) return productByIdRoute(req);
  if (/^\/users\/(\d+)$/.test(path)) return userByIdRoute(req);
  if (/^\/carts\/(\d+)$/.test(path)) return cartByIdRoute(req);

  return new Response("Not Found", { status: 404 });
};
