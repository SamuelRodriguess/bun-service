const BASE = "https://fakestoreapi.com/carts";

export const CartsService = {
  getAll: () => fetch(BASE).then((r) => r.json()),
  getById: (id: string) => fetch(`${BASE}/${id}`).then((r) => r.json()),
};
