import { Section } from '@hepsikredili/web/customer/ui/atoms';
import { Footer, Header, Main } from '@hepsikredili/web/customer/ui/organisms';
import { NextPage } from 'next';
import Head from 'next/head';

/* eslint-disable-next-line */
export interface PageMembershipAccountInvoicesProps {}

export const MembershipAccountInvoices: NextPage<
  PageMembershipAccountInvoicesProps
> = () => (
  <>
    <Head>
      <title>Faturalar - Hesap - Üyelik - HepsiKredili</title>
    </Head>

    <Header />

    <Main>
      <Section id="membership-account-invoices">
        <h1>MembershipAccountInvoices</h1>
      </Section>
    </Main>

    <Footer />
  </>
);

export default MembershipAccountInvoices;
