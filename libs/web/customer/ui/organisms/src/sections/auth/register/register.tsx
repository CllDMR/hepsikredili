import {
  useStoreFormRegisterCorporate,
  useStoreSwitches,
} from '@hepsikredili/web/customer/state/zustand';
import { Section, Switch } from '@hepsikredili/web/customer/ui/atoms';
import {
  AuthFormRegisterCorporateAccount,
  AuthFormRegisterCorporateUser,
  AuthFormRegisterIndividualMembership,
  RedirectLogin,
} from '@hepsikredili/web/customer/ui/molecules';
import { FC } from 'react';
import './register.module.css';

/* eslint-disable-next-line */
export interface SectionAuthRegisterProps {}

export const SectionAuthRegister: FC<SectionAuthRegisterProps> = () => {
  const stepRegisterCorporate = useStoreFormRegisterCorporate(
    (state) => state.step
  );
  const switchRegister = useStoreSwitches((state) => state.register);
  const setRegisterSwitch = useStoreSwitches(
    (state) => state.setRegisterSwitch
  );

  return (
    <Section id="section-auth-register">
      <div className="flex items-center justify-center w-full">
        <div className="max-w-xl ">
          <div className="p-4 rounded shadow bg-indigo-50">
            <div className="">
              <Switch
                leftLabel="Bireysel"
                rightLabel="Kurumsal"
                onSelectLeft={() => setRegisterSwitch('left')}
                onSelectRight={() => setRegisterSwitch('right')}
                side={switchRegister}
              />
            </div>
            <div className="">
              {switchRegister === 'right' &&
                stepRegisterCorporate === 'account' && (
                  <>
                    <div className="mt-4 mb-2">
                      <span className="text-base font-medium whitespace-nowrap">
                        Adım 1 : Hesap Oluştur
                      </span>
                    </div>
                    <AuthFormRegisterCorporateAccount key="RegisterCorporateAccountForm" />
                  </>
                )}
              {switchRegister === 'right' && stepRegisterCorporate === 'user' && (
                <>
                  <div className="mt-4 mb-2">
                    <span className="text-base font-medium whitespace-nowrap">
                      Adım 2 : Kullanıcı Oluştur
                    </span>
                  </div>
                  <AuthFormRegisterCorporateUser key="RegisterCorporateUserForm" />
                </>
              )}
              {switchRegister === 'left' && (
                <>
                  <div className="mt-4 mb-2">
                    <span className="text-base font-medium whitespace-nowrap">
                      Üyelik Oluştur
                    </span>
                  </div>
                  <AuthFormRegisterIndividualMembership key="RegisterIndividualMembershipForm" />
                </>
              )}
            </div>
          </div>
          <div className="p-4 mt-5 rounded shadow bg-indigo-50">
            <RedirectLogin />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SectionAuthRegister;
