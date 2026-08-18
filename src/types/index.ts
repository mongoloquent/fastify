import { Model, DB } from "@mongoloquent/core";

export interface IMongoloquentPluginOptions {
  connection?: string;
  database?: string;
  timezone?: string;
}

declare module "fastify" {
  interface FastifyInstance {
    mongoloquent: { db: typeof DB };
  }
}
