import { Footer } from '@components/app/commons';
import Head from 'next/head';
import HeaderStatic from '../components/Header/HeaderStatic';
import TermConditions from '../components/GeneralPages/StaticPages/TermConditions';

const ReturnandRefund = () => {
  return (
    <div>
      <Head>
        <title>Term & Condition</title>
      </Head>
      <HeaderStatic />
      <TermConditions />
      <Footer />
    </div>
  );
};

export default ReturnandRefund;
