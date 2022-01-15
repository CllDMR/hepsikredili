/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  ArgumentMetadata,
  Inject,
  Injectable,
  ValidationPipe,
} from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';

@Injectable()
export class MyValidationPipe extends ValidationPipe {
  constructor(@Inject(REQUEST) private readonly request: Request) {
    super({
      whitelist: true,
      forbidNonWhitelisted: true,
      forbidUnknownValues: true,
    });
  }

  async transform(value: any, metadata: ArgumentMetadata) {
    // const groups: string[] = [];
    // const adCategoryParam = this.request?.params[AdCategoryParamKey];
    // const accountTypeParam = this.request?.params[AccountTypeParamKey] as any;
    // const userTypeParam = this.request?.params[UserTypeParamKey] as any;
    // const registerTypeParam = this.request?.params[RegisterTypeParamKey] as any;

    // if (AdCategories.includes(adCategoryParam)) groups.push(adCategoryParam);
    // if (AccountTypes.includes(accountTypeParam)) groups.push(accountTypeParam);
    // if (UserTypes.includes(userTypeParam)) groups.push(userTypeParam);
    // if (RegisterTypes.includes(registerTypeParam))
    //   groups.push(registerTypeParam);

    // const originalOptions = Object.assign({}, this.validatorOptions);
    // this.validatorOptions = Object.assign({}, this.validatorOptions, {
    //   groups,
    // });

    const result = super.transform(value, metadata);
    // this.validatorOptions = Object.assign({}, originalOptions);
    return result;
  }
}
