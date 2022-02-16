import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipUserPersonalInfoProps {}

export const MembershipUserPersonalInfo: NextPage<
  PageMembershipUserPersonalInfoProps
> = () => (
  <>
    <Head>
      <title>Kişisel Bilgiler - Kullanıcı - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-user-personal-info">
        <h1>MembershipUserPersonalInfo</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipUserPersonalInfo;
