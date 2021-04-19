import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { User } from "./entity/User";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// todo: CREATE
app.post("/users", async (req, res) => {
  const { name, email, role } = req.body;
  try {
    const user = User.create({ name, email, role });
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});
// todo: READ
// todo: UPDATE
// todo: DELETE
// todo: FIND

createConnection()
  .then(async connection => {
    app.listen(3000, () => console.info("server up at http://localhost:3000"));
  })
  .catch(error => console.log(error));
