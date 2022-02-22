import {
  Footer,
  Header,
  Main,
  SectionMainHero,
  SectionMainHowItWorks,
  SectionMainServices,
} from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';
import heroImage from '../public/bg-desktop.png';

/* eslint-disable-next-line */
export interface PageIndexProps {}

export const Index: NextPage<PageIndexProps> = () => (
  <>
    <Head>
      <title>Hepsikredili</title>
    </Head>

    <Header />

    <Main>
      <SectionMainHero bgImg={heroImage} />
      <SectionMainServices />
      <SectionMainHowItWorks />
    </Main>

    <Footer />
  </>
);

export default Index;
