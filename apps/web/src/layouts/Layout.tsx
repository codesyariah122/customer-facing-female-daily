import Head from 'next/head';
import { Footer, Header } from '@components/app/commons';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const Layout = ({ children }: LayoutType) => {
  return (
    <>
      <Head>
        <title>FemaleDaily Studio</title>
      </Head>
      <Header isLoaded={true} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
