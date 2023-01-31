'use client';
/**
 * README: Brand Page
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description This page provide for plp brand implementation
 * plp brand is product listing page which filtered by some brand
 * Because in filters side doesn't have any brand filter,
 * the products listed already filtered by brand, but all filter is open
 */
import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Search from '@components/app/search/search';

export default function BrandSlugPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  /**
   * constant slug
   */
  const slugs: string[] = params?.slug;

  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  setTimeout(() => {
    setIsLoaded(true);
  }, 500);

  const isValid = () => {
    return Array.isArray(slugs) && slugs.length === 1;
  };

  if (isValid()) {
    const brandName: string = slugs[0];
    return (
      <>
        <div className="h-full">
          <Search brandName={brandName} />
        </div>
      </>
    );
  }

  return notFound();
}
