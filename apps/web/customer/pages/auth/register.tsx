import {
  Footer,
  Header,
  Main,
  SectionAuthRegister,
} from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageAuthRegisterProps {}

export const AuthRegister: NextPage<PageAuthRegisterProps> = () => (
  <>
    <Head>
      <title>Kayıt Ol</title>
    </Head>

    <Header />

    <Main>
      <SectionAuthRegister />
    </Main>

    <Footer />
  </>
);

export default AuthRegister;
