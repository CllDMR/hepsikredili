import {
  CallHandler,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Types } from 'mongoose';
import { Observable, tap } from 'rxjs';
import { MyRequest } from '..';

export interface Response {
  //TODO: change owner properties to account
  owner: Types.ObjectId;
}

@Injectable()
export class CheckUserAccessForbiddenToAccountInterceptor
  implements NestInterceptor<unknown, Response>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler
  ): Observable<Response> {
    const http = context.switchToHttp();
    const request = http.getRequest<MyRequest>();
    const user = request.user;
    const { accountId } = request.params;

    if (!accountId) throw new ForbiddenException();

    return next.handle().pipe(
      tap((res) => {
        if (
          accountId &&
          (!(user.account_ids as string[]).includes(accountId) ||
            res.owner.toHexString() !== accountId)
        )
          throw new ForbiddenException();
        return res;
      })
    );
  }
}
