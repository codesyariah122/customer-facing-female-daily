'use client';
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';
import DetailOrder from '@components/MyOrder/DetailOrder';

/**
 * this is for myorder page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @returns {React.ReactElement}
 */

const DetilOrderPage = (): React.ReactElement => {
  /**
   * FIXME: update with real data here
   */
  const dummyData = {
    order_id: '',
    destination: '',
    payment_method_name: '',
    courier: '',
  };
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  const [isLoaded, setIsLoaded] = useState(false);
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <section>
      <Header isLoaded={isLoaded} />
      <DetailOrder data={dummyData} />
      <Footer />
    </section>
  );
};

export default DetilOrderPage;
