import { useStoreSwitches } from '@hepsikredili/web/customer/state/zustand';
import { Section, Switch } from '@hepsikredili/web/customer/ui/atoms';
import {
  AuthFormLogin,
  RedirectRegister,
} from '@hepsikredili/web/customer/ui/molecules';
import { FC } from 'react';
import './login.module.css';

/* eslint-disable-next-line */
export interface SectionAuthLoginProps {}

export const SectionAuthLogin: FC<SectionAuthLoginProps> = () => {
  const switchLogin = useStoreSwitches((state) => state.login);
  const setLoginSwitch = useStoreSwitches((state) => state.setLoginSwitch);

  return (
    <Section id="section-auth-login">
      <div className="flex items-center justify-center w-full">
        <div className="max-w-xl ">
          <div className="p-4 rounded shadow bg-indigo-50">
            <div className="">
              <Switch
                leftLabel="Bireysel"
                rightLabel="Kurumsal"
                onSelectLeft={() => setLoginSwitch('left')}
                onSelectRight={() => setLoginSwitch('right')}
                side={switchLogin}
              />
            </div>
            <div className="mt-5">
              <AuthFormLogin />
            </div>
          </div>
          <div className="p-4 mt-5 rounded shadow bg-indigo-50">
            <RedirectRegister />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionAuthLogin;
