import api from "https://deno.land/x/api/index.ts"; // For Ts
// import api from 'https://deno.land/x/api/index.js' // For JS

console.log(await api.get("https://jsonplaceholder.typicode.com/todos/"));

console.log(await api.getone("https://jsonplaceholder.typicode.com/todos/", 1));

console.log(
  await api.post("https://jsonplaceholder.typicode.com/todos/", {
    userId: 5,
    title: "excepturi a et neque qui expedita vel voluptate",
    completed: false,
  }),
);
console.log(await api.delete("https://jsonplaceholder.typicode.com/todos/1"));
console.log(
  await api.put("https://jsonplaceholder.typicode.com/todos/1", {
    userId: 1,
    title: "one",
    completed: true,
  }),
);

