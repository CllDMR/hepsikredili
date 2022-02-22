import { NextLink } from '@hepsikredili/web/customer/ui/atoms';
import { Button } from '@hepsikredili/web/shared/ui';
import { FC } from 'react';
import './login.module.css';

/* eslint-disable-next-line */
export interface RedirectLoginProps {}

export const RedirectLogin: FC<RedirectLoginProps> = () => (
  <div className="flex flex-col lg:flex-row lg:justify-end lg:items-center">
    <div className="mb-3 lg:mr-3 lg:mb-0">
      <span className="text-sm text-gray-500">
        Halihazırda üyeliğiniz var mı ? Ayrıcalığınıza erişmek için giriş yapın.
      </span>
    </div>
    <div className="w-full lg:w-auto">
      <NextLink href="/auth/login" passHref>
        <Button variant="outlined" fullWidth title="Giriş Yap" />
      </NextLink>
    </div>
  </div>
);

export default RedirectLogin;
