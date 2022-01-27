import { AdDetailSatilikDaire, IPolicyHandler } from '../../..';
import { Action } from '../../../casl/action.enum';
import { AppAbility } from '../../../casl/casl-ability.factory';

export class CreateMembershipAdDetailSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdDetailSatilikDaire);
  }
}

export class ReadMembershipAdDetailSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdDetailSatilikDaire);
  }
}

export class UpdateMembershipAdDetailSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdDetailSatilikDaire);
  }
}

export class DeleteMembershipAdDetailSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdDetailSatilikDaire);
  }
}
