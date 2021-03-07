import { IUserReadOnlyRepository } from "@pbb/app/repository/interface/IUserReadOnlyRepository";
import { User } from "@pbb/domain/entity/User";
import { injectable } from "inversify";

@injectable()
export class UserRepository implements IUserReadOnlyRepository {
  public async fetch(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
}
