import { IPolicyHandler, User } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateMembershipUserPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, User);
  }
}

export class ReadMembershipUserPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, User);
  }
}

export class UpdateMembershipUserPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, User);
  }
}

export class DeleteMembershipUserPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, User);
  }
}
