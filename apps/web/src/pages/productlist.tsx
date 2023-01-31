import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import ProductList from '../components/ProductList/ProductList';
import Head from 'next/head';

const ProductListPage = () => {
  return (
    <div>
      <Head>
        <title>Product List Page</title>
      </Head>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default ProductListPage;
