import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageSiteMapProps {}

export const SiteMap: NextPage<PageSiteMapProps> = () => (
  <>
    <Head>
      <title>Site Haritası</title>
    </Head>

    <Header />

    <Main>
      <Section id="site-map">
        <h1>SiteMap</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default SiteMap;
