'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { Header, Footer } from '@components/app/commons';
import NotFound from '@components/Global/NotFound';

function NotFoundPages() {
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <React.Fragment>
      <Head>
        <title>FemaleDaily Studio - Oops, halaman Anda tidak ditemukan!</title>
      </Head>
      <Header isLoaded={isLoaded} />
      <NotFound />
      <Footer />
    </React.Fragment>
  );
}

export default NotFoundPages;
