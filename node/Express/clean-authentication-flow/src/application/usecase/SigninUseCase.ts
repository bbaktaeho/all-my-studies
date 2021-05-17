import { IUserRepository } from "../repositories/IUserRepository";
import { ISignInUseCase } from "./ISignInUseCase";
import { IUserDto } from "./IUserDto";
import { User } from "../../domain/User";

export class SignInUseCase implements ISignInUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async signIn(userDto: IUserDto): Promise<IUserDto> {
    const { id, email, name, password, type } = userDto;
    let user = new User(id, email, name, password, type);
    user = await this.userRepository.fetch(user);

    return user;
  }
}
