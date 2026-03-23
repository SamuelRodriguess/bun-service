import { productRoutes, productByIdRoute } from "./routes/products";
import { userRoutes, userByIdRoute } from "./routes/users";
import { cartRoutes, cartByIdRoute } from "./routes/carts";

const staticRoutes: Record<string, () => Promise<Response>> = {
  ...productRoutes,
  ...userRoutes,
  ...cartRoutes,
};

export async function router(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const path = url.pathname;

  if (req.method !== "GET") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  // static routes
  if (staticRoutes[path]) {
    return staticRoutes[path]();
  }

  // dynamic routes: /products/:id
  const productMatch = path.match(/^\/products\/(\d+)$/);
  if (productMatch) return productByIdRoute(productMatch[1]);

  // dynamic routes: /users/:id
  const userMatch = path.match(/^\/users\/(\d+)$/);
  if (userMatch) return userByIdRoute(userMatch[1]);

  // dynamic routes: /carts/:id
  const cartMatch = path.match(/^\/carts\/(\d+)$/);
  if (cartMatch) return cartByIdRoute(cartMatch[1]);

  return new Response("Not Found", { status: 404 });
}
