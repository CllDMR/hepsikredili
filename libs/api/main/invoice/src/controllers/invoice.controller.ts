import {
  CheckPolicies,
  CreateGeneralInvoicePolicyHandler,
  DeleteGeneralInvoicePolicyHandler,
  JwtAuthGuard,
  Invoice,
  PoliciesGeneralGuard,
  ReadGeneralInvoicePolicyHandler,
  UpdateGeneralInvoicePolicyHandler,
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
import { CreateInvoiceDto } from '../dtos/create-invoice.dto';
import { QueryInvoiceDto } from '../dtos/query-invoice.dto';
import { UpdateInvoiceDto } from '../dtos/update-invoice.dto';
import { ApiMainInvoiceService } from '../services/invoice.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('invoices')
export class ApiMainInvoiceController {
  constructor(private readonly invoiceService: ApiMainInvoiceService) {}

  @CheckPolicies(new ReadGeneralInvoicePolicyHandler())
  @Get()
  async readAll(@Query() queryInvoiceDto: QueryInvoiceDto): Promise<Invoice[]> {
    return await this.invoiceService.findAll(queryInvoiceDto);
  }

  @CheckPolicies(new ReadGeneralInvoicePolicyHandler())
  @Get(':id')
  async readOneById(@Param('id') id: string): Promise<Invoice> {
    const invoice = await this.invoiceService.findOneById(id);
    if (!invoice)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return invoice;
  }

  @CheckPolicies(new CreateGeneralInvoicePolicyHandler())
  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoice = await this.invoiceService.create(createInvoiceDto);
    if (!invoice) throw new BadRequestException(`Resource could not created`);
    return invoice;
  }

  @CheckPolicies(new UpdateGeneralInvoicePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto
  ): Promise<Invoice> {
    const invoice = await this.invoiceService.update(id, updateInvoiceDto);
    if (!invoice)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return invoice;
  }

  @CheckPolicies(new DeleteGeneralInvoicePolicyHandler())
  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Invoice> {
    const invoice = await this.invoiceService.remove(id);
    if (!invoice)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return invoice;
  }
}
