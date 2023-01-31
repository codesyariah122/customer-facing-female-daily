'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { _HOMEPAGE_LINK_ } from '@constants/url_page';

// Components
import { Header, Footer } from '@components/app/commons';
import { Profile } from '@components/app/account/profile';

/**
 * this is for account -> my profile page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @returns {React.ReactElement}
 *
 * @author Puji Ermanto <developer.outsource@ctcorpdigital.com>
 * @returns {isLogin}
 */

const ProfilePage = (): React.ReactElement => {
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  setTimeout(() => {
    setIsLoaded(true);
  }, 100);

  return (
    <>
      <Header isLoaded={isLoaded} />
      <Profile />
      <Footer />
    </>
  );
};

export default ProfilePage;
