import {
  CheckPolicies,
  CreateGeneralAdSatilikDairePolicyHandler,
  DeleteGeneralAdSatilikDairePolicyHandler,
  JwtAuthGuard,
  AdSatilikDaire,
  PoliciesGeneralGuard,
  ReadGeneralAdSatilikDairePolicyHandler,
  UpdateGeneralAdSatilikDairePolicyHandler,
} from '@hepsikredili/api/main/shared';
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
  async readOneById(@Param('id') id: string): Promise<AdSatilikDaire> {
    const satilikDaire = await this.satilikDaireService.findOneById(id);
    if (!satilikDaire)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return satilikDaire;
  }

  @CheckPolicies(new CreateGeneralAdSatilikDairePolicyHandler())
  @Post()
  async create(
    @Body() createSatilikDaireDto: CreateSatilikDaireDto
  ): Promise<AdSatilikDaire> {
    const satilikDaire = await this.satilikDaireService.create(
      createSatilikDaireDto
    );
    if (!satilikDaire)
      throw new BadRequestException(`Resource could not created`);
    return satilikDaire;
  }

  @CheckPolicies(new UpdateGeneralAdSatilikDairePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSatilikDaireDto: UpdateSatilikDaireDto
  ): Promise<AdSatilikDaire> {
    const satilikDaire = await this.satilikDaireService.update(
      id,
      updateSatilikDaireDto
    );
    if (!satilikDaire)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return satilikDaire;
  }

  @CheckPolicies(new DeleteGeneralAdSatilikDairePolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<AdSatilikDaire> {
    const satilikDaire = await this.satilikDaireService.remove(id);
    if (!satilikDaire)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return satilikDaire;
  }
}
