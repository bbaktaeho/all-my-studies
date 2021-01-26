import { Transform, Type } from 'class-transformer';
import {
  isBoolean,
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class TaskDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class TaskParamDto {
  @IsUUID()
  @IsDefined()
  id: string;
}

export class QueryParamDto {
  @IsDefined()
  @IsBoolean()
  @Type(() => Boolean)
  // @Transform((v) => {
  //   console.log(v);

  //   if (v.value === 'true') return true;
  //   if (v.value === 'false') return false;
  // })
  filter: boolean;

  @IsDefined()
  @IsString()
  name: string;
}
