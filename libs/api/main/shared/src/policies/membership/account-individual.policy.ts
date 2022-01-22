import { AccountIndividual, IPolicyHandler } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateMembershipAccountIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AccountIndividual);
  }
}

export class ReadMembershipAccountIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AccountIndividual);
  }
}

export class UpdateMembershipAccountIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AccountIndividual);
  }
}

export class DeleteMembershipAccountIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AccountIndividual);
  }
}
