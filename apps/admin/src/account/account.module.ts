import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';
import { AdminAccount, AdminAccountSchema } from './schemas/account.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: AdminAccount.name, schema: AdminAccountSchema },
    ]),
  ],
  controllers: [AccountController],
  providers: [AccountService],
  exports: [AccountService],
})
export class AccountModule {}
