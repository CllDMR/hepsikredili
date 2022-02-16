import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
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
      <Section id="auth-login">
        <h1>AuthLogin</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default AuthLogin;
