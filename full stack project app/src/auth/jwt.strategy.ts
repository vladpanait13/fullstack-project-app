// src/auth/jwt.strategy.ts

// Implement JWT strategy - Create a JWT strategy to protect API routes

import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { AuthService } from "./auth.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "your-secret-key",
    });
  }

  async validate(payload: any) {
    return this.authService.validateUser(payload.email, payload.password);
  }
}
