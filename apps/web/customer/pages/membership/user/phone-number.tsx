import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipUserPhoneNumberProps {}

export const MembershipUserPhoneNumber: NextPage<
  PageMembershipUserPhoneNumberProps
> = () => (
  <>
    <Head>
      <title>Telefon Numarası - Kullanıcı - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-user-phone-number">
        <h1>MembershipUserPhoneNumber</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipUserPhoneNumber;
