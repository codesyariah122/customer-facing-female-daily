import Footer from '../../apps/web/src/components/Footer/Footer';
import Header from '../../apps/web/src/components/Header/Header';
import Head from 'next/head';
import Brands from '../../apps/web/src/components/Brands/Brands';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import {
  useBrands,
  useDispatchBrands,
} from '../../apps/web/src/context/BrandsContext';
import { useEffect } from 'react';

const BrandsPage = ({ data }: { data: string }) => {
  const dispatch = useDispatchBrands();
  const letterCurrent = 'a';
  useEffect(() => {
    dispatch({
      type: 'SET',
      payload: data,
    });
    // dispatch({
    //   type: 'FILTER',
    //   payload: {
    //     data: data,
    //     letter: letterCurrent,
    //   },
    // });
  });
  const dataBrand = useBrands();
  return (
    <div>
      <Head>
        <title>Brands Page</title>
      </Head>
      <Header />
      <Brands dataBrands={dataBrand.dataFilter} />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://raw.githubusercontent.com/pbakondy/android-device-list/master/brands.json`
  );
  const dataBrands = await res.json();
  const data = dataBrands;
  return {
    props: {
      data,
    },
  };
};

export default BrandsPage;
