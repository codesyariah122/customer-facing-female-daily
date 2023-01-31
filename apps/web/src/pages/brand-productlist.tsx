import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProductList from '../components/ProductList/ProductList';
import Head from 'next/head';

const BrandProductList = () => {
  return (
    <div>
      <Head>
        <title>Brands List Page</title>
      </Head>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default BrandProductList;
