import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import HeaderStatic from '../components/Header/HeaderStatic';
import Banners from '../components/GeneralPages/Banners';
import BannerBottom from '../components/GeneralPages/BannerBottom';
import AboutCT from '../components/GeneralPages/StaticPages/AboutCT';

const AboutCtCorp = () => {
  return (
    <div>
      <Head>
        <title>General Pages</title>
      </Head>
      <HeaderStatic />
      <Banners />
      <AboutCT />
      <BannerBottom />
      <Footer />
    </div>
  );
};

export default AboutCtCorp;
