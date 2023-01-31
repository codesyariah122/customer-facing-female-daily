'use client';
import React, { useState } from 'react';
// Components
import { Header, Footer } from '@components/app/commons';
import BeautyProfile from '@components/app/beautyprofile/BeautyProfile';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const EditBeautyProfile = (): React.ReactElement => {
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
      <BeautyProfile />
      <Footer />
    </>
  );
};

export default EditBeautyProfile;
