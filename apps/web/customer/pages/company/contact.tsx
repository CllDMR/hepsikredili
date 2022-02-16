import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageContactProps {}

export const Contact: NextPage<PageContactProps> = () => (
  <>
    <Head>
      <title>İletişim</title>
    </Head>

    <Header />

    <Main>
      <Section id="contact">
        <h1>Contact</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default Contact;
