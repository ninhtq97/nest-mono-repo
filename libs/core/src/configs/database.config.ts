import { Injectable } from '@nestjs/common';
import {
  MongooseModuleOptions,
  MongooseOptionsFactory,
} from '@nestjs/mongoose';

@Injectable()
export class DatabaseOptions implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: process.env.MONGO_URI,
      dbName: process.env.MONGO_DB_NAME,
      retryAttempts: 2,
    };
  }
}
