import { InputField } from '@hepsikredili/web/customer/ui/atoms';
import { Button } from '@hepsikredili/web/shared/ui';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import './register-corporate-user.module.css';

/* eslint-disable-next-line */
export interface AuthFormRegisterCorporateUserProps {}

type IFormValues = {
  firstname: string;
  lastname: string;
  userEmail: string;
  password: string;
};

export const AuthFormRegisterCorporateUser: FC<
  AuthFormRegisterCorporateUserProps
> = () => {
  const { register, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      firstname: '',
      lastname: '',
      userEmail: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <InputField
        {...register('firstname')}
        label="İsim"
        placeholder=""
        type="text"
        autoComplete="given-name"
      />
      <InputField
        className="mt-3"
        {...register('lastname')}
        label="Soy isim"
        placeholder=""
        type="text"
        autoComplete="family-name"
      />
      <InputField
        className="mt-3"
        {...register('userEmail')}
        label="E-Posta"
        placeholder=""
        type="email"
        autoComplete="email"
      />
      <InputField
        className="mt-3"
        {...register('password')}
        label="Parola"
        placeholder=""
        type="password"
        autoComplete="new-password"
      />
      <div className="flex mt-4 lg:justify-end">
        <div className="w-full lg:w-auto">
          <Button variant="contained" fullWidth title="Giriş Yap" />
        </div>
      </div>
    </form>
  );
};

export default AuthFormRegisterCorporateUser;
