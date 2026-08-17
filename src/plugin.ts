import { Model, DB } from "@mongoloquent/core";
import { FastifyInstance } from "fastify";
import fastifyPlugin from "fastify-plugin";

import type { IMongoloquentPluginOptions } from "./types";

async function fastifyMongoloquent(
  fastify: FastifyInstance,
  options: IMongoloquentPluginOptions
) {
  const {
    connection = "mongodb://localhost:27017",
    database = "mongoloquent-fastify",
    timezone = "Asia/Jakarta",
  } = options;

  DB.setConnection(connection);
  DB.setDatabaseName(database);
  DB.setTimezone(timezone);

  Model["$connection"] = connection;
  Model["$databaseName"] = database;
  Model["$timezone"] = timezone;

  fastify.log.info(`[mongoloquent] connected to "${database}"`);

  fastify.decorate("mongoloquent", { db: DB });
}

export default fastifyPlugin(fastifyMongoloquent, {
  name: "@mongoloquent/fastify",
  fastify: ">=5.0.0",
});
