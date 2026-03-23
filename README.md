# bun-service

A simple HTTP server built with [Bun](https://bun.sh) that fetches data from a public API and exposes it via a GET route.

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

## Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| GET | `/products` | Returns a list of products from [Fake Store API](https://fakestoreapi.com/) |

## Example

```bash
curl http://localhost:3000/products
```
