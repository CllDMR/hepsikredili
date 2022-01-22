import { AccountCorporate, IPolicyHandler } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateMembershipAccountCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AccountCorporate);
  }
}

export class ReadMembershipAccountCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AccountCorporate);
  }
}

export class UpdateMembershipAccountCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AccountCorporate);
  }
}

export class DeleteMembershipAccountCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AccountCorporate);
  }
}
