import React from 'react';

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
  return <React.Fragment>{children}</React.Fragment>;
}
