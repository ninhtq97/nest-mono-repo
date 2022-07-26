import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminAccountDocument = AdminAccount & Document;

@Schema({ timestamps: true })
export class AdminAccount {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: number;
}

export const AdminAccountSchema = SchemaFactory.createForClass(AdminAccount);
