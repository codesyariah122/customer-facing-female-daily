'use client';
/**
 * README: Categories Page
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description This page provide for plp categories implementation
 * plp categories is product listing page which filtered by some category
 * it's mean both of products and filters works limited by category used as filter
 */
import React, { useState } from 'react';
import Search from '@components/app/search/search';

export default function CategoriesSlugPage({
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
  }, 100);

  let category: string[] = [];
  slugs.map((slug) => {
    category.push(slug.replace(/-and-/g, '-&-').replace(/-/g, ' '));
  });

  return (
    <>
      <div className="h-full">
        <Search category={category} />
      </div>
    </>
  );
}
