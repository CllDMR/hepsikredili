import { AccountIndividual, IPolicyHandler } from '..';
import { Action } from '../casl/action.enum';
import { AppAbility } from '../casl/casl-ability.factory';

export class CreateGeneralAccountIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, AccountIndividual);
  }
}

export class ReadGeneralAccountIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Read, AccountIndividual);
  }
}

export class UpdateGeneralAccountIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, AccountIndividual);
  }
}

export class DeleteGeneralAccountIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, AccountIndividual);
  }
}
