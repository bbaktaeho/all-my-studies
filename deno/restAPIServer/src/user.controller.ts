import { Router } from "https://deno.land/x/oak/mod.ts";
import db from "./db.ts";
const router = new Router();

router.get("/users", async (ctx) => {
  try {
    const result = await db.query(`SELECT * FROM user;`);
    ctx.response.body = result;
  } catch (err) {
    console.log(err);
    ctx.throw(err);
  }
}).get("/users/:id", async (ctx) => {
  if (ctx.params && ctx.params.id) {
    const result = await db.query(
      `SELECT * FROM user WHERE id=?`,
      [ctx.params.id],
    );
    ctx.response.body = result[0];
  }
}).post("/users", async (ctx) => {
  try {
    if (ctx.request.hasBody) {
      const body = await ctx.request.body();
      const { displayName, email, password } = body.value;
      const result = await db.query(
        "INSERT INTO user (displayName, email, password) VALUES (?,?,?)",
        [displayName, email, password],
      );
      ctx.response.body = { success: true };
    }
  } catch (err) {
    console.log(err);
    ctx.throw(err);
  }
});

export default router;
