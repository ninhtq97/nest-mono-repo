import { DatabaseOptions } from '@app/core';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseOptions,
    }),
    AuthModule,
    AccountModule,
  ],
})
export class AdminModule {}
