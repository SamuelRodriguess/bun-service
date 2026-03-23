export type Handler = (req: Request) => Promise<Response>;
export type Middleware = (next: Handler) => Handler;
