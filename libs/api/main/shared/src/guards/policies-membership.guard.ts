import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AppAbility, CaslAbilityFactory } from '../casl/casl-ability.factory';
import { CHECK_POLICIES_KEY, PolicyHandler } from '../casl/policy-handler';
import { MyRequest } from '../typings/typings';

@Injectable()
export class PoliciesMembershipGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private caslAbilityFactory: CaslAbilityFactory
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const policyHandlers =
      this.reflector.get<PolicyHandler[]>(
        CHECK_POLICIES_KEY,
        context.getHandler()
      ) || [];

    const { params, user } = context.switchToHttp().getRequest() as MyRequest;

    const ability = this.caslAbilityFactory.createForMembership(user, {
      accountId: params.accountId,
      userId: params.userId,
    });

    return policyHandlers.every((handler) =>
      this.execPolicyHandler(handler, ability)
    );
  }

  private execPolicyHandler(handler: PolicyHandler, ability: AppAbility) {
    if (typeof handler === 'function') {
      return handler(ability);
    }
    return handler.handle(ability);
  }
}
