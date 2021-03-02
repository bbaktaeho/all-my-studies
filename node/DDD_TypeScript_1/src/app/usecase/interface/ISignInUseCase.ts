import { IUserDto } from "./IUserDto";

export interface ISignInUseCase {
  signIn(userDto: IUserDto): Promise<IUserDto>;
}
