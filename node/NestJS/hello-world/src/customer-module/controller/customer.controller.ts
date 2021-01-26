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
import { CreateCustomerDTO, CustomerParamDTO } from '../dto/customer.dto';
import { CustomerService } from '../service/customer.service';

@Controller('customers') // 여기가 바로 라우터 되시겠다!
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async getAllCustomers(@Res() res: Response) {
    const data = await this.customerService.listCustomer();
    res.status(HttpStatus.OK).send(data);
  }

  @Post()
  async createCustomer(
    @Res() res: Response,
    @Body() customerReq: CreateCustomerDTO,
  ) {
    const data = await this.customerService.createCustomer(customerReq);
    res.status(HttpStatus.OK).json(data);
  }

  @Get(':customerId')
  async getCustomerById(
    @Param() param: CustomerParamDTO,
    @Res() res: Response,
  ) {
    const data = await this.customerService.getCustomer(param.customerId);
    res.status(HttpStatus.OK).json(data);
  }

  @Delete()
  async deleteCustomerById(
    @Query('customerId') id: string,
    @Res() res: Response,
  ) {
    const data = await this.customerService.getCustomer(id);
    res.status(HttpStatus.OK).json({
      message: 'customer deleted',
      data,
    });
  }

  @Put()
  async updateCustomerById(
    @Query('customerId') id: string,
    @Res() res: Response,
    @Req() req: Request,
  ) {
    const data = await this.customerService.updateCustomer(id, req.body);
    res.status(HttpStatus.OK).json(data);
  }
}
