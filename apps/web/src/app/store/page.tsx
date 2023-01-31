'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';

/**
 * this is for store page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const StorePage = (): React.ReactElement => {
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
      <Header isLoaded={isLoaded} />
      <Footer />
    </React.Fragment>
  );
};

export default StorePage;
