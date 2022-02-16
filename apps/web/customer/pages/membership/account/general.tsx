import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipAccountGeneralProps {}

export const MembershipAccountGeneral: NextPage<
  PageMembershipAccountGeneralProps
> = () => (
  <>
    <Head>
      <title>Genel - Hesap - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-account-general">
        <h1>MembershipAccountGeneral</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipAccountGeneral;
