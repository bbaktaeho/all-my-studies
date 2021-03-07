import { User } from "@pbb/domain/entity/User";
import { IUserReadOnlyRepository } from "../repository/interface/IUserReadOnlyRepository";
import { ISignInUseCase } from "./interface/ISignInUseCase";
import { IUserDto } from "./interface/IUserDto";

export default class SignInUseCase implements ISignInUseCase {
  constructor(private readonly userReadOnlyRepository: IUserReadOnlyRepository) {}

  public async signIn(userDto: IUserDto): Promise<IUserDto> {
    const { id, name, email, password, type } = userDto;
    let user = new User(id, name, email, password, type);
    user = await this.userReadOnlyRepository.fetch(user);
    const foundUserDto = user;
    return foundUserDto;
  }
}
