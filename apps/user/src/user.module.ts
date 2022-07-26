import { DatabaseOptions } from '@app/core/configs';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      useClass: DatabaseOptions,
    }),
  ],
})
export class UserModule {}
