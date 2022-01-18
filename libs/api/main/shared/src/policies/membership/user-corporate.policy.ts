import { IPolicyHandler, UserCorporate } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateMembershipUserCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, UserCorporate);
  }
}

export class ReadMembershipUserCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Read, UserCorporate);
  }
}

export class UpdateMembershipUserCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, UserCorporate);
  }
}

export class DeleteMembershipUserCorporatePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, UserCorporate);
  }
}
