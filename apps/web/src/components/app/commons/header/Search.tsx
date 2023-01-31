'use client';
import { Menu } from '@headlessui/react';
import Image from 'next/image';
import React, {
  useEffect,
  useRef,
  useState,
  Children,
  useCallback,
} from 'react';
import { useHeaderSearchCategories, usePopularSearch } from '@hooks/index';
import { useOnClickOutside } from '@utils/commons/clickOutside';
import Link from 'next/link';
import { _SEARCH_LINK_ } from '@constants/url_page';
import { redirect } from 'next/navigation';
import { BASE_URL } from '@constants/env';
import { IHeaderSearch } from '@utils/app/commons';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

/**
 * Search component <Search component on the Search header>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */
// TODO: sekeleton popular search
// FIXME: props any type

function Search() {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const [keywords, setKeywords] = useState<string>('');
  const [searchCategories, setSearchCategories] = useState<any[]>([]);
  const [categorySearch, setCategorySearch] = useState<string>('All');
  const areaSearchInfo = useRef<HTMLDivElement>(null);
  const getDestination = useCallback(
    (destination: string): string => {
      if (keywords) {
        destination += keywords ? `/key/${keywords}/` : ``;
        destination += categorySearch === 'All' ? `` : `cat/${categorySearch}/`;
      }
      return destination;
    },
    [categorySearch, keywords]
  );
  const redirectToSearch = useCallback(
    (destination: string, key?: string, cat?: string) => {
      if (key) {
        destination += key ? `/key/${key}/` : ``;
        destination += cat === 'All' ? `` : `cat/${cat}/`;
      }
      window.location.href = getDestination(destination);
    },
    [getDestination]
  );
  const onFocusFn = () => {
    setShowSearchBar(true);
    refetch();
  };
  const onKeyDownFn = (e: { key: string }) => {
    const timer = setTimeout(() => {
      if (e.key === 'Enter' || e.key === 'enter') {
        redirectToSearch(
          `${BASE_URL}/${_SEARCH_LINK_}/`,
          keywords,
          categorySearch
        );
      }
    }, 500);

    return () => clearTimeout(timer);
  };
  const onKeyUpFn = (e: any) => {
    setKeywords(e.target.value);
  };

  // fetch data popular search
  const {
    data: dataPopularSearch,
    refetch,
    isLoading,
    isFetching,
    isError,
  } = usePopularSearch();

  // hook for click outside modal searchbar
  useOnClickOutside(areaSearchInfo, () => setShowSearchBar(false));

  const { data: searchHeaderCategories } = useHeaderSearchCategories();

  useEffect(() => {
    if (searchHeaderCategories) {
      setSearchCategories(searchHeaderCategories);
    }
  }, [searchHeaderCategories]);

  const getSearchByCategoryItem = (): React.ReactElement => {
    return (
      <>
        <div className="w-1/2 py-2 text-sm tracking-wider">
          <button onClick={() => setCategorySearch('All')}>All</button>
        </div>
        {searchCategories
          ? searchCategories?.map((category: any, key: number) =>
              category.active ? (
                <div className="w-1/2 py-2 text-sm tracking-wider" key={key}>
                  <button onClick={() => setCategorySearch(category.url_key)}>
                    {category.name}
                  </button>
                </div>
              ) : null
            )
          : null}
      </>
    );
  };

  return (
    <div className="relative">
      <div className="flex items-center">
        <div className="h-14 w-20">
          <div className="bg-gray-10 border-gray-light flex h-full w-full items-center justify-center rounded-l border">
            <Menu as="div" className="relative flex h-full w-full">
              <Menu.Button
                as="div"
                className="flex h-full w-full cursor-pointer items-center justify-center"
              >
                <span className="text-sm">
                  {categorySearch.substring(3)
                    ? `${categorySearch.substring(0, 3)}...`
                    : categorySearch}
                </span>
                <i className="ico-arrow-down-black ml-3.5" />
              </Menu.Button>
              <Menu.Items
                as="section"
                className="w-580 absolute left-0 top-full z-10 rounded bg-white p-5 shadow-lg focus:outline-none "
              >
                <div className="flex font-semibold tracking-wider">
                  Search in Category
                </div>
                <div className="mt-3 flex w-full flex-wrap">
                  {getSearchByCategoryItem()}
                </div>
              </Menu.Items>
            </Menu>
          </div>
        </div>
        <div className="xl:w-440 h-14 md:w-1/2">
          <input
            type="text"
            className="bg-whte border-gray-light h-full w-full border border-l-0 px-4 text-sm focus:outline-none"
            placeholder="What are you looking for?"
            onFocus={onFocusFn}
            onKeyDown={onKeyDownFn}
            onKeyUp={onKeyUpFn}
          />
        </div>
        <div className="h-14 w-14">
          <Link href={getDestination(`${_SEARCH_LINK_}`)}>
            <button className="bg-pink-primary flex h-full w-full items-center justify-center rounded-r">
              <i className="ico-search-white" />
            </button>
          </Link>
        </div>
      </div>
      {showSearchBar && (
        <div
          className="absolute top-full left-0 z-10 w-full rounded bg-white p-5 shadow-lg"
          ref={areaSearchInfo}
        >
          <div>
            <div className="flex justify-between">
              <strong className="font-semibold">Popular Search</strong>
              <div>
                <span
                  className="text-pink-primary cursor-pointer text-xs font-semibold"
                  onClick={() => refetch()}
                >
                  Refresh
                </span>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-2 gap-5">
              {isLoading || isFetching ? (
                <div>Loading</div>
              ) : !isError ? (
                dataPopularSearch.map((item: any) => {
                  return (
                    <div className="flex" key={item.code}>
                      <div>
                        <a href={`/product/${item?.url_key}`}>
                          <Image
                            src={item?.medias[0]?.url || _DEFAULT_NO_IMAGE_}
                            width={51}
                            height={51}
                            alt={item?.name || 'no-image'}
                            className="h-[51px] w-[51px] rounded object-cover shadow"
                          />
                        </a>
                      </div>
                      <a href={`/product/${item?.url_key}`}>
                        <span className="pl-2.5 pt-2 text-xs">{item.name}</span>
                      </a>
                    </div>
                  );
                })
              ) : null}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
