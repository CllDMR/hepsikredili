import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipAccountUsersProps {}

export const MembershipAccountUsers: NextPage<
  PageMembershipAccountUsersProps
> = () => (
  <>
    <Head>
      <title>Kullanıcılar - Hesap - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-account-users">
        <h1>MembershipAccountUsers</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipAccountUsers;
