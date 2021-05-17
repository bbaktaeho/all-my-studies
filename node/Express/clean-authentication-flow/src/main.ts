import { Container } from "inversify";
import "reflect-metadata";
import { AuthServiceLocator } from "./configuration/usercases/AuthServiceLocator";
import { TYPES } from "./common/constants/types";
import { IUserRepository } from "./application/repositories/IUserRepository";
import { UserRepository } from "./infrastructure/UserRepository";
import { InversifyExpressServer } from "inversify-express-utils";
import * as express from "express";

const container = new Container();

// 의존성 주입
container.bind<AuthServiceLocator>(TYPES.AuthServiceLocator).to(AuthServiceLocator);
container.bind<IUserRepository>(TYPES.IUserRepository).to(UserRepository);

const server = new InversifyExpressServer(container);
server.setConfig((app: express.Application) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
});

const app = server.build();

app.listen(3000, () => {
  console.log(`server started at http://localhost:${3000}`);
});
