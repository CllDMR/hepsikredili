import { AdBase, IPolicyHandler } from '../../..';
import { Action } from '../../../casl/action.enum';
import { AppAbility } from '../../../casl/casl-ability.factory';

export class CreateGeneralAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdBase);
  }
}

export class ReadGeneralAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdBase);
  }
}

export class UpdateGeneralAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdBase);
  }
}

export class DeleteGeneralAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdBase);
  }
}
