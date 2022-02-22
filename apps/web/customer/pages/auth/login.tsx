import {
  Footer,
  Header,
  Main,
  SectionAuthLogin,
} from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageAuthLoginProps {}

export const AuthLogin: NextPage<PageAuthLoginProps> = () => (
  <>
    <Head>
      <title>Giriş Yap</title>
    </Head>

    <Header />

    <Main>
      <SectionAuthLogin />
    </Main>

    <Footer />
  </>
);

export default AuthLogin;
