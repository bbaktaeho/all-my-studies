import { IsDefined, IsEmail, IsNotEmpty } from 'class-validator';

export class UserDTO {
  readonly first_name: string;
  readonly last_name: string;

  @IsEmail()
  @IsDefined()
  readonly email: string;

  readonly phone: string;
  readonly address: string;
  readonly description: string;
  readonly created_at: Date;
}

export class UserParamDTO {
  @IsNotEmpty()
  readonly userId: string;
}
