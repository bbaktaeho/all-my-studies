/**
 * * 모듈은 어디에 저장될까?
 * ? 캐시들은 하드에 저장되는데 위치는?
 * 
 */

import { serve } from "https://deno.land/std/http/server.ts";
const s = serve({ port: 8080 });
console.log("http://localhost:8080/");

// request 를 잡아옴
for await (const req of s) {
  req.respond({ body: "디노 데노 듸노 뒈노 대노 극대노" });
}
