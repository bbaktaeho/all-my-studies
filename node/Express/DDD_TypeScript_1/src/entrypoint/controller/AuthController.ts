import { ISignInUseCase } from "@pbb/app/usecase/interface/ISignInUseCase";
import { IUserDto } from "@pbb/app/usecase/interface/IUserDto";
import { TYPES } from "@pbb/domain/constant/type";
import { AuthServiceLocator } from "@pbb/config/usecase/AuthServiceLocator";
import { inject } from "inversify";
import { Request, Response } from "express";
import { controller, httpPost, interfaces, request, response } from "inversify-express-utils";

@controller("/auth")
export class AuthController implements interfaces.Controller {
  private readonly signInUseCase: ISignInUseCase;
  constructor(@inject(TYPES.AuthServiceLocator) serviceLocator: AuthServiceLocator) {
    this.signInUseCase = serviceLocator.getSignInUseCase();
  }

  @httpPost("/signin")
  public async signIn(@request() req: Request, @response() res: Response) {
    const userDto: IUserDto = req.body;
    return this.signInUseCase
      .signIn(userDto)
      .then((foundUserDto: IUserDto) => res.status(200).json({ user: foundUserDto }))
      .catch((err: Error) => res.status(400).json({ error: err.message }));
  }
}
