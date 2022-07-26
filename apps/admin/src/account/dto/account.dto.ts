import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { ObjectId } from 'mongoose';

export class AdminAccountDto {
  @ApiProperty({ type: String })
  @Expose()
  id: ObjectId;

  @ApiProperty({ type: String })
  @Expose()
  username: string;
}
