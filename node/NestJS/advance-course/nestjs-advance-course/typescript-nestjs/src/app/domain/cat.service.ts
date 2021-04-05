import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './cat.dto';
import { Cat } from './cat.interface';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: CreateCatDto) {
    const newCat = {id: "123213254", ...cat}
    this.cats.push(newCat);
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findById(id): Cat {
    return this.cats.filter((cat) => cat.id == id)[0]
  }
}