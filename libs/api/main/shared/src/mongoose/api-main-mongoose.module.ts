import {
  Account,
  AccountCorporate,
  AccountCorporateSchema,
  AccountIndividual,
  AccountIndividualSchema,
  AccountSchema,
} from '@hepsikredili/api/main/account';
import { Ad, AdSchema } from '@hepsikredili/api/main/ad';
import { AdDetail, AdDetailSchema } from '@hepsikredili/api/main/ad-detail';
import { Image, ImageSchema } from '@hepsikredili/api/main/image';
import { Invoice, InvoiceSchema } from '@hepsikredili/api/main/invoice';
import { Payment, PaymentSchema } from '@hepsikredili/api/main/payment';
import { Plan, PlanSchema } from '@hepsikredili/api/main/plan';
import {
  Profile,
  ProfileSchema,
  User,
  UserCorporate,
  UserCorporateSchema,
  UserIndividual,
  UserIndividualSchema,
  UserSchema,
} from '@hepsikredili/api/main/user';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoosePaginateV2 from 'mongoose-paginate-v2';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Account.name,
        schema: AccountSchema,
        discriminators: [
          { name: AccountIndividual.name, schema: AccountIndividualSchema },
          { name: AccountCorporate.name, schema: AccountCorporateSchema },
        ],
      },
    ]),
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
        discriminators: [
          { name: UserIndividual.name, schema: UserIndividualSchema },
          { name: UserCorporate.name, schema: UserCorporateSchema },
        ],
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Profile.name,
        schema: ProfileSchema,
      },
    ]),
    MongooseModule.forFeatureAsync([
      {
        name: Ad.name,
        useFactory: () => {
          const schema = AdSchema;
          schema.plugin(mongoosePaginateV2);
          return schema;
        },
      },
    ]),
    MongooseModule.forFeature([
      {
        name: AdDetail.name,
        schema: AdDetailSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Image.name,
        schema: ImageSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Invoice.name,
        schema: InvoiceSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Payment.name,
        schema: PaymentSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Plan.name,
        schema: PlanSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class ApiMainSharedMongooseModule {}
