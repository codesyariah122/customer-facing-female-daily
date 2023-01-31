/**
 * Head tag for Shopping Cart Page
 */
import React from 'react';
import { keywordsData } from '@dummydata/keywords';

/**
 * Header component <extending from app/Head> adding keywords meta for SEO purpose
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {React.ReactFragment}
 */

/**
 * FIXME:
 * - Still using dummy data for meta keywords, need to fix
 */
export default function Head() {
  return (
    <>
      <title>FemaleDaily Studio - Indonesia’s No.1 Beauty Destination</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="keywords" content={keywordsData.shoppingcart} />
      <meta name="description" content="FemaleDaily Studio" />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
