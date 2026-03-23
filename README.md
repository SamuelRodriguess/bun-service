# bun-service

A simple HTTP server built with [Bun](https://bun.sh) that fetches data from a public API and exposes it via GET routes, with a modular architecture using middleware and service layers.

## Requirements

- [Bun](https://bun.sh) installed

## Installation

```bash
curl -fsSL https://bun.sh/install | bash
```

## Running

```bash
bun run index.ts
```

## Architecture

```
bun-service/
├── index.ts                    # Entry point — composes middleware and starts server
└── src/
    ├── types.ts                # Shared types (Handler, Middleware)
    ├── router.ts               # Central router
    ├── middleware/
    │   ├── index.ts            # applyMiddleware compose function
    │   ├── logger.ts           # Logs method, path, status and response time
    │   └── errorHandler.ts     # Catches errors and returns 500
    ├── services/
    │   ├── products.service.ts # Products API calls
    │   ├── users.service.ts    # Users API calls
    │   └── carts.service.ts    # Carts API calls
    └── routes/
        ├── products.ts         # Product route handlers
        ├── users.ts            # User route handlers
        └── carts.ts            # Cart route handlers
```

Each request flows through: `errorHandler → logger → router → service → response`

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/products` | List all products |
| GET | `/products/:id` | Get product by ID |
| GET | `/products/categories` | List all categories |
| GET | `/users` | List all users |
| GET | `/users/:id` | Get user by ID |
| GET | `/carts` | List all carts |
| GET | `/carts/:id` | Get cart by ID |

## Example

```bash
curl http://localhost:3000/products
curl http://localhost:3000/products/1
curl http://localhost:3000/users
```
