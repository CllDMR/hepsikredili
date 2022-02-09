import { Invoice, InvoiceDocument } from '@hepsikredili/api/main/shared';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as $ from 'mongo-dot-notation';
import { FilterQuery, Model } from 'mongoose';
import { CreateInvoiceDto } from '../dtos/create-invoice.dto';
import { QueryInvoiceDto } from '../dtos/query-invoice.dto';
import { UpdateInvoiceDto } from '../dtos/update-invoice.dto';

@Injectable()
export class ApiMainInvoiceService {
  constructor(
    @InjectModel(Invoice.name)
    private readonly invoiceModel: Model<InvoiceDocument>
  ) {}

  async findAll(_queryInvoiceDto: QueryInvoiceDto): Promise<Invoice[]> {
    const filter: FilterQuery<InvoiceDocument> = {};
    return await this.invoiceModel.find(filter).exec();
  }

  async findOneById(id: string): Promise<Invoice | null> {
    return await this.invoiceModel.findById(id).exec();
  }

  async create(createInvoiceDto: CreateInvoiceDto): Promise<Invoice> {
    const invoice = new this.invoiceModel(createInvoiceDto);
    return await invoice.save();
  }

  async update(id: string, updateInvoiceDto: UpdateInvoiceDto) {
    const instructions = $.flatten(updateInvoiceDto);

    return await this.invoiceModel
      .findByIdAndUpdate(id, instructions, { new: true })
      .exec();
  }

  async remove(id: string) {
    return await this.invoiceModel.findByIdAndRemove(id, { new: true }).exec();
  }
}
