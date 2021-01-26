import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  Param,
  ParseBoolPipe,
  Post,
  Query,
  Req,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { QueryParamDto, TaskDto, TaskParamDto } from './dto/tast.dto';
import { Task } from './interface/task';
import { TaskService } from './task.service';

@Controller('tasks') // 여기가 바로 라우터 되시겠다!
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  async getAllTasks(@Res() res: Response) {
    const data = await this.taskService.getAllTasks();
    return res.status(200).send(data);
  }

  // @Get('/filter/data')
  // @UsePipes(new ValidationPipe())
  // async filterTask(@Query() reqParam: QueryParamDto, @Res() res: Response) {
  //   const data = await this.taskService.filterTask(reqParam.filter);
  //   return res.status(200).send(data);
  // }
  @Get('/filter/data')
  // @UsePipes(new ValidationPipe({ whitelist: false, transform: true }))
  @UsePipes(new ValidationPipe())
  async filterTask(@Query() reqParam: QueryParamDto, @Res() res: Response) {
    const data = await this.taskService.filterTask(reqParam.filter);
    return res.status(200).send(data);
  }

  @Get(':id')
  @UsePipes(new ValidationPipe())
  async getTask(@Param() reqParam: TaskParamDto) {
    // try {
    return await this.taskService.getTask(reqParam.id);
    // return res.status(200).send(data);
    // } catch (error) {
    // throw new InternalServerErrorException(error);
    // throw new HttpException(error, HttpStatus.INTERNAL_SERVER_ERROR);
    // }
  }

  @Delete(':id')
  @UsePipes(new ValidationPipe())
  async deleteTask(@Param() reqParam: TaskParamDto, @Res() res: Response) {
    const data = await this.taskService.deleteTask(reqParam.id);
    return res.status(200).send(data);
  }

  @Post()
  @UsePipes(new ValidationPipe())
  async addTask(@Body() task: TaskDto, @Res() res: Response) {
    const data = await this.taskService.addTask(task);
    return res.status(201).send(data);
  }
}
