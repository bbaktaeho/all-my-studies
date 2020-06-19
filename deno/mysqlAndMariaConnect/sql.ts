import { Client } from "https://deno.land/x/mysql/mod.ts";
const client = await new Client().connect({
  hostname: "127.0.0.1",
  username: "root",
  db: "enok",
  password: "9036",
});

// sql 문
await client.execute(`CREATE DATABASE IF NOT EXISTS enok`);
await client.execute(`USE enok`);

await client.execute("DROP TABLES IF EXISTS users");
await client.execute(`
    CREATE TABLE users (    
        id int(11) NOT NULL AUTO_INCREMENT,
        name varchar(100) NOT NULL,
        PRIMARY KEY (id)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`);

let result = await client.execute(`INSERT INTO users(name) value(?)`, ["bbak"]);
let update = await client.execute(
  `UPDATE users SET name = "bbak taeho" WHERE id = 1 `,
);
// let deleted = await client.execute(`DELETE FROM users WHERE id = 1`);
let query = await client.query("SELECT * FROM users WHERE id = 1");

console.log(query);
await client.close();
