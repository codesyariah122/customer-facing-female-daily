import Footer from '../components/Footer/Footer';
import Head from 'next/head';
import HeaderStatic from '../components/Header/HeaderStatic';
import Banners from '../components/GeneralPages/Banners';
import BannerBottom from '../components/GeneralPages/BannerBottom';
import ContactUs from '../components/GeneralPages/StaticPages/ContactUs';

const Contact = () => {
  return (
    <div>
      <Head>
        <title>General Pages</title>
      </Head>
      <HeaderStatic />
      <Banners />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Contact;
