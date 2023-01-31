'use client';
import React, { useState } from 'react';
// Components
import { Header, Footer } from '@components/app/commons';
import { Category } from '@components/app/category';
import { notFound } from 'next/navigation';

type TCategoryPage = { params: { parent_cat: string } };
/**
 * this is for category page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TCategoryPage} { params } for props query param/slug/parent_cat
 * @returns {React.ReactElement}
 */

function CategoryPage({ params }: TCategoryPage): React.ReactElement {
  const [isLoaded, setIsLoaded] = useState(false);
  if (!params.parent_cat) return notFound();
  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);
  return (
    <>
      <Header isLoaded={isLoaded} />
      <Category codeCat={params.parent_cat} />
      <Footer />
    </>
  );
}

export default CategoryPage;
