const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
});

app.get("/foo", (req, res) => {
  res.json({ foo: "bar" });
});

app.post("/bar", (req, res) => {
  var body = req.body;
  console.log(req.body.foo);
  res.send(req.body.foo);
});
