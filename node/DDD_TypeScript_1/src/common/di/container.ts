import { IUserReadOnlyRepository } from "@pbb/app/repository/interface/IUserReadOnlyRepository";
import { AuthServiceLocator } from "@pbb/config/usecase/AuthServiceLocator";
import { TYPES } from "@pbb/domain/constant/type";
import { UserRepository } from "@pbb/infrastructure/UserRepository";
import { Container } from "inversify";

const container = new Container();

// set up bindings
container.bind<AuthServiceLocator>(TYPES.AuthServiceLocator).to(AuthServiceLocator);
container.bind<IUserReadOnlyRepository>(TYPES.IUserReadOnlyRepository).to(UserRepository);

export { container };
