import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import mongoosePaginateV2 from 'mongoose-paginate-v2';
import { AccountBase, AccountSchema } from './schemas/account/base.schema';
import {
  AccountCorporate,
  AccountCorporateSchema,
} from './schemas/account/corporate.schema';
import {
  AccountIndividual,
  AccountIndividualSchema,
} from './schemas/account/individual.schema';
import {
  AdDetailBase,
  AdDetailBaseSchema,
} from './schemas/ad-detail/base.schema';
import {
  AdDetailSatilikDaire,
  AdDetailSatilikDaireSchema,
} from './schemas/ad-detail/satilik-daire.schema';
import { AdBase, AdBaseSchema } from './schemas/ad/base.schema';
import {
  AdSatilikDaire,
  AdSatilikDaireSchema,
} from './schemas/ad/satilik-daire.schema';
import { Image, ImageSchema } from './schemas/image.schema';
import { Invoice, InvoiceSchema } from './schemas/invoice.schema';
import { Payment, PaymentSchema } from './schemas/payment.schema';
import { Plan, PlanSchema } from './schemas/plan.schema';
import { Profile, ProfileSchema } from './schemas/profile.schema';
import { User, UserSchema } from './schemas/user.schema';

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
        name: User.name,
        schema: UserSchema,
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
        name: AdBase.name,
        discriminators: [
          { name: AdSatilikDaire.name, schema: AdSatilikDaireSchema },
        ],
        useFactory: () => {
          const schema = AdBaseSchema;
          schema.plugin(mongoosePaginateV2);
          return schema;
        },
      },
    ]),
    MongooseModule.forFeatureAsync([
      {
        name: AdDetailBase.name,
        discriminators: [
          {
            name: AdDetailSatilikDaire.name,
            schema: AdDetailSatilikDaireSchema,
          },
        ],
        useFactory: () => {
          const schema = AdDetailBaseSchema;
          schema.plugin(mongoosePaginateV2);
          return schema;
        },
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
