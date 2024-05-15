// Libreria
import analyze from "./lib";

// Import the framework and instantiate it
import Fastify from "fastify";
const fastify = Fastify({
  logger: true,
});

const path = require("path");
const fastifyStatic = require("@fastify/static");

// Registra il plugin fastify-static
fastify.register(fastifyStatic, {
  root: "/app/public", // Percorso in cui si trovano i file statici
  prefix: "/", // URL prefix per accedere ai file statici
});

// Declare a route
fastify.post("/api", async function handler(request, reply) {
  // console.log(request.body);
  let result = await analyze(request.body as string);
  return JSON.stringify(result);
});

async function main() {
  // Run the server!
  try {
    await fastify.listen({ host: "0.0.0.0", port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}
main();
