'use client';
import { useEffect, useState } from 'react';
import { Select } from '@components/app/brands';

const Toolbar = (props: any) => {
  const [inputSearch, setInputSearch] = useState<string>('');

  // function for action search
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);

    const timer = setTimeout(() => {
      props.setDataBySearch(e.target.value, 'SEARCH');
    }, 500);
    return () => clearTimeout(timer);
  };
  // function for action reset search
  const onResetSearch = () => {
    setInputSearch('');
    props.setDataBySearch('', 'RESET');
  };

  // useffect for get props searchOnChildFn to trigger function onResetSearch
  useEffect(() => {
    onResetSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.searchOnChildFn]);

  return (
    <div className="">
      <h1 className="text-22 font-semibold">Brand Directory</h1>
      <div className="mt-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="relative order-2 mt-3 flex w-full max-w-[500px] md:order-1 md:mt-0">
            <input
              type="text"
              className="flex-0 h-[54px] rounded-l-lg border border-l-0 bg-white pl-4 pr-10 text-sm shadow focus:outline-none md:flex-1"
              placeholder="Search brands"
              onChange={onInputChange}
              value={inputSearch}
            />
            <button className="bg-pink-primary flex h-[54px] w-[54px] items-center justify-center rounded-r-lg">
              <i className="ico-search-white-small" />
            </button>
            {inputSearch.length > 0 && (
              <div
                className="absolute top-[13px] right-[65px] cursor-pointer"
                onClick={onResetSearch}
              >
                <i className="ico-close-circle" />
              </div>
            )}
          </div>
          <div className="order-1 flex items-center space-x-2.5 md:order-2">
            <span className="tracking-wider">Categories</span>
            <div className="h-8 w-[240px]">
              <Select
                dataCategory={props?.dataCategory}
                filterByCategory={props.filterByCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
