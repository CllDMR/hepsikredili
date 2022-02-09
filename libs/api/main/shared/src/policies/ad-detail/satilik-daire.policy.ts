import { AdDetailSatilikDaire, IPolicyHandler } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateAdDetailSatilikDairePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdDetailSatilikDaire);
  }
}

export class ReadAdDetailSatilikDairePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdDetailSatilikDaire);
  }
}

export class UpdateAdDetailSatilikDairePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdDetailSatilikDaire);
  }
}

export class DeleteAdDetailSatilikDairePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdDetailSatilikDaire);
  }
}
