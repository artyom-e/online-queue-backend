import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(login: string, pass: string): Promise<Partial<User>> {
    const user = await this.usersService.findByLogin(login);
    if (!user || !(await bcrypt.compare(pass, user.password))) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...preparedUser } = user;

    return preparedUser;
  }

  async login(user: Partial<User>): Promise<object> {
    const payload = { username: user.login, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
