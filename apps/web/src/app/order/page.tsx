'use client';
import React, { useState, useEffect } from 'react';
import MyOrder from '@components/MyOrder/MyOrder';
import { Header, Footer } from '@components/app/commons';
const MyOrderPage = () => {
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div>
      <Header isLoaded={isLoaded} />
      <MyOrder />
      <Footer />
    </div>
  );
};

export default MyOrderPage;
