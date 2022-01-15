import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import {
  Account,
  AccountCorporate,
  AccountIndividual,
  Ad,
  Image,
  Invoice,
  Payment,
  Plan,
  Profile,
  User,
  UserCorporate,
  UserIndividual,
} from '..';
import { MyRequest } from '../typings';
import { Action } from './action.enum';

type Subjects =
  | InferSubjects<
      | typeof Account
      | typeof AccountCorporate
      | typeof AccountIndividual
      | typeof Ad
      | typeof Image
      | typeof Invoice
      | typeof Payment
      | typeof Plan
      | typeof Profile
      | typeof User
      | typeof UserCorporate
      | typeof UserIndividual
    >
  | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

// eslint-disable-next-line @typescript-eslint/ban-types
type MetaData = {};

@Injectable()
export class CaslAbilityFactory {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createForUser(_user: Partial<MyRequest['user']>, _metaData?: MetaData) {
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
