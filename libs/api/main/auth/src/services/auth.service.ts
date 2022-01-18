import { JWTPayload, MyRequest, UserBase } from '@hepsikredili/api/main/shared';
import { ApiMainUserBaseService } from '@hepsikredili/api/main/user';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { RegisterAuthDto } from '../dtos/register-auth.dto';

@Injectable()
export class ApiMainAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userBaseService: ApiMainUserBaseService
  ) {}

  private async verifyPassword(
    plainTextPassword: string,
    hashedPassword: string
  ) {
    const isPasswordMatching = await compare(plainTextPassword, hashedPassword);
    if (!isPasswordMatching)
      throw new HttpException(
        'Wrong credentials provided',
        HttpStatus.BAD_REQUEST
      );
  }

  async validateUser(
    email: string,
    pass: string
  ): Promise<Omit<UserBase, 'password'> | null> {
    const userBase = await this.userBaseService.findOneByEmail(email);
    if (!userBase) return null;
    await this.verifyPassword(pass, userBase.password);

    const { _id, account, email: userEmail, emailVerified, kind } = userBase;
    return {
      _id,
      account,
      email: userEmail,
      emailVerified,
      kind,
    };
  }

  async login(user: MyRequest['user']) {
    const payload: JWTPayload = {
      acc:
        typeof user.account_id === 'string'
          ? user.account_id
          : user.account_id._id.toHexString(),
      usr: user.user_id.toHexString(),
      knd: user.user_kind,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(registerAuthDto: RegisterAuthDto) {
    const hashedPassword = await hash(registerAuthDto.password, 10);
    registerAuthDto.password = hashedPassword;

    const existingUser = await this.userBaseService.findOneByEmail(
      registerAuthDto.email
    );

    if (existingUser)
      throw new BadRequestException('Already have user with email');

    const newUserBase = await this.userBaseService.create(registerAuthDto);

    const payload: JWTPayload = {
      acc:
        typeof newUserBase.account === 'string'
          ? newUserBase.account
          : newUserBase.account._id.toHexString(),
      usr: newUserBase._id.toHexString(),
      knd: newUserBase.kind,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
