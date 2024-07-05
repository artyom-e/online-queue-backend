import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(6)
  @MaxLength(32)
  login: string;

  @IsString()
  @MinLength(8)
  @MaxLength(64)
  password: string;
}
