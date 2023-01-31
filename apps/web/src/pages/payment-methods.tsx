import Head from 'next/head';
import { Footer } from '@components/app/commons';
import HeaderStatic from '@components/Header/HeaderStatic';

const PaymentMethodsPage = () => {
  return (
    <div>
      <Head>
        <title>Payment Methods</title>
      </Head>
      <HeaderStatic />
      <>Payment Methods...</>
      <Footer />
    </div>
  );
};

export default PaymentMethodsPage;
