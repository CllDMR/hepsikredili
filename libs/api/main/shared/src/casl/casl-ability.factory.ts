import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import {
  AccountBase,
  AccountCorporate,
  AccountIndividual,
  AdBase,
  AdDetailBase,
  AdDetailSatilikDaire,
  AdSatilikDaire,
  Image,
  Invoice,
  Payment,
  Plan,
  Profile,
  User,
} from '..';
import { MyRequest } from '../typings/typings';
import { Action } from './action.enum';

type Subjects =
  | InferSubjects<
      | typeof AccountBase
      | typeof AccountCorporate
      | typeof AccountIndividual
      | typeof AdBase
      | typeof AdSatilikDaire
      | typeof AdDetailBase
      | typeof AdDetailSatilikDaire
      | typeof Image
      | typeof Invoice
      | typeof Payment
      | typeof Plan
      | typeof Profile
      | typeof User
    >
  | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

type MetaData = {
  accountId: string;
  userId: string;
};

@Injectable()
export class CaslAbilityFactory {
  createForUser(
    user: Partial<MyRequest['user']>,
    jwtPayload: Partial<MyRequest['jwtPayload']>,
    metaData: MetaData
  ) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    can(Action.Manage, 'all'); // read-only access to everything

    // JWT payload account and url param account is matching

    if (
      metaData.accountId &&
      user.account_ids &&
      !(user.account_ids as string[]).includes(metaData.accountId)
    ) {
      cannot(Action.Manage, 'all');
    }

    // JWT payload user and url param user is matching

    if (metaData.userId)
      if (!user.user_id || user.user_id.toHexString() !== metaData.userId) {
        cannot(Action.Manage, 'all');
      }

    // Role Base Authorization Example

    // if (user.role === Role.INDIVIDUAL) {
    //   cannot(Action.Read, [
    //     AdBase,
    //     AdDetailBase,
    //     AdSatilikDaire,
    //     AdDetailSatilikDaire,
    //   ]);
    // }

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as unknown as ExtractSubjectType<Subjects>,
    });
  }
}
