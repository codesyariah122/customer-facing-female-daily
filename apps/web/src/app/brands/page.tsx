'use client';
import { useState } from 'react';
import { Brands } from '@components/app/brands';
import { Header, Footer } from '@components/app/commons';
/**
 * this is for BrandsPage
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */
const BrandsPage = (): React.ReactElement => {
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <>
      <Header isLoaded={isLoaded} />
      <Brands />
      <Footer />
    </>
  );
};

export default BrandsPage;
