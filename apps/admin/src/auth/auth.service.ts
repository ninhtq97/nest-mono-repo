import { toDto } from '@app/core';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AccountService } from '../account/account.service';
import { AdminAccountDto } from '../account/dto/account.dto';
import { SignInDto } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(
    private accService: AccountService,
    private jwtService: JwtService,
  ) {}

  async jwtFindOne(id: string): Promise<AdminAccountDto> {
    const account = await this.accService.jwtFindOne(id);
    return toDto(AdminAccountDto, account);
  }

  async signIn(dto: SignInDto): Promise<string> {
    const admin = await this.accService.findOneOrThrow({
      username: dto.username,
    });

    if (!(await bcrypt.compare(dto.password, admin.password))) {
      throw new UnauthorizedException();
    }

    return this.jwtService.sign({ id: admin._id });
  }
}
