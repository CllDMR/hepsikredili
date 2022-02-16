import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipAdsSatilikDaireProps {}

export const MembershipAdsSatilikDaire: NextPage<
  PageMembershipAdsSatilikDaireProps
> = () => (
  <>
    <Head>
      <title>Satılık Daire - İlanlar - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-ads-satilik-daire">
        <h1>MembershipAdsSatilikDaire</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipAdsSatilikDaire;
