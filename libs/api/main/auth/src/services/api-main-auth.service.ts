import { JWTPayload, MyRequest, User } from '@hepsikredili/api/main/shared';
import { ApiMainUserService } from '@hepsikredili/api/main/user';
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
    private readonly userService: ApiMainUserService
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
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.userService.findOneByEmail(email);
    if (!user) return null;
    await this.verifyPassword(pass, user.password);

    const { _id, account, email: userEmail, emailVerified, kind } = user;
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

    const asduser = await this.userService.findOneByEmail(
      registerAuthDto.email
    );

    if (asduser) throw new BadRequestException('Already have user with email');

    const newUser = await this.userService.create(registerAuthDto);

    const payload: JWTPayload = {
      acc:
        typeof newUser.account === 'string'
          ? newUser.account
          : newUser.account._id.toHexString(),
      usr: newUser._id.toHexString(),
      knd: newUser.kind,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
