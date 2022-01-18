import { IPolicyHandler, UserIndividual } from '../..';
import { Action } from '../../casl/action.enum';
import { AppAbility } from '../../casl/casl-ability.factory';

export class CreateGeneralUserIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Create, UserIndividual);
  }
}

export class ReadGeneralUserIndividualPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, UserIndividual);
  }
}

export class UpdateGeneralUserIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Update, UserIndividual);
  }
}

export class DeleteGeneralUserIndividualPolicyHandler
  implements IPolicyHandler
{
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, UserIndividual);
  }
}
