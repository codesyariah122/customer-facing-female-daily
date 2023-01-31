'use client';
// Components
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';
import { Issues } from '@components/app/account/issues';

/**
 * this is for account -> my issue page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const IssuesPage = (): React.ReactElement => {
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
      <Issues />
      <Footer />
    </>
  );
};

export default IssuesPage;
