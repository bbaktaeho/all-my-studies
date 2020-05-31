import { Router } from "https://deno.land/x/oak/mod.ts";
import { User } from "../inferfaces/User.ts";
import { ResponseBody } from "../inferfaces/ResponseBody.ts";
// 임시 DB
const user: User[] = [];

const router = new Router();

// ctx = { reqeust, response }
router.get("/", ({ request, response }) => {
  // res.json(), res.send(), res.end(),
  response.status = 200;
  response.body = { sucess: true, message: "home" };
})
  .post("/auth/login", (ctx) => {
  })
  .post("/auth/register", async (ctx) => {
    let responseBody: ResponseBody = { success: false, message: "" };
    const body = await ctx.request.body();
    if (!ctx.request.hasBody) {
      responseBody.success = false;
      responseBody.message = "데이터가 없음";
      ctx.response.status = 400;
      ctx.response.body = responseBody;
    } else {
      // 가입
      const { name, phone, address } = body.value;
      const registUser: User = { name, phone, address };
      user.push(registUser);
      responseBody.success = true;
      responseBody.message = "가입되었습니다";
      ctx.response.status = 201;
      ctx.response.body = responseBody;
    }
  }).get("/manage/users", (ctx) => {
    let responseBody: ResponseBody = {
      success: true,
      message: "유저 불러오기",
      data: user,
    };
    ctx.response.body = responseBody;
  });

export default router;
