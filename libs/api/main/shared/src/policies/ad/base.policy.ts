import { AdBase, IPolicyHandler } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdBase);
  }
}

export class ReadAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdBase);
  }
}

export class UpdateAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdBase);
  }
}

export class DeleteAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdBase);
  }
}
