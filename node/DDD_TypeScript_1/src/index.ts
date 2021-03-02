import "reflect-metadata";
import { container } from "./common/di/container";
import { InversifyExpressServer } from "inversify-express-utils";
import * as express from "express";

const server = new InversifyExpressServer(container);
server.setConfig((application: express.Application) => {
  application.use(express.json());
  application.use(express.urlencoded({ extended: true }));
});

const app = server.build();
app.listen(5000, () => {
  console.log(`server started at http:localhost:${5000}`);
});
