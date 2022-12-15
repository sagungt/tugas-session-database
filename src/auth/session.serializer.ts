import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { User } from 'src/entities';

@Injectable()
export class SessionSerializer extends PassportSerializer {
  serializeUser(
    user: Omit<User, 'password'>,
    done: (err: Error, user: Omit<User, 'password'>) => void,
  ): void {
    done(null, user);
  }

  deserializeUser(
    payload: string,
    done: (err: Error, payload: string) => void,
  ): void {
    done(null, payload);
  }
}