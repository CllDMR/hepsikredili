import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipAccountPlanningProps {}

export const MembershipAccountPlanning: NextPage<
  PageMembershipAccountPlanningProps
> = () => (
  <>
    <Head>
      <title>Plan - Hesap - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-account-planning">
        <h1>MembershipAccountPlanning</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipAccountPlanning;
