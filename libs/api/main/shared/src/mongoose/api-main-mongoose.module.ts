import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoosePaginateV2 from 'mongoose-paginate-v2';
import {
  AccountBase,
  AccountSchema,
} from './schemas/account/account-base.schema';
import {
  AccountCorporate,
  AccountCorporateSchema,
} from './schemas/account/account-corporate.schema';
import {
  AccountIndividual,
  AccountIndividualSchema,
} from './schemas/account/account-individual.schema';
import { AdDetail, AdDetailSchema } from './schemas/ad-detail/ad-detail.schema';
import { Ad, AdSchema } from './schemas/ad/ad.schema';
import { Image, ImageSchema } from './schemas/image.schema';
import { Invoice, InvoiceSchema } from './schemas/invoice.schema';
import { Payment, PaymentSchema } from './schemas/payment.schema';
import { Plan, PlanSchema } from './schemas/plan.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';
import { UserBase, UserBaseSchema } from './schemas/user/user-base.schema';
import {
  UserCorporate,
  UserCorporateSchema,
} from './schemas/user/user-corporate.schema';
import {
  UserIndividual,
  UserIndividualSchema,
} from './schemas/user/user-individual.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AccountBase.name,
        schema: AccountSchema,
        discriminators: [
          { name: AccountIndividual.name, schema: AccountIndividualSchema },
          { name: AccountCorporate.name, schema: AccountCorporateSchema },
        ],
      },
    ]),
    MongooseModule.forFeature([
      {
        name: UserBase.name,
        schema: UserBaseSchema,
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
