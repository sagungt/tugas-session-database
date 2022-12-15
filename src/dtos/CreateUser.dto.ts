import { IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDTO {
  @IsNotEmpty()
  @MinLength(5)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;
}