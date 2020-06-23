import { v4 } from "https://deno.land/std/uuid/mod.ts";
// interface
import Todo from "../interfaces/Todo.ts";

// 임시 데이터베이스
let todos: Todo[] = [
  {
    id: v4.generate(),
    todo: "walk dog",
    isCompleted: true,
  },
  {
    id: v4.generate(),
    todo: "eat food",
    isCompleted: false,
  },
];

export default todos;
