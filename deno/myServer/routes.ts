import { Router } from "https://deno.land/x/oak/mod.ts";
import { Book } from "./types.ts";
import { v4 } from "https://deno.land/std/uuid/mod.ts";

let books: Book[] = [
  { id: "1", title: "test1", author: "one" },
  { id: "2", title: "test2", author: "two" },
  { id: "3", title: "test3", author: "three" },
  { id: "4", title: "test4", author: "four" },
];

const router = new Router();
// context = {request, response, ...}
router.get("/", (context) => {
  context.response.body = "hello world";
})
  .get("/books", (context) => {
    context.response.body = books;
  })
  .post("/book", async (context) => {
    const body = await context.request.body({});
    // body 체크하기
    if (!context.request.hasBody) {
      context.response.status = 400;
      context.response.body = "데이터가 없음";
    } else {
      const book: Book = body.value;
      book.id = v4.generate();
      books.push(book);
      context.response.status = 201;
      context.response.body = book;
    }
  }).get("/books/:id", async (ctx) => {
  });

export default router;
