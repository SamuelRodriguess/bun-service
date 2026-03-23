import { UsersService } from "../services/users.service";
import type { Handler } from "../types";

export const userRoutes: Record<string, Handler> = {
  "/users": async () => Response.json(await UsersService.getAll()),
};

export const userByIdRoute: Handler = async (req) => {
  const id = new URL(req.url).pathname.split("/")[2];
  return Response.json(await UsersService.getById(id));
};
