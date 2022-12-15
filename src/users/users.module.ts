import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],
  exports: [TypeOrmModule, UsersService]
})
export class UsersModule {}
