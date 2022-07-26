import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';
import { AdminAccount, AdminAccountDocument } from './schemas/account.schema';

@Injectable()
export class AccountService {
  constructor(
    @InjectModel(AdminAccount.name)
    private readonly accModel: Model<AdminAccountDocument>,
  ) {}

  async jwtFindOne(id: string): Promise<AdminAccount> {
    const account = await this.accModel.findOne({ _id: id }).exec();

    return account;
  }

  async findOneOrThrow(
    filter: FilterQuery<AdminAccount>,
  ): Promise<AdminAccountDocument> {
    const entity = await this.accModel.findOne(filter).exec();

    if (!entity) {
      throw new NotFoundException(`Account not found`);
    }

    return entity;
  }
}
