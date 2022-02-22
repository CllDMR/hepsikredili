import { NextLink } from '@hepsikredili/web/customer/ui/atoms';
import { Button } from '@hepsikredili/web/shared/ui';
import { FC } from 'react';
import './register.module.css';

/* eslint-disable-next-line */
export interface RedirectRegisterProps {}

export const RedirectRegister: FC<RedirectRegisterProps> = () => (
  <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center ">
    <div className="mb-3 lg:mr-3 lg:mb-0">
      <span className="text-sm text-gray-500">
        Üyeliğiniz yok mu ? Üyelerimize sağlanan ayrıcalıklardan yararlanmak
        için üye olun.
      </span>
    </div>
    <div className="w-full lg:w-auto">
      <NextLink href="/auth/register" passHref>
        <Button variant="outlined" fullWidth title="Üye Ol" />
      </NextLink>
    </div>
  </div>
);

export default RedirectRegister;
