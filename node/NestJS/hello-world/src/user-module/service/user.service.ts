import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../database/entity/user.entity';
import { UserDTO } from '../dto/user.dto';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepo: Repository<User>) {}

  public async listUser(): Promise<User[]> {
    const list = await this.userRepo.find();
    return list;
  }

  public async getUser(id: string): Promise<User> {
    const user = await this.userRepo.findOne(id);
    if (!user) throw new NotFoundException('user not found');
    return user;
  }

  public async createUser(user: UserDTO): Promise<User> {
    try {
      // const {email} = user
      const user = new User();
      user.email = 'test@test.com';
      return await this.userRepo.save(user);
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  public async removeUser(id: string): Promise<User> {
    const user = await this.userRepo.findOne(id);
    if (!user) throw new NotFoundException('user not found');
    return await this.userRepo.remove(user);
  }
}
