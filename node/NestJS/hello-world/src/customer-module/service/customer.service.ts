import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCustomerDTO } from '../dto/customer.dto';
import { Customer } from '../interface/customer.interface';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel('Customer') private readonly customerModel: Model<Customer>,
  ) {}

  public async listCustomer(): Promise<Customer[]> {
    const list = await this.customerModel.find();
    return list;
  }

  public async getCustomer(id: string): Promise<Customer> {
    return await this.customerModel.findById(id).exec();
  }

  public async createCustomer(customer: CreateCustomerDTO): Promise<Customer> {
    const newCustomer = await this.customerModel.create(customer);
    return newCustomer.save();
  }

  public async updateCustomer(
    id,
    customerDto: Partial<CreateCustomerDTO>,
  ): Promise<Customer> {
    const updatedCustomer = await this.customerModel.findByIdAndUpdate(
      id,
      customerDto,
      { new: true },
    );
    return updatedCustomer;
  }

  public async removeCustomer(id: string): Promise<Customer> {
    try {
      return await this.customerModel.findByIdAndRemove(id);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
