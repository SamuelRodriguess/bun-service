const BASE = "https://fakestoreapi.com/carts";

export const cartRoutes: Record<string, () => Promise<Response>> = {
  "/carts": async () => {
    const data = await fetch(BASE).then((r) => r.json());
    return Response.json(data);
  },
};

export async function cartByIdRoute(id: string): Promise<Response> {
  const data = await fetch(`${BASE}/${id}`).then((r) => r.json());
  return Response.json(data);
}
