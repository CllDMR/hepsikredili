import {
  CheckPolicies,
  CreateMembershipInvoicePolicyHandler,
  DeleteMembershipInvoicePolicyHandler,
  Invoice,
  JwtAuthGuard,
  PoliciesMembershipGuard,
  ReadMembershipInvoicePolicyHandler,
  UpdateMembershipInvoicePolicyHandler,
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
import { CreateAccountInvoiceDto } from '../dtos/create-account-invoice.dto';
import { QueryAccountInvoiceDto } from '../dtos/query-account-invoice.dto';
import { UpdateAccountInvoiceDto } from '../dtos/update-account-invoice.dto';
import { ApiMainAccountInvoiceService } from '../services/account-invoice.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesMembershipGuard)
@Controller('accounts/:accountId/invoices')
export class ApiMainAccountInvoiceController {
  constructor(
    private readonly accountInvoiceService: ApiMainAccountInvoiceService
  ) {}

  @CheckPolicies(new ReadMembershipInvoicePolicyHandler())
  @Get()
  async readAll(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Query() queryAccountInvoiceDto: QueryAccountInvoiceDto
  ): Promise<Invoice[]> {
    return await this.accountInvoiceService.findAll(
      accountId,
      queryAccountInvoiceDto
    );
  }

  @CheckPolicies(new ReadMembershipInvoicePolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<Invoice> {
    const invoice = await this.accountInvoiceService.findOneById(accountId, id);
    if (!invoice)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return invoice;
  }

  @CheckPolicies(new CreateMembershipInvoicePolicyHandler())
  @Post()
  async create(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Body() createAccountInvoiceDto: CreateAccountInvoiceDto
  ): Promise<Invoice> {
    const invoice = await this.accountInvoiceService.create(
      accountId,
      createAccountInvoiceDto
    );
    if (!invoice) throw new BadRequestException(`Resource could not created`);
    return invoice;
  }

  @CheckPolicies(new UpdateMembershipInvoicePolicyHandler())
  @Patch(':id')
  async update(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updateAccountInvoiceDto: UpdateAccountInvoiceDto
  ): Promise<Invoice> {
    const invoice = await this.accountInvoiceService.update(
      accountId,
      id,
      updateAccountInvoiceDto
    );
    if (!invoice)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return invoice;
  }

  @CheckPolicies(new DeleteMembershipInvoicePolicyHandler())
  @Delete(':id')
  async delete(
    @Param('accountId', ValidateMongooseObjectIdPipe) accountId: string,
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<Invoice> {
    const invoice = await this.accountInvoiceService.remove(accountId, id);
    if (!invoice)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return invoice;
  }
}
