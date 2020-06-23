import { Application } from "https://deno.land/x/oak/mod.ts";
import { green, yellow } from "https://deno.land/std@0.58.0/fmt/colors.ts";
// routes
import todoRouter from "./routes/todo.ts";
// not found
import notFound from "./middlewares/notFound.ts";
// logger
import logger from "./middlewares/logger.ts";

const app = new Application();
const port: number = 8080;
app.use(logger.logger);
app.use(logger.responseTime);
app.use(todoRouter.routes());
app.use(todoRouter.allowedMethods());
// 404 page
app.use(notFound);

console.log(`${yellow("Listening on:")} ${green(`${port}`)}`);
await app.listen({ port });
