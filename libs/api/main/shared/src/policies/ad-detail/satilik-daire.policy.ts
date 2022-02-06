import { AdDetailSatilikDaire, IPolicyHandler } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateGeneralAdDetailSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdDetailSatilikDaire);
  }
}

export class ReadGeneralAdDetailSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdDetailSatilikDaire);
  }
}

export class UpdateGeneralAdDetailSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdDetailSatilikDaire);
  }
}

export class DeleteGeneralAdDetailSatilikDairePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdDetailSatilikDaire);
  }
}
