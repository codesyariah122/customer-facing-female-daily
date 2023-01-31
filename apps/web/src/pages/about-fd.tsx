import { Footer } from '@components/app/commons';
import Head from 'next/head';
import HeaderStatic from '../components/Header/HeaderStatic';
import Banners from '../components/GeneralPages/Banners';
import AboutFd from '../components/GeneralPages/StaticPages/AboutFd';
import BannerBottom from '../components/GeneralPages/BannerBottom';

const AboutFemaleDaily = () => {
  return (
    <>
      <Head>
        <title>About FD</title>
      </Head>
      <HeaderStatic />
      <Banners />
      <AboutFd />
      <BannerBottom />
      <Footer />
    </>
  );
};

export default AboutFemaleDaily;
