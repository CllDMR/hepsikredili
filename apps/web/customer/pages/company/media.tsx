import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMediaProps {}

export const Media: NextPage<PageMediaProps> = () => (
  <>
    <Head>
      <title>Medya</title>
    </Head>

    <Header />

    <Main>
      <Section id="media">
        <h1>Media</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default Media;
