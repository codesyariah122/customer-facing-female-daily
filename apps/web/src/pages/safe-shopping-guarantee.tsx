import { Footer } from '@components/app/commons';
import Head from 'next/head';
import HeaderStatic from '../components/Header/HeaderStatic';
import Banners from '../components/GeneralPages/Banners';
import SafeShopping from '../components/GeneralPages/StaticPages/SafeShopping';

const SafeShoppingGuarantee = () => {
  return (
    <div>
      <Head>
        <title>Safe Shopping Guarantee</title>
      </Head>
      <HeaderStatic />
      <Banners />
      <SafeShopping />
      <Footer />
    </div>
  );
};

export default SafeShoppingGuarantee;
