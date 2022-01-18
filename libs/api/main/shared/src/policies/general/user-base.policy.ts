import { IPolicyHandler, UserBase } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateGeneralUserBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, UserBase);
  }
}

export class ReadGeneralUserBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, UserBase);
  }
}

export class UpdateGeneralUserBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, UserBase);
  }
}

export class DeleteGeneralUserBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, UserBase);
  }
}
