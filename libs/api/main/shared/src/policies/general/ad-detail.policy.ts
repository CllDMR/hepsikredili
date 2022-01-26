import { IPolicyHandler, AdDetail } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateGeneralAdDetailPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdDetail);
  }
}

export class ReadGeneralAdDetailPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdDetail);
  }
}

export class UpdateGeneralAdDetailPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdDetail);
  }
}

export class DeleteGeneralAdDetailPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdDetail);
  }
}
