import { Inject, Injectable } from '@nestjs/common';
import { User } from 'src/entities';
import { UsersService } from './../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    @Inject('ENCRYPTION') private readonly encryption: typeof bcrypt,
  ) {}

  async validateUser(username: string, password: string): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findOne(username);
    const validate = await this.encryption.compare(password, user.password);
    if (validate) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
