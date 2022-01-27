import {
  CheckPolicies,
  CreateGeneralPaymentPolicyHandler,
  DeleteGeneralPaymentPolicyHandler,
  JwtAuthGuard,
  Payment,
  PoliciesGeneralGuard,
  ReadGeneralPaymentPolicyHandler,
  UpdateGeneralPaymentPolicyHandler,
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
import { CreatePaymentDto } from '../dtos/create-payment.dto';
import { QueryPaymentDto } from '../dtos/query-payment.dto';
import { UpdatePaymentDto } from '../dtos/update-payment.dto';
import { ApiMainPaymentService } from '../services/payment.service';

@UseGuards(ThrottlerGuard, JwtAuthGuard, PoliciesGeneralGuard)
@Controller('payments')
export class ApiMainPaymentController {
  constructor(private readonly paymentService: ApiMainPaymentService) {}

  @CheckPolicies(new ReadGeneralPaymentPolicyHandler())
  @Get()
  async readAll(@Query() queryPaymentDto: QueryPaymentDto): Promise<Payment[]> {
    return await this.paymentService.findAll(queryPaymentDto);
  }

  @CheckPolicies(new ReadGeneralPaymentPolicyHandler())
  @Get(':id')
  async readOneById(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<Payment> {
    const payment = await this.paymentService.findOneById(id);
    if (!payment)
      throw new BadRequestException(`Resource not found with id: ${id}`);
    return payment;
  }

  @CheckPolicies(new CreateGeneralPaymentPolicyHandler())
  @Post()
  async create(@Body() createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const payment = await this.paymentService.create(createPaymentDto);
    if (!payment) throw new BadRequestException(`Resource could not created`);
    return payment;
  }

  @CheckPolicies(new UpdateGeneralPaymentPolicyHandler())
  @Patch(':id')
  async update(
    @Param('id', ValidateMongooseObjectIdPipe) id: string,
    @Body() updatePaymentDto: UpdatePaymentDto
  ): Promise<Payment> {
    const payment = await this.paymentService.update(id, updatePaymentDto);
    if (!payment)
      throw new BadRequestException(
        `Resource could not updated with id: ${id}`
      );
    return payment;
  }

  @CheckPolicies(new DeleteGeneralPaymentPolicyHandler())
  @Delete(':id')
  async delete(
    @Param('id', ValidateMongooseObjectIdPipe) id: string
  ): Promise<Payment> {
    const payment = await this.paymentService.remove(id);
    if (!payment)
      throw new BadRequestException(
        `Resource could not deleted with id: ${id}`
      );
    return payment;
  }
}
