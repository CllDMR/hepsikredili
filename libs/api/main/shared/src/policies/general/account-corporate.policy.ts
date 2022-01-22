import { AccountCorporate, IPolicyHandler } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateGeneralAccountCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AccountCorporate);
  }
}

export class ReadGeneralAccountCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AccountCorporate);
  }
}

export class UpdateGeneralAccountCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AccountCorporate);
  }
}

export class DeleteGeneralAccountCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AccountCorporate);
  }
}
