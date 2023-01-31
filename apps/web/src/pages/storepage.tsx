import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Head from 'next/head';
import StorePage from '../components/StorePage/Storepage';

const SearchPage = () => {
  return (
    <div>
      <Head>
        <title>Store Page</title>
      </Head>
      <Header />
      <StorePage />
      <Footer />
    </div>
  );
};

export default SearchPage;
