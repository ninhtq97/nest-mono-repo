import { Global, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from '../guards';

@Global()
@Module({
  providers: [{ provide: APP_GUARD, useClass: JwtAuthGuard }],
})
export class JwtGlobalModule {}
