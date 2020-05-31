import { Context } from "https://deno.land/x/oak/mod.ts";
import { validateJwt } from "https://deno.land/x/djwt/validate.ts";
import { ResponseBody } from "../../inferfaces/ResponseBody.ts";

const tokenValidator = (ctx: Context, next: any) => {
  const headers: Headers = ctx.request.headers;

  const auth = headers.get("Authorization");
  if (!auth) {
    const responseBody: ResponseBody = {
      success: false,
      message: "token is invalid",
    };
    ctx.response.status = 401;
    ctx.response.body = responseBody;
  } else {
    const jwt = auth.split(" ")[1];
    if (!jwt) {
      ctx.response.status = 401;
      return;
    }
  }
};

export { tokenValidator };
