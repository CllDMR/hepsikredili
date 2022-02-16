import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipAccountUsageProps {}

export const MembershipAccountUsage: NextPage<
  PageMembershipAccountUsageProps
> = () => (
  <>
    <Head>
      <title>Kullanım - Hesap - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-account-usage">
        <h1>MembershipAccountUsage</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipAccountUsage;
