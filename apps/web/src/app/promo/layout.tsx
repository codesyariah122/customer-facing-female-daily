'use client';
/**
 * Promo Layout
 */
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';

/**
 * Promo Layout component
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {{children: {children: React.ReactNode}}} children <React.ReactNode element>
 * @returns {React.ReactElement}
 */
export default function PromoLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
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
      <div>
        <Header isLoaded={isLoaded} />
        <div>{children}</div>
        <Footer />
      </div>
    </section>
  );
}
