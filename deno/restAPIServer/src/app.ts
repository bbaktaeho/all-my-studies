import { Application } from "https://deno.land/x/oak/mod.ts";
import UserController from "./user.controller.ts";
const app = new Application();

// Logger
app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.headers.get("X-Response-Time");
  console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.response.headers.set("X-Response-Time", `${ms}ms`);
});

app.use(UserController.routes());
app.use(UserController.allowedMethods());

console.log(`Sever started at port 3000`);

await app.listen({ port: 3000 });
