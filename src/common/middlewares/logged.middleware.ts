import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggedMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    if (req.isAuthenticated()) {
      res.redirect('/home');
    }
    next();
  }
}