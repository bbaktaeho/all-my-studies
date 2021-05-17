import { inject, injectable } from "inversify";
import { SignInUseCase } from "../../application/usecase/SigninUseCase";
import { IUserRepository } from "../../application/repositories/IUserRepository";
import { TYPES } from '../../common/constants/types';

@injectable()
export class AuthServiceLocator {
  constructor(@inject(TYPES.IUserRepository) private readonly repository: IUserRepository) {}

  public getSignInUseCase() {
    return new SignInUseCase(this.repository);
  }
}
