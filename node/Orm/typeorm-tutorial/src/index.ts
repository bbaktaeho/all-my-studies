import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { User } from "./entity/User";
import { Post } from "./entity/Post";
import { validate } from "class-validator";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// todo: CREATE
app.post("/users", async (req, res) => {
  const { name, email, role } = req.body;
  try {
    // 새로운 엔티티 객체를 생성함
    const user = User.create({ name, email, role });
    const errors = await validate(user);
    if (errors.length > 0) throw errors;
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

// todo: READ
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({ relations: ["posts"] });
    return res.json(users);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

// todo: UPDATE
app.put("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  const { name, email, role } = req.body;
  try {
    const user = await User.findOneOrFail({ uuid });
    user.name = name || user.name;
    user.email = email || user.email;
    user.role = role || user.role;
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

// todo: DELETE
app.delete("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOneOrFail({ uuid });

    await user.remove();
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

// todo: FIND
app.get("/users/:uuid", async (req, res) => {
  const uuid = req.params.uuid;
  try {
    const user = await User.findOneOrFail({ uuid }, { relations: ["posts"] });
    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

// todo: CREATE A POST
app.post("/posts", async (req, res) => {
  const { userUuid, title, body } = req.body;
  try {
    const user = await User.findOneOrFail({ uuid: userUuid });
    const post = new Post({ title, body, user });
    await post.save();
    return res.status(201).json(post);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

// todo: READ POSTS
app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({ relations: ["user"] });
    return res.status(201).json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
});

createConnection()
  .then(async connection => {
    app.listen(3000, () => console.info("server up at http://localhost:3000"));
  })
  .catch(error => console.log(error));
