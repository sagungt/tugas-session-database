import { Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AppService {
  constructor(
    @Inject('ENCRYPTION') private readonly encryption: typeof bcrypt,
  ) {}

  async encrypt(raw: string): Promise<string> {
    return this.encryption.hash(raw, 10);
  }

  getHello(): string {
    return 'Hello World!';
  }
}
