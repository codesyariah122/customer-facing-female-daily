'use client';
/**
 * Shopping Cart layout
 */
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';

/**
 * Products Layout component
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {{children: {children: React.ReactNode}}} children <React.ReactNode element>
 * @returns {React.ReactFragment}
 */
export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
      <div>{children}</div>
      <Footer />
    </section>
  );
}
