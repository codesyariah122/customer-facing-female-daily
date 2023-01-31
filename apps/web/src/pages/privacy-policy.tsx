import Head from 'next/head';
import { Footer } from '@components/app/commons';
import HeaderStatic from '@components/Header/HeaderStatic';
import PrivacyPolicy from '@components/GeneralPages/StaticPages/PrivacyPolicy';

const PrivacyPolicyPage = () => {
  return (
    <div>
      <Head>
        <title>Term & Condition</title>
      </Head>
      <HeaderStatic />
      <PrivacyPolicy />
      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
