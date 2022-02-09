import { Payment, PaymentDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreatePaymentDto } from '../dtos/create-payment.dto';
import { QueryPaymentDto } from '../dtos/query-payment.dto';
import { UpdatePaymentDto } from '../dtos/update-payment.dto';

@Injectable()
export class ApiMainPaymentService {
  constructor(
    @InjectModel(Payment.name)
    private readonly paymentModel: Model<PaymentDocument>
  ) {}

  async findAll(_queryPaymentDto: QueryPaymentDto): Promise<Payment[]> {
    const filter: FilterQuery<PaymentDocument> = {};
    return await this.paymentModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<Payment | null> {
    return await this.paymentModel.findById(id).exec();
  }

  async create(createPaymentDto: CreatePaymentDto): Promise<Payment> {
    const payment = new this.paymentModel(createPaymentDto);
    return await payment.save();
  }

  async update(id: string, updatePaymentDto: UpdatePaymentDto) {
    const instructions = $.flatten(updatePaymentDto);

    return await this.paymentModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.paymentModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
