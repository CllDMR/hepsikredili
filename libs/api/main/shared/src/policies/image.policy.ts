import { Image, IPolicyHandler } from '..';
import { Action } from '../casl/action.enum';
import { AppAbility } from '../casl/casl-ability.factory';

export class CreateImagePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, Image);
  }
}

export class ReadImagePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, Image);
  }
}

export class UpdateImagePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, Image);
  }
}

export class DeleteImagePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, Image);
  }
}
