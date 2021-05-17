import { User } from "@pbb/domain/User";

export interface IUserRepository {
    fetch(user: User): Promise<User>;
}