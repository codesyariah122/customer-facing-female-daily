import { _CATEGORIES_STORAGE_NAME_ } from '@constants/categories';
import { CORE_URL } from '@constants/env';
import { useQuery } from '@tanstack/react-query';
import { GetCategoriesLocalStorage } from '@utils/app/commons';

/**
 * REST API get category list
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {any[]}
 */
const fetchCategory = async () => {
  const parsed = await fetch(`${CORE_URL}/v1/categories/cascade-all`, {
    method: 'GET',
    next: {
      revalidate: 999999,
    },
  });
  const result = parsed.json();
  return result;
};

const useCategory = () => {
  return useQuery(['categorylist'], () => fetchCategory());
};

const useCategoryMegaMenu = () => {
  const localData = GetCategoriesLocalStorage();
  const fetchData = useQuery(['categoryListMegaMenu'], () => fetchCategory());

  return localData || fetchData;
};

export { useCategory, useCategoryMegaMenu, fetchCategory };
