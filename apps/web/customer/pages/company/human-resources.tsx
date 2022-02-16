import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageHumanResourcesProps {}

export const HumanResources: NextPage<PageHumanResourcesProps> = () => (
  <>
    <Head>
      <title>İnsan Kaynakları</title>
    </Head>

    <Header />

    <Main>
      <Section id="human-resources">
        <h1>HumanResources</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default HumanResources;
