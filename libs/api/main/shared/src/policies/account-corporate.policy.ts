import { AccountCorporate, IPolicyHandler } from '..';
import { Action } from '../casl/action.enum';
import { AppAbility } from '../casl/casl-ability.factory';

export class CreateAccountCorporatePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AccountCorporate);
  }
}

export class ReadAccountCorporatePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AccountCorporate);
  }
}

export class UpdateAccountCorporatePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AccountCorporate);
  }
}

export class DeleteAccountCorporatePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AccountCorporate);
  }
}
