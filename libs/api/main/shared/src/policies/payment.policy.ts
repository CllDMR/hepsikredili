import { IPolicyHandler, Payment } from '..';
import { Action } from '../casl/action.enum';
import { AppAbility } from '../casl/casl-ability.factory';

export class CreatePaymentPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, Payment);
  }
}

export class ReadPaymentPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, Payment);
  }
}

export class UpdatePaymentPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, Payment);
  }
}

export class DeletePaymentPolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, Payment);
  }
}
