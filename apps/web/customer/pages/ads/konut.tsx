import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageAdsKonutProps {}

export const AdsKonut: NextPage<PageAdsKonutProps> = () => (
  <>
    <Head>
      <title>Konut</title>
    </Head>

    <Header />

    <Main>
      <Section id="ads-konut">
        <h1>AdsKonut</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default AdsKonut;
