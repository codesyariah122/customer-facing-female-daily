import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import HeaderStatic from '../components/Header/HeaderStatic';
import Banners from '../components/GeneralPages/Banners';
import BannerBottom from '../components/GeneralPages/BannerBottom';
import HowtoPay from '../components/GeneralPages/StaticPages/HowtoPay';

const HowtoPayPages = () => {
  return (
    <div>
      <Head>
        <title>General Pages</title>
      </Head>
      <HeaderStatic />
      <Banners />
      <HowtoPay />
      <Footer />
    </div>
  );
};

export default HowtoPayPages;
