import {
  ApiMainAccountCorporateService,
  ApiMainAccountIndividualService,
} from '@hepsikredili/api/main/account';
import { JWTPayload, MyRequest, UserBase } from '@hepsikredili/api/main/shared';
import {
  ApiMainUserBaseService,
  ApiMainUserCorporateService,
  ApiMainUserIndividualService,
} from '@hepsikredili/api/main/user';
import {
  BadRequestException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { RegisterCorporateAuthDto } from '../dtos/register-corporate-auth.dto';
import { RegisterIndividualAuthDto } from '../dtos/register-individual-auth.dto';

@Injectable()
export class ApiMainAuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userBaseService: ApiMainUserBaseService,
    private readonly userIndividualService: ApiMainUserIndividualService,
    private readonly userCorporateService: ApiMainUserCorporateService,
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

  async registerIndividual(
    registerIndividualAuthDto: RegisterIndividualAuthDto
  ) {
    const hashedPassword = await hash(registerIndividualAuthDto.password, 10);
    registerIndividualAuthDto.password = hashedPassword;

    const existingAccount = await this.accountIndividualService.findOneByEmail(
      registerIndividualAuthDto.email
    );

    if (existingAccount)
      throw new BadRequestException('Already have account with email');

    const existingUser = await this.userIndividualService.findOneByEmail(
      registerIndividualAuthDto.email
    );

    if (existingUser)
      throw new BadRequestException('Already have user with email');

    const newAccountIndividual = await this.accountIndividualService.create(
      registerIndividualAuthDto
    );

    const newUserIndividual = await this.userIndividualService.create({
      ...registerIndividualAuthDto,
      account: newAccountIndividual._id.toHexString(),
    });

    const payload: JWTPayload = {
      acc:
        typeof newUserIndividual.account === 'string'
          ? newUserIndividual.account
          : newUserIndividual.account._id.toHexString(),
      usr: newUserIndividual._id.toHexString(),
      knd: newUserIndividual.kind,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async registerCorporate(registerCorporateAuthDto: RegisterCorporateAuthDto) {
    const hashedPassword = await hash(registerCorporateAuthDto.password, 10);
    registerCorporateAuthDto.password = hashedPassword;

    const existingAccount = await this.accountCorporateService.findOneByEmail(
      registerCorporateAuthDto.email
    );

    if (existingAccount)
      throw new BadRequestException('Already have account with email');

    const existingUser = await this.userCorporateService.findOneByEmail(
      registerCorporateAuthDto.email
    );

    if (existingUser)
      throw new BadRequestException('Already have user with email');

    const newAccountCorporate = await this.accountCorporateService.create(
      registerCorporateAuthDto
    );

    const newUserCorporate = await this.userCorporateService.create({
      ...registerCorporateAuthDto,
      account: newAccountCorporate._id.toHexString(),
    });

    const payload: JWTPayload = {
      acc:
        typeof newUserCorporate.account === 'string'
          ? newUserCorporate.account
          : newUserCorporate.account._id.toHexString(),
      usr: newUserCorporate._id.toHexString(),
      knd: newUserCorporate.kind,
    };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
