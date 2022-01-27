import { AdBase, IPolicyHandler } from '../../..';
import { Action } from '../../../casl/action.enum';
import { AppAbility } from '../../../casl/casl-ability.factory';

export class CreateMembershipAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AdBase);
  }
}

export class ReadMembershipAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AdBase);
  }
}

export class UpdateMembershipAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AdBase);
  }
}

export class DeleteMembershipAdBasePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AdBase);
  }
}
