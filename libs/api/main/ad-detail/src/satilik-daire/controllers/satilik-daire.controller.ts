import {
  AdDetailSatilikDaire,
  CheckPolicies,
  CreateGeneralAdDetailSatilikDairePolicyHandler,
  DeleteGeneralAdDetailSatilikDairePolicyHandler,
  JwtAuthGuard,
  PoliciesGeneralGuard,
  ReadGeneralAdDetailSatilikDairePolicyHandler,
  UpdateGeneralAdDetailSatilikDairePolicyHandler,
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
@Controller('ad-details-satilik-daire')
export class SatilikDaireController {
  constructor(private readonly satilikDaireService: SatilikDaireService) {}

  @CheckPolicies(new ReadGeneralAdDetailSatilikDairePolicyHandler())
  @Get()
  async readAll(
    @Query() querySatilikDaireDto: QuerySatilikDaireDto
  ): Promise<AdDetailSatilikDaire[]> {
    return await this.satilikDaireService.findAll(querySatilikDaireDto);
  }

  @CheckPolicies(new ReadGeneralAdDetailSatilikDairePolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<AdDetailSatilikDaire> {
    const satilikDaire = await this.satilikDaireService.findOneById(id);
    if (!satilikDaire)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return satilikDaire;
  }

  @CheckPolicies(new CreateGeneralAdDetailSatilikDairePolicyHandler())
  @Post()
  async create(
    @Body() createSatilikDaireDto: CreateSatilikDaireDto
  ): Promise<AdDetailSatilikDaire> {
    const satilikDaire = await this.satilikDaireService.create(
      createSatilikDaireDto
    );
    if (!satilikDaire)
      throw new BadRequestException(`Resource could not created`);
    return satilikDaire;
  }

  @CheckPolicies(new UpdateGeneralAdDetailSatilikDairePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSatilikDaireDto: UpdateSatilikDaireDto
  ): Promise<AdDetailSatilikDaire> {
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

  @CheckPolicies(new DeleteGeneralAdDetailSatilikDairePolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<AdDetailSatilikDaire> {
    const satilikDaire = await this.satilikDaireService.remove(id);
    if (!satilikDaire)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return satilikDaire;
  }
}
