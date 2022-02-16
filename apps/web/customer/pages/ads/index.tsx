import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageAdsProps {}

export const Ads: NextPage<PageAdsProps> = () => (
  <>
    <Head>
      <title>İlanlar</title>
    </Head>

    <Header />

    <Main>
      <Section id="auth-login">
        <h1>Ads</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default Ads;
