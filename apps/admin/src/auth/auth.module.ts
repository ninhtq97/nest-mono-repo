import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AccountModule } from '../account/account.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_ADMIN_SECRET,
      signOptions: { expiresIn: process.env.JWT_ADMIN_EXPIRES_IN },
    }),
    AccountModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
