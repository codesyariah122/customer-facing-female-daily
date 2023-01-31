import { Footer } from '@components/app/commons';
import Head from 'next/head';
import HeaderStatic from '../components/Header/HeaderStatic';
import Banners from '../components/GeneralPages/Banners';
import ReturnRefund from '../components/GeneralPages/StaticPages/ReturnRefund';

const ReturnandRefund = () => {
  return (
    <div>
      <Head>
        <title>General Pages</title>
      </Head>
      <HeaderStatic />
      <Banners />
      <ReturnRefund />
      <Footer />
    </div>
  );
};

export default ReturnandRefund;
