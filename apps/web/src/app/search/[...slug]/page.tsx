'use client';
import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import {
  _CATEGORY_SLUG_,
  _CAT_KEY_SUBSLUG_,
  _KEY_SLUG_,
  _KEY_VALID_SUBSLUG_,
  _MAX_CATEGORY_LEVEL_,
  _SEARCH_VALID_SLUGS_,
} from '@constants/search';
import Search from '@components/app/search/search';

/**
 * Default page component for search with slugs
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param param0
 * @returns
 */
function SearchSlugPage({ params }: { params: { slug: string[] } }) {
  const [isLoaded, setIsLoaded] = useState(false);
  /**
   * constant slug
   */
  const slugs: string[] = params?.slug;

  /**
   * Check is slug valid
   */
  const isSlugValid = (slug: string): boolean => {
    return _SEARCH_VALID_SLUGS_.includes(slug);
  };

  /**
   * Give some miliseconds to hide and display login info
   * to dismiss hydration error
   */
  setTimeout(() => {
    setIsLoaded(true);
  }, 100);

  /**
   * Get slug parameter name
   */
  const getSlug = (): string => {
    if (Array.isArray(slugs) && slugs.length > 0) {
      return slugs[0];
    }
    return '';
  };

  const slug = getSlug();
  if (isSlugValid(slug)) {
    const keywords: string = slugs[1];
    let categoryData: string[] = [];

    //Show search page with keywords slug
    if (slug === _KEY_SLUG_) {
      // Show search page with keywords and additional filters params
      if (slugs.length > 2) {
        let isFilterValid: boolean = true;
        slugs.map((item, key) => {
          if (key && key % 2 === 0) {
            isFilterValid = _KEY_VALID_SUBSLUG_.includes(item.toLowerCase());
            // if additional filter param is categories
            if (
              `${key + 1}` in slugs &&
              item.toLowerCase() === _CAT_KEY_SUBSLUG_
            ) {
              categoryData.push(
                slugs[key + 1].replace(/-/g, ' ').replace(/and/g, '&')
              );
            }
            return;
          }
        });

        //show page only for filters params with valid name
        if (isFilterValid) {
          return (
            <>
              <div className="h-full">
                <Search keywords={keywords} category={categoryData} />
              </div>
            </>
          );
        }

        //even filters param has single invalid name, redirect it to 404 page
        return notFound();
      }

      //show search page with keywords only
      return (
        <>
          <Search keywords={keywords} />
        </>
      );
    }

    //show search page with categories slug
    if (slug === _CATEGORY_SLUG_) {
      let isCategoryValid: boolean = false;
      if (slugs.length - 1 <= _MAX_CATEGORY_LEVEL_) {
        isCategoryValid = true;
      }

      if (isCategoryValid) {
        slugs.map((slug, key) => {
          if (key) {
            categoryData.push(slug.replace(/-and-/g, '-&-').replace(/-/g, ' '));
          }
        });
        return (
          <>
            <div className="h-full">
              <Search category={categoryData} />
            </div>
          </>
        );
      }

      return notFound();
    }
  }

  //for invalid slug, redirect it to 404 page
  return notFound();
}

export default SearchSlugPage;
