import {
  CheckPolicies,
  CreateInvoicePolicyHandler,
  DeleteInvoicePolicyHandler,
  Invoice,
  JwtAuthGuard,
  PoliciesGuard,
  ReadInvoicePolicyHandler,
  UpdateInvoicePolicyHandler,
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
import { CreateInvoiceDto } from '../dtos/create-invoice.dto';
import { QueryInvoiceDto } from '../dtos/query-invoice.dto';
import { UpdateInvoiceDto } from '../dtos/update-invoice.dto';
import { ApiMainInvoiceService } from '../services/invoice.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGuard)
@Controller('invoices')
export class ApiMainInvoiceController {
  constructor(private readonly invoiceService: ApiMainInvoiceService) {}

  @CheckPolicies(new ReadInvoicePolicyHandler())
  @Get()
  async readAll(@Query() queryInvoiceDto: QueryInvoiceDto): Promise<Invoice[]> {
    return await this.invoiceService.findAll(queryInvoiceDto);
  }

  @CheckPolicies(new ReadInvoicePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<Invoice> {
    const invoice = await this.invoiceService.findOneById(id);
    if (!invoice)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return invoice;
  }

  @CheckPolicies(new CreateInvoicePolicyHandler())
  @Post()
  async create(@Body() createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoice = await this.invoiceService.create(createInvoiceDto);
    if (!invoice) throw new BadRequestException(`Resource could not created`);
    return invoice;
  }

  @CheckPolicies(new UpdateInvoicePolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateInvoiceDto: UpdateInvoiceDto
  ): Promise<Invoice> {
    const invoice = await this.invoiceService.update(id, updateInvoiceDto);
    if (!invoice)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return invoice;
  }

  @CheckPolicies(new DeleteInvoicePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<Invoice> {
    const invoice = await this.invoiceService.remove(id);
    if (!invoice)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return invoice;
  }
}
