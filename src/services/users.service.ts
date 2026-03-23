const BASE = "https://fakestoreapi.com/users";

export const UsersService = {
  getAll: () => fetch(BASE).then((r) => r.json()),
  getById: (id: string) => fetch(`${BASE}/${id}`).then((r) => r.json()),
};
