import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import * as bcrypt from 'bcrypt';
import { UsersModule } from './../users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [
    AuthService,
    LocalStrategy,
    SessionSerializer,
    {
      provide: 'ENCRYPTION',
      useValue: bcrypt,
    }
  ]
})
export class AuthModule {}
