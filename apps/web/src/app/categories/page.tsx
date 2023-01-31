'use client';
import React, { useState } from 'react';
import UnderMaintenance from '@components/Global/UnderMaintenance';
import { Footer, Header } from '@components/app/commons';

/**
 * TODO: Categories Page here...
 * @returns {React.ReactElement}
 */

function CategoriesPage(): React.ReactElement {
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
      <UnderMaintenance />
      <Footer />
    </>
  );
}

export default CategoriesPage;
