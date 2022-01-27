import { AdSatilikDaire, IPolicyHandler } from '../../..';
import { Action } from '../../../casl/action.enum';
import { AppAbility } from '../../../casl/casl-ability.factory';

export class CreateMembershipAdSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdSatilikDaire);
  }
}

export class ReadMembershipAdSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdSatilikDaire);
  }
}

export class UpdateMembershipAdSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdSatilikDaire);
  }
}

export class DeleteMembershipAdSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdSatilikDaire);
  }
}
