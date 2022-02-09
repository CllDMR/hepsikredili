import { Invoice, IPolicyHandler } from '..';
import { Action } from '../casl/action.enum';
import { AppAbility } from '../casl/casl-ability.factory';

export class CreateInvoicePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Create, Invoice);
  }
}

export class ReadInvoicePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Read, Invoice);
  }
}

export class UpdateInvoicePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Update, Invoice);
  }
}

export class DeleteInvoicePolicyHandler implements IPolicyHandler {
  handle(ability: AppAbility) {
    return ability.can(Action.Delete, Invoice);
  }
}
