import {
  accountSelector,
  useStoreFormRegisterCorporate,
} from '@hepsikredili/web/customer/state/zustand';
import { InputField } from '@hepsikredili/web/customer/ui/atoms';
import { Button } from '@hepsikredili/web/shared/ui';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import shallow from 'zustand/shallow';
import './register-corporate-account.module.css';

/* eslint-disable-next-line */
export interface AuthFormRegisterCorporateAccountProps {}

type IFormValues = {
  accountEmail: string;
  activityCategory: string;
  address: string;
  corporateType: string;
  name: string;
  taxCity: string;
  taxOffice: string;
  taxNo?: string;
  tcNo?: string;
};

export const AuthFormRegisterCorporateAccount: FC<
  AuthFormRegisterCorporateAccountProps
> = () => {
  const setStep = useStoreFormRegisterCorporate((state) => state.setStep);
  const updateAccount = useStoreFormRegisterCorporate(
    (state) => state.updateAccount
  );
  const accountState = useStoreFormRegisterCorporate(accountSelector, shallow);

  const { register, handleSubmit, formState } = useForm<IFormValues>({
    defaultValues: {
      accountEmail: '',
      activityCategory: '',
      address: '',
      corporateType: '',
      name: '',
      taxCity: '',
      taxOffice: '',
    },
  });

  const onSubmit = handleSubmit((data) => {
    setStep('user');
    updateAccount({ ...data });
  });

  const { isDirty, isValid } = formState;

  return (
    <form onSubmit={onSubmit}>
      <InputField
        {...register('accountEmail')}
        defaultValue={accountState.accountEmail}
        label="E-mail"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('activityCategory')}
        defaultValue={accountState.activityCategory}
        label="Faaliyet Alanı"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('address')}
        defaultValue={accountState.address}
        label="Adres"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('name')}
        defaultValue={accountState.name}
        label="İsim"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('corporateType')}
        defaultValue={accountState.corporateType}
        label="Şirket Türü"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('taxCity')}
        defaultValue={accountState.taxCity}
        label="Vergi Dairesinin Bağlı Olduğu Şehir"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('taxOffice')}
        defaultValue={accountState.taxOffice}
        label="Vergi Dairesi"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('tcNo')}
        defaultValue={accountState.tcNo}
        label="T.C. Kimlik Numarası"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('taxNo')}
        defaultValue={accountState.taxNo}
        label="Vergi Numarası"
        placeholder=""
        type="text"
      />
      <div className="flex mt-4 lg:justify-end">
        <div className="w-full lg:w-auto">
          <Button
            variant="contained"
            disabled={!isDirty || !isValid}
            fullWidth
            title="Giriş Yap"
          />
        </div>
      </div>
    </form>
  );
};

export default AuthFormRegisterCorporateAccount;
