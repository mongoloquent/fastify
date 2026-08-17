# @mongoloquent/fastify

Fastify plugin for [Mongoloquent](https://mongoloquent.com/fastify).

## Installation

```bash
npm install @mongoloquent/fastify @mongoloquent/core fastify
```

## Usage

```typescript
import Fastify from "fastify";
import mongoloquent from "@mongoloquent/fastify";

const fastify = Fastify();

fastify.register(mongoloquent, {
  connection: "mongodb://localhost:27017",
  database: "mydb",
  timezone: "Asia/Jakarta",
});

fastify.get("/", async (request, reply) => {
  const { db } = fastify.mongoloquent;
  // use db (DB instance from @mongoloquent/core)
});
```

## Options

All options are optional and fall back to the defaults below.

| Option       | Type     | Default                        | Description                    |
|--------------|----------|--------------------------------|--------------------------------|
| `connection` | `string` | `"mongodb://localhost:27017"`  | MongoDB connection string      |
| `database`   | `string` | `"mongoloquent-fastify"`       | Database name                  |
| `timezone`   | `string` | `"Asia/Jakarta"`               | Timezone (e.g. `Asia/Jakarta`) |

## Using Models

Because the plugin sets the connection on `Model` globally, you can import and use models directly:

```typescript
import User from "./models/User";

fastify.get("/users", async () => User.get());
```

For the full model API see the [Mongoloquent ORM docs](https://mongoloquent.com/docs/orm/getting-started).

## License

MIT
