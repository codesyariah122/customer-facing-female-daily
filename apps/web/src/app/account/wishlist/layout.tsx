'use client';
/**
 * Wishlist layout
 */
import React, { useState } from 'react';
import { Header, Footer } from '@components/app/commons';

/**
 * Wishlist Layout component
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @param   {{children: {children: React.ReactNode}}} children <React.ReactNode element>
 * @returns {React.ReactElement}
 */
function WishlistLayout({
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
      <Header isLoaded={isLoaded} />
      <div>{children}</div>
      <Footer />
    </section>
  );
}

export default WishlistLayout;
