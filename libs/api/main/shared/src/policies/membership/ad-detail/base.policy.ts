import { AdDetailBase, IPolicyHandler } from '../../..';
import { Action } from '../../../casl/action.enum';
import { AppAbility } from '../../../casl/casl-ability.factory';

export class CreateMembershipAdDetailBasePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdDetailBase);
  }
}

export class ReadMembershipAdDetailBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdDetailBase);
  }
}

export class UpdateMembershipAdDetailBasePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdDetailBase);
  }
}

export class DeleteMembershipAdDetailBasePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdDetailBase);
  }
}
