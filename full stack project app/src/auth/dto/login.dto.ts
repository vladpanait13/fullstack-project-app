// src/auth/dto/login.dto.ts

// Create DTOs using Zod or class validators for request and response payloads

import { IsNotEmpty, IsString } from "class-validator";

export class LoginDto {
  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
