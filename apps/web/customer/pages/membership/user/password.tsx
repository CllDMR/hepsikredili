import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipUserPasswordProps {}

export const MembershipUserPassword: NextPage<
  PageMembershipUserPasswordProps
> = () => (
  <>
    <Head>
      <title>Parola - Kullanıcı - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-user-password">
        <h1>MembershipUserPassword</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipUserPassword;
