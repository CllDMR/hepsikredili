import { IPolicyHandler, UserIndividual } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateMembershipUserIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, UserIndividual);
  }
}

export class ReadMembershipUserIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Read, UserIndividual);
  }
}

export class UpdateMembershipUserIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, UserIndividual);
  }
}

export class DeleteMembershipUserIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, UserIndividual);
  }
}
