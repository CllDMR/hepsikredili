import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipAdsSatilikResidenceProps {}

export const MembershipAdsSatilikResidence: NextPage<
  PageMembershipAdsSatilikResidenceProps
> = () => (
  <>
    <Head>
      <title>Satılık Residence - İlanlar - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-ads-satilik-residence">
        <h1>MembershipAdsSatilikResidence</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipAdsSatilikResidence;
