import { Image, IPolicyHandler } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateMembershipAccountImagePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, Image);
  }
}

export class ReadMembershipAccountImagePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, Image);
  }
}

export class UpdateMembershipAccountImagePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, Image);
  }
}

export class DeleteMembershipAccountImagePolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, Image);
  }
}
