import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const port = 3000;

const router = new Router();

const movies = new Map();
movies.set("1", {
  id: "1",
  title: "Star Wars",
  publisher: "bbak",
});

router.get("/api", (ctx) => {
  ctx.response.body = "API Working";
}).get("/api/movies", (ctx) => {
  ctx.response.body = Array.from(movies.values());
}).get("/api/movies/:id", (ctx) => {
  if (ctx.params && ctx.params.id && movies.has(ctx.params.id)) {
    ctx.response.body = movies.get(ctx.params.id);
  }
}).post("/api/movies", async (ctx) => {
  const body = await ctx.request.body();
  const values = body.value;
  movies.set(values.id, { ...values });
  ctx.response.body = Array.from(movies.values());
}).patch("/api/movies/:id", async (ctx) => {
  if (ctx.params && ctx.params.id && movies.has(ctx.params.id)) {
    const body = await ctx.request.body();
    const title = body.value.title;
    movies.get(ctx.params.id).title = title;
    ctx.response.body = movies.get(ctx.params.id);
  }
}).delete("/api/movies/:id", async (ctx) => {
  if (ctx.params && ctx.params.id && movies.has(ctx.params.id)) {
    const id = await ctx.params.id;
    movies.delete(id);
    ctx.response.body = Array.from(movies.values());
  }
});

app.use(async (ctx, next) => {
  await next();
  console.log(`${ctx.request.method} ${ctx.request.url}`);
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port });
console.log(`localhost:${port}`);
