import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import HeaderStatic from '../components/Header/HeaderStatic';
import Banners from '../components/GeneralPages/Banners';
import BannerBottom from '../components/GeneralPages/BannerBottom';
import DeliveryInfo from '../components/GeneralPages/StaticPages/Delivery';

const DeliveryInformation = () => {
  return (
    <div>
      <Head>
        <title>General Pages</title>
      </Head>
      <HeaderStatic />
      <Banners />
      <DeliveryInfo />
      <Footer />
    </div>
  );
};

export default DeliveryInformation;
