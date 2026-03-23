import { ProductsService } from "../services/products.service";
import type { Handler } from "../types";

export const productRoutes: Record<string, Handler> = {
  "/products": async () => Response.json(await ProductsService.getAll()),
  "/products/categories": async () => Response.json(await ProductsService.getCategories()),
};

export const productByIdRoute: Handler = async (req) => {
  const id = new URL(req.url).pathname.split("/")[2];
  return Response.json(await ProductsService.getById(id));
};
