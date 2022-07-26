import { TJwtPayload } from '@app/core/types';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_ADMIN_SECRET,
    });
  }

  async validate(payload: TJwtPayload) {
    const admin = await this.authService.jwtFindOne(payload.id);

    if (!admin) {
      throw new UnauthorizedException();
    }

    return admin;
  }
}
