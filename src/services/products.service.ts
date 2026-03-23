const BASE = "https://fakestoreapi.com/products";

export const ProductsService = {
  getAll: () => fetch(BASE).then((r) => r.json()),
  getById: (id: string) => fetch(`${BASE}/${id}`).then((r) => r.json()),
  getCategories: () => fetch(`${BASE}/categories`).then((r) => r.json()),
};
