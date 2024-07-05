import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string): Promise<Partial<User>> {
    const user = await this.usersService.findByLogin(login);
    //todo change password validation
    if (!user || user.password !== pass) {
      return null;
    }
    //todo add hiding password

    return user;
  }

  signUp() {
    //todo
  }

  async login(user: Partial<User>): Promise<object> {
    const payload = { username: user.login, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
