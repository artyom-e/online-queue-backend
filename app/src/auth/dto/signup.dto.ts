import { IsString, MaxLength, MinLength } from 'class-validator';

export class SignupDto {
  @IsString()
  @MinLength(6)
  @MaxLength(32)
  login: string;

  @IsString()
  @MinLength(8)
  password: string;
}
