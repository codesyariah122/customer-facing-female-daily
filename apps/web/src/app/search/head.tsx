/**
 * Head tag for Products Page
 */
import React from 'react';
import * as MainHead from '@app/head';
import { keywordsData } from '@dummydata/keywords';

/**
 * Header component <extending from app/Head> adding keywords meta for SEO purpose
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @returns {React.ReactFragment}
 *
 * @todo    Still using dummy data for meta keywords, need to fix
 */
export default async function Head() {
  const mainHead = await MainHead.default();
  return (
    <>
      {mainHead}
      <meta name="keywords" content={keywordsData.products} />
    </>
  );
}
