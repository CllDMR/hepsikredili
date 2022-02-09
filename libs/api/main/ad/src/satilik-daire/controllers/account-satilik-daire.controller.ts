import {
  AdDetailSatilikDaire,
  AdSatilikDaire,
  CheckPolicies,
  CreateAdSatilikDairePolicyHandler,
  DeleteAdSatilikDairePolicyHandler,
  JwtAuthGuard,
  PoliciesGuard,
  ReadAdSatilikDairePolicyHandler,
  UpdateAdSatilikDairePolicyHandler,
} from '@hepsikredili/api/main/shared';
import { ValidateMongooseObjectIdPipe } from '@hepsikredili/api/shared';
import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { CreateAccountSatilikDaireDetailDto } from '../../satilik-daire/dtos/create-account-satilik-daire-detail.dto';
import { CreateAccountSatilikDaireDto } from '../../satilik-daire/dtos/create-account-satilik-daire.dto';
import { QueryAccountSatilikDaireDto } from '../../satilik-daire/dtos/query-account-satilik-daire.dto';
import { UpdateAccountSatilikDaireDto } from '../../satilik-daire/dtos/update-account-satilik-daire.dto';
import { AccountSatilikDaireService } from '../services/account-satilik-daire.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('accounts/:accountId/ads-satilik-daire')
export class AccountSatilikDaireController {
  constructor(
    private readonly accountSatilikDaireService: AccountSatilikDaireService
  ) {}

  @CheckPolicies(new ReadAdSatilikDairePolicyHandler())
  @Get()
  async readAll(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Query() queryAccountSatilikDaireDto: QueryAccountSatilikDaireDto
  ): Promise<AdSatilikDaire[]> {
    return await this.accountSatilikDaireService.findAll(
      accountId,
      queryAccountSatilikDaireDto
    );
  }

  @CheckPolicies(new ReadAdSatilikDairePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdSatilikDaire> {
    const adSatilikDaire = await this.accountSatilikDaireService.findOneById(
      accountId,
      id
    );
    if (!adSatilikDaire)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return adSatilikDaire;
  }

  @CheckPolicies(new CreateAdSatilikDairePolicyHandler())
  @Post()
  async create(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Body('ad') createAccountSatilikDaireDto: CreateAccountSatilikDaireDto,
    @Body('adDetail')
    createAccountSatilikDaireDetailDto: CreateAccountSatilikDaireDetailDto
  ): Promise<{ ad: AdSatilikDaire; adDetail: AdDetailSatilikDaire }> {
    const data = await this.accountSatilikDaireService.create(
      accountId,
      createAccountSatilikDaireDto,
      createAccountSatilikDaireDetailDto
    );
    if (!data) throw new BadRequestException(`Resource could not created`);
    return data;
  }

  @CheckPolicies(new UpdateAdSatilikDairePolicyHandler())
  @Patch(':id')
  async update(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateAccountSatilikDaireDto: UpdateAccountSatilikDaireDto
  ): Promise<AdSatilikDaire> {
    const adSatilikDaire = await this.accountSatilikDaireService.update(
      accountId,
      id,
      updateAccountSatilikDaireDto
    );
    if (!adSatilikDaire)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return adSatilikDaire;
  }

  @CheckPolicies(new DeleteAdSatilikDairePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdSatilikDaire> {
    const adSatilikDaire = await this.accountSatilikDaireService.remove(
      accountId,
      id
    );
    if (!adSatilikDaire)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return adSatilikDaire;
  }
}
