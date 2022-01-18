import { IPolicyHandler, UserCorporate } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateGeneralUserCorporatePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, UserCorporate);
  }
}

export class ReadGeneralUserCorporatePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, UserCorporate);
  }
}

export class UpdateGeneralUserCorporatePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, UserCorporate);
  }
}

export class DeleteGeneralUserCorporatePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, UserCorporate);
  }
}
