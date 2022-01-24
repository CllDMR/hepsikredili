import {
  ApiMainAccountCorporateService,
  ApiMainAccountIndividualService,
} from '@hepsikredili/api/main/account';
import { JWTPayload, MyRequest, User } from '@hepsikredili/api/main/shared';
import { ApiMainUserService } from '@hepsikredili/api/main/user';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { RegisterCorporateAuthDto } from '../dtos/register-corporate-auth.dto';
import { RegisterIndividualAuthDto } from '../dtos/register-individual-auth.dto';

@Injectable()
export class ApiMainAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: ApiMainUserService,
    private readonly accountIndividualService: ApiMainAccountIndividualService,
    private readonly accountCorporateService: ApiMainAccountCorporateService
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
    await this.verifyPassword(pass.trim(), user.password.trim());

    const { _id, accounts, email: userEmail, emailVerified } = user;
    return {
      _id,
      accounts,
      email: userEmail,
      emailVerified,
    };
  }

  async login(user: MyRequest['user']) {
    const payload: JWTPayload = {
      accs: user.account_ids.map((account) =>
        typeof account === 'string' ? account : account._id.toHexString()
      ),
      usr: user.user_id.toHexString(),
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async registerIndividual(
    registerIndividualAuthDto: RegisterIndividualAuthDto
  ) {
    const existingAccount = await this.accountIndividualService.findOneByEmail(
      registerIndividualAuthDto.accountEmail
    );

    if (existingAccount)
      throw new BadRequestException('Already have account with email');

    const existingUser = await this.userService.findOneByEmail(
      registerIndividualAuthDto.userEmail
    );

    if (existingUser)
      throw new BadRequestException('Already have user with email');

    const newAccountIndividual = await this.accountIndividualService.create({
      email: registerIndividualAuthDto.accountEmail,
      name: registerIndividualAuthDto.accountName,
    });

    const newUserIndividual = await this.userService.create({
      account: newAccountIndividual._id.toHexString(),
      email: registerIndividualAuthDto.userEmail,
      password: registerIndividualAuthDto.password,
    });

    const payload: JWTPayload = {
      accs: newUserIndividual.accounts.map((account) =>
        typeof account === 'string' ? account : account._id.toHexString()
      ),
      usr: newUserIndividual._id.toHexString(),
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async registerCorporate(registerCorporateAuthDto: RegisterCorporateAuthDto) {
    const existingAccount = await this.accountCorporateService.findOneByEmail(
      registerCorporateAuthDto.accountEmail
    );

    if (existingAccount)
      throw new BadRequestException('Already have account with email');

    const existingUser = await this.userService.findOneByEmail(
      registerCorporateAuthDto.userEmail
    );

    if (existingUser)
      throw new BadRequestException('Already have user with email');

    const newAccountCorporate = await this.accountCorporateService.create({
      email: registerCorporateAuthDto.accountEmail,
      name: registerCorporateAuthDto.accountName,
    });

    const newUserCorporate = await this.userService.create({
      account: newAccountCorporate._id.toHexString(),
      email: registerCorporateAuthDto.userEmail,
      password: registerCorporateAuthDto.password,
    });

    const payload: JWTPayload = {
      accs: newUserCorporate.accounts.map((account) =>
        typeof account === 'string' ? account : account._id.toHexString()
      ),
      usr: newUserCorporate._id.toHexString(),
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
