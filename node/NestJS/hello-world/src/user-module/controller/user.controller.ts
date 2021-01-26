import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { UserDTO, UserParamDTO } from '../dto/user.dto';
import { UserService } from '../service/user.service';

@Controller('users') // 여기가 바로 라우터 되시겠다!
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(@Res() res: Response) {
    const users = await this.userService.listUser();
    res.status(HttpStatus.OK).json(users);
  }

  @Post()
  async createUser(@Res() res: Response, @Body() userReq: UserDTO) {
    try {
      const data = await this.userService.createUser(userReq);
      res.status(HttpStatus.OK).json(data);
    } catch (err) {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err);
    }
  }

  @Get(':UserId')
  async getUserById(@Param() param: UserParamDTO) {
    return await this.userService.getUser(param.userId);
  }

  @Delete()
  async deleteUserById(@Query('userId') id: string) {
    return await this.userService.removeUser(id);
  }

  @Put()
  async updateUserById() {}
}
