import { AdSatilikDaire, IPolicyHandler } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateAdSatilikDairePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdSatilikDaire);
  }
}

export class ReadAdSatilikDairePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdSatilikDaire);
  }
}

export class UpdateAdSatilikDairePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdSatilikDaire);
  }
}

export class DeleteAdSatilikDairePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdSatilikDaire);
  }
}
