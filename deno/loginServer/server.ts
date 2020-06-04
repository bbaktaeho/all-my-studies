import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import authMiddleware from "./authMiddleware.ts";

import { login, guest, auth } from "./routes.ts";
const router = new Router();

router
  .post("/login", login)
  .get("/guest", guest)
  .get("/auth", authMiddleware, auth);

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());
app.listen({ port: 3000 });
console.log("start 3000");
