const BASE = "https://fakestoreapi.com/users";

export const userRoutes: Record<string, () => Promise<Response>> = {
  "/users": async () => {
    const data = await fetch(BASE).then((r) => r.json());
    return Response.json(data);
  },
};

export async function userByIdRoute(id: string): Promise<Response> {
  const data = await fetch(`${BASE}/${id}`).then((r) => r.json());
  return Response.json(data);
}
