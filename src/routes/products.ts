const BASE = "https://fakestoreapi.com/products";

export const productRoutes: Record<string, () => Promise<Response>> = {
  "/products": async () => {
    const data = await fetch(BASE).then((r) => r.json());
    return Response.json(data);
  },
  "/products/categories": async () => {
    const data = await fetch(`${BASE}/categories`).then((r) => r.json());
    return Response.json(data);
  },
};

export async function productByIdRoute(id: string): Promise<Response> {
  const data = await fetch(`${BASE}/${id}`).then((r) => r.json());
  return Response.json(data);
}
