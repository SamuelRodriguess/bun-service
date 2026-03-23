import { CartsService } from "../services/carts.service";
import type { Handler } from "../types";

export const cartRoutes: Record<string, Handler> = {
  "/carts": async () => Response.json(await CartsService.getAll()),
};

export const cartByIdRoute: Handler = async (req) => {
  const id = new URL(req.url).pathname.split("/")[2];
  return Response.json(await CartsService.getById(id));
};
