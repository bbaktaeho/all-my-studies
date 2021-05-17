import { inject } from "inversify";
import { controller, httpPost, interfaces, request, response } from "inversify-express-utils";
import { ISignInUseCase } from "../../application/usecase/ISignInUseCase";
import { TYPES } from "../../common/constants/types";
import * as express from "express";
import { AuthServiceLocator } from "../../configuration/usercases/AuthServiceLocator";
import { IUserDto } from "../../application/usecase/IUserDto";

@controller("/auth")
export class AuthController implements interfaces.Controller {
  private readonly signInUseCase: ISignInUseCase;

  constructor(@inject(TYPES.AuthServiceLocator) serviceLocator: AuthServiceLocator) {
    this.signInUseCase = serviceLocator.getSignInUseCase();
  }

  @httpPost("/signin")
  public async signIn(@request() req: express.Request, @response() res: express.Response) {
    const dto: IUserDto = req.body;
    return this.signInUseCase
      .signIn(dto)
      .then((userDto: IUserDto) => res.status(200).json(userDto))
      .catch((err: Error) => res.status(400).json({ error: err.message }));
  }
}
