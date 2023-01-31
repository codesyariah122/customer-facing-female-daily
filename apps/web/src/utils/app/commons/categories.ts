/**
 * Utilities related with categories data
 */

import {
  _CATEGORIES_SETS_STORAGE_NAME_,
  _CATEGORIES_STORAGE_NAME_,
} from '@constants/categories';
import { useGetCategorySetQuery } from '@graphql-ctcd/codegen';

/**
 * constant category_filter_type
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description use to indicate if filters is category type
 * @var {string}
 */
export const _CATEGORY_FILTER_TYPE_: string = 'category';

/**
 * constant children
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description indicate children string
 * @var {string}
 */
export const _CHILDREN_: string = 'children';

/**
 * GetCategoriesProductsFilter
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @description convert categories raw data into categories filter data format
 * @param {any[]} categories <list of category data with raw format>
 * @returns {any[]}
 */
export function GetCategoriesProductsFilter(categories: any[]): any[] {
  /**
   * filters data variable
   * @var {any[]}
   */
  let filtersData: any[] = [];

  if (categories && categories.length) {
    /**
     * Determined if child category is valid
     * @param {any} category <category object>
     * @returns {boolean}
     */
    const hasValidChild = (category: any): boolean => {
      return (
        _CHILDREN_ in category &&
        Array.isArray(category.children) &&
        category.children.length
      );
    };

    categories.map((category, key) => {
      let children: any[] | undefined;
      if (hasValidChild(category)) {
        children = GetCategoriesProductsFilter(category.children);
      }

      children
        ? filtersData.push({
            filterType: _CATEGORY_FILTER_TYPE_,
            filterName: category.name,
            filterValue: category.code,
            filterLevel: category.level,
            checkboxItemsFilter: children,
          })
        : filtersData.push({
            filterType: _CATEGORY_FILTER_TYPE_,
            filterName: category.name,
            filterValue: category.code,
            filterLevel: category.level,
          });
    });
  }

  return filtersData;
}

/**
 * Set categories data into local storage
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any} categories
 * @returns {any}
 */
export function SetCategoriesLocal(categories: any): any {
  if (typeof window !== 'undefined') {
    if (categories.isSuccess) {
      const localData = localStorage.getItem(_CATEGORIES_STORAGE_NAME_);
      if (!localData) {
        localStorage.setItem(
          _CATEGORIES_STORAGE_NAME_,
          JSON.stringify(categories)
        );
      }
    }
  }

  return categories;
}

/**
 * Get category set by graphql
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {any} graphqlRequest
 * @returns {any}
 */
export function GetCategorySet(graphqlRequest: any) {
  /**
   * FIXME: check again hooks conditional
   */
  const categorySets = useGetCategorySetQuery(graphqlRequest);
  const getCategorySet = useGetCategorySetQuery(graphqlRequest);
  if (typeof window !== 'undefined') {
    const localData = GetCategoriesSetsLocalStorage();
    if (!localData) {
      if (categorySets.isSuccess) {
        localStorage.setItem(
          _CATEGORIES_SETS_STORAGE_NAME_,
          JSON.stringify(categorySets)
        );
        return categorySets;
      }
    } else {
      return localData;
    }
    return getCategorySet;
  }
}

/**
 * Get combined categories data dan categories sets data
 * @author Hamam
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param categories
 * @param categoriesSets
 * @returns
 */
export function GetCombinedCategoriesAndCategoriesSets(
  categories: any[] | null,
  categoriesSets: any | null
): any | null {
  if (categories && categoriesSets) {
    const sets = categoriesSets.homepageCategorySet[0]?.subCategories;

    return categories
      .filter((category: any) => {
        return sets.find((el: any) => el.code === category.code);
      })
      .map((category: any) => {
        return {
          ...category,
          ...(category.children && {
            children: category.children
              .filter((catlv1: any) => {
                return catlv1.active == true && catlv1.in_menu == true;
              })
              .map((catlv2: any) => {
                return {
                  ...catlv2,
                  ...(catlv2.children && {
                    children: catlv2.children.filter((catlv2: any) => {
                      return catlv2.active == true && catlv2.in_menu == true;
                    }),
                  }),
                };
              }),
          }),
        };
      });
  }
  return null;
}

export function GetCategoriesLocalStorage() {
  if (typeof window !== 'undefined') {
    const localData = localStorage.getItem(_CATEGORIES_STORAGE_NAME_);
    if (localData) {
      try {
        return JSON.parse(localData);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return null;
}

export function GetCategoriesSetsLocalStorage() {
  if (typeof window !== 'undefined') {
    const localData = localStorage.getItem(_CATEGORIES_SETS_STORAGE_NAME_);
    if (localData) {
      try {
        return JSON.parse(localData);
      } catch (e) {
        console.log(e);
      }
    }
  }

  return null;
}
