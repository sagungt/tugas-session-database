import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDTO } from 'src/dtos/CreateUser.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entities';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User> ,
    @Inject('ENCRYPTION') private readonly encryption: typeof bcrypt,
  ) {}

  async findOne(username: string): Promise<User> {
    return this.userRepository.findOne({
      where: { username },
    });
  }

  async createUser(createUserDto: CreateUserDTO): Promise<{ message: string }> {
    const newUser = this.userRepository.create(createUserDto);
    newUser.password = await this.encryption.hash(newUser.password, 10);
    await this.userRepository.save(newUser);
    return { message: 'Register Successful' };
  }
}
