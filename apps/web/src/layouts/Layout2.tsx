import Head from 'next/head';
import FooterEmpty from '../components/FooterEmpty/FooterEmpty';
import HeaderEmpty from '../components/HeaderEmpty/HeaderEmpty';

type LayoutType = {
  title?: string;
  children?: React.ReactNode;
};

const Layout2 = ({ children }: LayoutType) => {
  return (
    <div>
      <Head>
        <title>FemaleDaily Studio</title>
      </Head>
      <HeaderEmpty />
      {children}
      <FooterEmpty />
    </div>
  );
};

export default Layout2;
