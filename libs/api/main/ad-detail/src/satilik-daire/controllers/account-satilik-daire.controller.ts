import {
  AdDetailSatilikDaire,
  CheckPolicies,
  DeleteAdDetailSatilikDairePolicyHandler,
  JwtAuthGuard,
  PoliciesGuard,
  ReadAdDetailSatilikDairePolicyHandler,
  UpdateAdDetailSatilikDairePolicyHandler,
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
  Query,
  UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { QuerySatilikDaireDto } from '../dtos/query-satilik-daire.dto';
import { UpdateSatilikDaireDto } from '../dtos/update-satilik-daire.dto';
import { AccountSatilikDaireService } from '../services/account-satilik-daire.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('accounts/:accountId/ad-details-satilik-daire')
export class AccountSatilikDaireController {
  constructor(
    private readonly accountsatilikDaireService: AccountSatilikDaireService
  ) {}

  @CheckPolicies(new ReadAdDetailSatilikDairePolicyHandler())
  @Get()
  async readAll(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Query() querySatilikDaireDto: QuerySatilikDaireDto
  ): Promise<AdDetailSatilikDaire[]> {
    return await this.accountsatilikDaireService.findAll(
      accountId,
      querySatilikDaireDto
    );
  }

  @CheckPolicies(new ReadAdDetailSatilikDairePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdDetailSatilikDaire> {
    const satilikDaire = await this.accountsatilikDaireService.findOneById(
      accountId,
      id
    );
    if (!satilikDaire)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return satilikDaire;
  }

  @CheckPolicies(new UpdateAdDetailSatilikDairePolicyHandler())
  @Patch(':id')
  async update(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateSatilikDaireDto: UpdateSatilikDaireDto
  ): Promise<AdDetailSatilikDaire> {
    const satilikDaire = await this.accountsatilikDaireService.update(
      accountId,
      id,
      updateSatilikDaireDto
    );
    if (!satilikDaire)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return satilikDaire;
  }

  @CheckPolicies(new DeleteAdDetailSatilikDairePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdDetailSatilikDaire> {
    const satilikDaire = await this.accountsatilikDaireService.remove(
      accountId,
      id
    );
    if (!satilikDaire)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return satilikDaire;
  }
}
