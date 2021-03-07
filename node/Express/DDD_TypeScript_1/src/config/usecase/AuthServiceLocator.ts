import { IUserReadOnlyRepository } from "@pbb/app/repository/interface/IUserReadOnlyRepository";
import SignInUseCase from "@pbb/app/usecase/SignInUseCase";
import { TYPES } from "@pbb/domain/constant/type";
import { inject, injectable } from "inversify";

@injectable()
export class AuthServiceLocator {
  constructor(
    @inject(TYPES.IUserReadOnlyRepository)
    private readonly repository: IUserReadOnlyRepository,
  ) {}

  public getSignInUseCase() {
    return new SignInUseCase(this.repository);
  }
}
