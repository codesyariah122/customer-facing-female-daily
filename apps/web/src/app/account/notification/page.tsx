'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';
import { NotificationPage } from '@components/app/account/notification';

function AccountNotificationPage() {
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
      <NotificationPage />
      <Footer />
    </>
  );
}

export default AccountNotificationPage;
