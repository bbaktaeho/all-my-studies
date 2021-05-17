import { IUserRepository } from "@pbb/application/repositories/IUserRepository";
import { User } from "@pbb/domain/User";
import { injectable } from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
  public fetch(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
