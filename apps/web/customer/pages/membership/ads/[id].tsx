import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

/* eslint-disable-next-line */
export interface PageMembershipAdProps {}

export const MembershipAd: NextPage<PageMembershipAdProps> = () => {
  const router = useRouter();
  const id = String(router.query.id);

  return (
    <>
      <Head>
        <title>{id} - İlan - Üyelik - HepsiKredili</title>
      </Head>

      <Header />

      <Main>
        <Section id="membership-ad">
          <h1>MembershipAd - {id}</h1>
        </Section>
      </Main>

      <Footer />
    </>
  );
};

export default MembershipAd;
