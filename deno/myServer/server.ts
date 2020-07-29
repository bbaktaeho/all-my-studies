import { Application } from "https://deno.land/x/oak/mod.ts";
import Router from "./routes.ts";

const app = new Application();

app.use(Router.routes());
app.use(Router.allowedMethods()); // get, post, put, ... 모두 허락해주는 메소드

console.log(`Server is listening on port 3333`);

await app.listen({ port: 3333 });
