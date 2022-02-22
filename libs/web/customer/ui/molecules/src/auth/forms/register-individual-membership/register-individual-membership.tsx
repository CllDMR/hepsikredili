import { InputField } from '@hepsikredili/web/customer/ui/atoms';
import { Button } from '@hepsikredili/web/shared/ui';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import './register-individual-membership.module.css';

/* eslint-disable-next-line */
export interface AuthFormRegisterIndividualMembershipProps {}

type IFormValues = {
  email: string;
  firstname: string;
  lastname: string;
  password: string;
};

export const AuthFormRegisterIndividualMembership: FC<
  AuthFormRegisterIndividualMembershipProps
> = () => {
  const { register, handleSubmit, formState } = useForm<IFormValues>({
    defaultValues: {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = handleSubmit((data) => console.log(data));

  const { isDirty, isValid } = formState;

  return (
    <form onSubmit={onSubmit}>
      <InputField
        {...register('firstname')}
        label="İsim"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('lastname')}
        label="Soy İsim"
        placeholder=""
        type="text"
      />
      <InputField
        className="mt-3"
        {...register('email')}
        label="E-Posta"
        placeholder=""
        type="email"
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
          <Button
            variant="contained"
            disabled={!isDirty || !isValid}
            fullWidth
            title="Tamamla"
          />
        </div>
      </div>
    </form>
  );
};

export default AuthFormRegisterIndividualMembership;
