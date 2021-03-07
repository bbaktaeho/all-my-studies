import { User } from "@pbb/domain/entity/User";
export interface IUserReadOnlyRepository {
  fetch(user: User): Promise<User>;
}
