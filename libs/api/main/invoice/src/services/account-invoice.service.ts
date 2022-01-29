import { Invoice, InvoiceDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateInvoiceDto } from '../dtos/create-invoice.dto';
import { QueryInvoiceDto } from '../dtos/query-invoice.dto';
import { UpdateInvoiceDto } from '../dtos/update-invoice.dto';

@Injectable()
export class ApiMainAccountInvoiceService {
  constructor(
    @InjectModel(Invoice.name)
    private readonly invoiceModel: Model<InvoiceDocument>
  ) {}

  async findAll(
    accountId: string,
    _queryInvoiceDto: QueryInvoiceDto
  ): Promise<Invoice[]> {
    const filter: FilterQuery<InvoiceDocument> = { account: accountId };
    return await this.invoiceModel.find(filter).exec();
  }

  async findOneById(accountId: string, id: string): Promise<Invoice | null> {
    return await this.invoiceModel
      .findOne({ _id: id, account: accountId })
      .exec();
  }

  async create(
    accountId: string,
    createInvoiceDto: CreateInvoiceDto
  ): Promise<Invoice> {
    const invoice = new this.invoiceModel({
      ...createInvoiceDto,
      account: accountId,
    });
    return await invoice.save();
  }

  async update(
    accountId: string,
    id: string,
    updateInvoiceDto: UpdateInvoiceDto
  ) {
    const instructions = $.flatten(updateInvoiceDto);

    return await this.invoiceModel
      .findOneAndUpdate({ _id: id, account: accountId }, instructions, {
        new: true,
      })
      .exec();
  }

  async remove(accountId: string, id: string) {
    return await this.invoiceModel
      .findOneAndRemove({ _id: id, account: accountId }, { new: true })
      .exec();
  }
}
