import { Image, IPolicyHandler } from '..';
import { Action } from '../casl/action.enum';
import { AppAbility } from '../casl/casl-ability.factory';

export class CreateAccountImagePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, Image);
  }
}

export class ReadAccountImagePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, Image);
  }
}

export class UpdateAccountImagePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, Image);
  }
}

export class DeleteAccountImagePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, Image);
  }
}
