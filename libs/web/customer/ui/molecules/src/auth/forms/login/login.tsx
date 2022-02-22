import { InputField } from '@hepsikredili/web/customer/ui/atoms';
import { Button } from '@hepsikredili/web/shared/ui';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import './login.module.css';

/* eslint-disable-next-line */
export interface AuthFormLoginProps {}

type IFormValues = {
  email: string;
  password: string;
};

export const AuthFormLogin: FC<AuthFormLoginProps> = () => {
  const { register, handleSubmit } = useForm<IFormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <InputField
        {...register('email')}
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
        autoComplete="current-password"
      />
      <div className="flex mt-4 lg:justify-end">
        <div className="w-full lg:w-auto">
          <Button variant="contained" fullWidth title="Giriş Yap" />
        </div>
      </div>
    </form>
  );
};

export default AuthFormLogin;
