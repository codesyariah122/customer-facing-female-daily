/**
 * Products layout
 */
import React from 'react';
import { HeaderCheckout, FooterCheckout } from '@components/app/commons';

/**
 * Products Layout component
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {{children: {children: React.ReactNode}}} children <React.ReactNode element>
 * @returns {React.ReactFragment}
 */
export default function MyPaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <HeaderCheckout />
        <div>{children}</div>
        <FooterCheckout />
      </div>
    </section>
  );
}
