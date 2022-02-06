import {
  AdDetailSatilikDaire,
  AdSatilikDaire,
  CheckPolicies,
  CreateGeneralAdSatilikDairePolicyHandler,
  DeleteGeneralAdSatilikDairePolicyHandler,
  JwtAuthGuard,
  PoliciesGeneralGuard,
  ReadGeneralAdSatilikDairePolicyHandler,
  UpdateGeneralAdSatilikDairePolicyHandler,
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
import { CreateSatilikDaireDetailDto } from '../dtos/create-satilik-daire-detail.dto';
import { CreateSatilikDaireDto } from '../dtos/create-satilik-daire.dto';
import { QuerySatilikDaireDto } from '../dtos/query-satilik-daire.dto';
import { UpdateSatilikDaireDto } from '../dtos/update-satilik-daire.dto';
import { SatilikDaireService } from '../services/satilik-daire.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('ads-satilik-daire')
export class SatilikDaireController {
  constructor(private readonly satilikDaireService: SatilikDaireService) {}

  @CheckPolicies(new ReadGeneralAdSatilikDairePolicyHandler())
  @Get()
  async readAll(
    @Query() querySatilikDaireDto: QuerySatilikDaireDto
  ): Promise<AdSatilikDaire[]> {
    return await this.satilikDaireService.findAll(querySatilikDaireDto);
  }

  @CheckPolicies(new ReadGeneralAdSatilikDairePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdSatilikDaire> {
    const adSatilikDaire = await this.satilikDaireService.findOneById(id);
    if (!adSatilikDaire)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return adSatilikDaire;
  }

  @CheckPolicies(new CreateGeneralAdSatilikDairePolicyHandler())
  @Post()
  async create(
    @Body('ad') createSatilikDaireDto: CreateSatilikDaireDto,
    @Body('adDetail') createSatilikDaireDetailDto: CreateSatilikDaireDetailDto
  ): Promise<{ ad: AdSatilikDaire; adDetail: AdDetailSatilikDaire }> {
    const data = await this.satilikDaireService.create(
      createSatilikDaireDto,
      createSatilikDaireDetailDto
    );
    if (!data) throw new BadRequestException(`Resource could not created`);
    return data;
  }

  @CheckPolicies(new UpdateGeneralAdSatilikDairePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateSatilikDaireDto: UpdateSatilikDaireDto
  ): Promise<AdSatilikDaire> {
    const adSatilikDaire = await this.satilikDaireService.update(
      id,
      updateSatilikDaireDto
    );
    if (!adSatilikDaire)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return adSatilikDaire;
  }

  @CheckPolicies(new DeleteGeneralAdSatilikDairePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<AdSatilikDaire> {
    const adSatilikDaire = await this.satilikDaireService.remove(id);
    if (!adSatilikDaire)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return adSatilikDaire;
  }
}
