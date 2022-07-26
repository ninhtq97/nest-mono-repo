import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class SignInDto {
  @ApiProperty({ type: String })
  @IsEmail()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ type: String })
  @IsString()
  @IsNotEmpty()
  password: string;
}
