import Footer from '../../apps/web/src/components/Footer/Footer';
import Header from '../../apps/web/src/components/Header/Header';
import ProductList from '../../apps/web/src/components/Search/ProductList';
import Head from 'next/head';

const SearchPage = () => {
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
};

export default SearchPage;
