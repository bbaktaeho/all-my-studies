import { Application } from "https://deno.land/x/oak/mod.ts";
import Router from "./routes/auth.ts";

const app = new Application();
app.use(Router.routes());
app.use(Router.allowedMethods());

console.log("server is listening on port 3333");
await app.listen({ port: 3333 });
