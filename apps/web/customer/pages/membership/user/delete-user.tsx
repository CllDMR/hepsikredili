import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipUserDeleteUserProps {}

export const MembershipUserDeleteUser: NextPage<
  PageMembershipUserDeleteUserProps
> = () => (
  <>
    <Head>
      <title>Kullanıcı Sil - Kullanıcı - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-user-delete-user">
        <h1>MembershipUserDeleteUser</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipUserDeleteUser;
