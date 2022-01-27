import { AdSatilikDaire, IPolicyHandler } from '../../..';
import { Action } from '../../../casl/action.enum';
import { AppAbility } from '../../../casl/casl-ability.factory';

export class CreateGeneralAdSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdSatilikDaire);
  }
}

export class ReadGeneralAdSatilikDairePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdSatilikDaire);
  }
}

export class UpdateGeneralAdSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdSatilikDaire);
  }
}

export class DeleteGeneralAdSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdSatilikDaire);
  }
}
