import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
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
      <Section id="auth-register">
        <h1>AuthRegister</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default AuthRegister;
