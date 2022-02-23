import {
  authLogin,
  authRegisterCorporate,
  authRegisterIndividual,
} from '@hepsikredili/web/customer/api';
import { useStoreSnacks } from '@hepsikredili/web/customer/state/zustand';
import { useRouter } from 'next/dist/client/router';
import { useMutation } from 'react-query';

export const useMutationPublicAuthLogin = () => {
  const router = useRouter();
  const enqueueSnack = useStoreSnacks((store) => store.enqueueSnack);

  return useMutation(['public', 'auth', 'login'], authLogin, {
    onSuccess: () => void router.push('/membership/user/personal-info'),
    onError: () =>
      void enqueueSnack({
        message: 'Giriş yapılamadı. Email veya şifre yanlış.',
        variant: 'error',
      }),
  });
};

export const useMutationPublicAuthRegisterCorporate = () =>
  // options?: UseMutationOptions<
  //   AuthResponse,
  //   unknown,
  //   RegisterAuthCorporateDto,
  //   unknown
  // >
  {
    const router = useRouter();
    const enqueueSnack = useStoreSnacks((store) => store.enqueueSnack);

    return useMutation(
      ['public', 'auth', 'register', 'corporate'],
      authRegisterCorporate,
      {
        onSuccess: () => void router.push('/membership/ads'),
        onError: (error) => {
          console.log('error: ', error);

          return void enqueueSnack({
            message: 'Üyelik yapılamadı.',
            variant: 'error',
          });
        },
      }
    );
  };

export const useMutationPublicAuthRegisterIndividual = () => {
  const router = useRouter();
  const enqueueSnack = useStoreSnacks((store) => store.enqueueSnack);

  return useMutation(
    ['public', 'auth', 'register', 'individual'],
    authRegisterIndividual,
    {
      onSuccess: () => void router.push('/membership/ads'),
      onError: (error) => {
        console.log('error: ', error);

        return void enqueueSnack({
          message: 'Üyelik yapılamadı.',
          variant: 'error',
        });
      },
    }
  );
};
