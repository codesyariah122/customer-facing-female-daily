'use client';
// Components
import React, { useState } from 'react';
import { WizardProfileBeauty } from '@components/app/beautyprofile';
import { Header, Footer } from '@components/app/commons';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const BeuatyProfileStep = (): React.ReactElement => {
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
      <WizardProfileBeauty />
      <Footer />
    </>
  );
};

export default BeuatyProfileStep;
