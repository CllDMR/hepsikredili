import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface PageAdProps {}

export const Ad: NextPage<PageAdProps> = () => {
  const router = useRouter();
  const id = String(router.query.id);

  return (
    <>
      <Head>
        <title>İlan - {id}</title>
      </Head>

      <Header />

      <Main>
        <Section id="ad">
          <h1>Ad - {id}</h1>
        </Section>
      </Main>

      <Footer />
    </>
  );
};

export default Ad;
