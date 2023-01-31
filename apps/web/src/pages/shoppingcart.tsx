import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Head from 'next/head';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart';

const ShoppingCartPage = () => {
  return (
    <div>
      <Head>
        <title>ShoppingCart Page</title>
      </Head>
      <Header />
      <ShoppingCart />
      <Footer />
    </div>
  );
};

export default ShoppingCartPage;
