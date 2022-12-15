import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Injectable()
export class LoginGuard extends AuthGuard('local') {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const result = (await super.canActivate(context)) as boolean;
    const request: Request = context.switchToHttp().getRequest<Request>();
    await super.logIn(request);
    return result;
  }
}