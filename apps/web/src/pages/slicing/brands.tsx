import Footer from '@components/Footer/Footer';
import Header from '@components/Header/Header';
import Head from 'next/head';
import Brands from '@components/Brands/Brands';

const BrandsPage = () => {
  return (
    <div>
      <Head>
        <title>Brands Page</title>
      </Head>
      <Header />
      <Brands />
      <Footer />
    </div>
  );
};

export default BrandsPage;
