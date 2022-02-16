import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipAdsProps {}

export const MembershipAds: NextPage<PageMembershipAdsProps> = () => (
  <>
    <Head>
      <title>İlanlar - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-ads">
        <h1>MembershipAds</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipAds;
