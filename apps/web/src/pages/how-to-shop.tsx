import { Footer } from '@components/app/commons';
import Head from 'next/head';
import HeaderStatic from '../components/Header/HeaderStatic';
import Banners from '../components/GeneralPages/Banners';
import BannerBottom from '../components/GeneralPages/BannerBottom';
import HowtoShop from '../components/GeneralPages/StaticPages/HowtoShop';

const HowtoShopPages = () => {
  return (
    <div>
      <Head>
        <title>How to Shop</title>
      </Head>
      <HeaderStatic />
      <Banners />
      <HowtoShop />
      <BannerBottom />
      <Footer />
    </div>
  );
};

export default HowtoShopPages;
