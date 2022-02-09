import { AdDetailBase, IPolicyHandler } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateAdDetailBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdDetailBase);
  }
}

export class ReadAdDetailBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdDetailBase);
  }
}

export class UpdateAdDetailBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdDetailBase);
  }
}

export class DeleteAdDetailBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdDetailBase);
  }
}
