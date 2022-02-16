import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipUserEmailProps {}

export const MembershipUserEmail: NextPage<
  PageMembershipUserEmailProps
> = () => (
  <>
    <Head>
      <title>Email - Kullanıcı - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-user-e-mail">
        <h1>MembershipUserEmail</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipUserEmail;
