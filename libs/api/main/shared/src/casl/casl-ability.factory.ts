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
  Ad,
  Image,
  Invoice,
  Payment,
  Plan,
  Profile,
  User,
} from '..';
import { MyRequest } from '../typings';
import { Action } from './action.enum';

type Subjects =
  | InferSubjects<
      | typeof AccountBase
      | typeof AccountCorporate
      | typeof AccountIndividual
      | typeof Ad
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
  createForMembership(user: Partial<MyRequest['user']>, metaData: MetaData) {
    const { can, cannot, build } = new AbilityBuilder<
      Ability<[Action, Subjects]>
    >(Ability as AbilityClass<AppAbility>);

    can(Action.Manage, 'all'); // read-only access to everything

    if (
      !metaData.accountId ||
      !user.account_ids ||
      !(user.account_ids as string[]).includes(metaData.accountId)
    )
      cannot(Action.Manage, 'all');

    if (
      !metaData.userId ||
      !user.user_id ||
      user.user_id.toHexString() !== metaData.userId
    )
      cannot(Action.Manage, 'all');

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as unknown as ExtractSubjectType<Subjects>,
    });
  }

  createForGeneral(
    _jwtPayload: Partial<MyRequest['user']>,
    _metaData?: MetaData
  ) {
    const { can, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(
      Ability as AbilityClass<AppAbility>
    );

    can(Action.Manage, 'all'); // read-only access to everything

    return build({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item) =>
        item.constructor as unknown as ExtractSubjectType<Subjects>,
    });
  }
}
