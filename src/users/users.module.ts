import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UsersService } from './users.service';
import { User } from 'src/entities';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    UsersService,
    {
      provide: 'ENCRYPTION',
      useValue: bcrypt,
    }],
  exports: [
    TypeOrmModule,
    UsersService
  ]
})
export class UsersModule {}
