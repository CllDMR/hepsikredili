import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface PageAdsCategoriesProps {}

export const AdsCategories: NextPage<PageAdsCategoriesProps> = () => {
  const router = useRouter();
  const categories = String(router.query.categories);

  return (
    <>
      <Head>
        <title>AdsCategories</title>
      </Head>

      <Header />

      <Main>
        <Section id="ads-categories">
          <h1>AdsCategories</h1>
          <h1>{categories}</h1>
        </Section>
      </Main>

      <Footer />
    </>
  );
};

export default AdsCategories;
