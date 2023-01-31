'use client';
import { useState } from 'react';
import { Grid, Sort } from '@components/app/commons';

type TToolbar = {
  valueLayout: Boolean;
  clickFn: (value: Boolean) => void;
};
/**
 * Toolbar component <show Toolbar component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TToolbar}
 *  {
      valueLayout (state for value layout, grid or list)
      clickFn (function for change layout)
    }
 * @returns {React.ReactElement}
 */

const Toolbar = ({ valueLayout, clickFn }: TToolbar) => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const onInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="relative flex w-[426px]">
        <input
          type="text"
          className="h-[38px] flex-1 rounded-l-lg border border-l-0 bg-white pl-4 pr-10 text-sm shadow focus:outline-none"
          placeholder="Search products in this store"
          onChange={onInputchange}
          value={inputSearch}
        />
        <button className="bg-pink-primary flex h-[38px] w-[38px] items-center justify-center rounded-r-lg">
          <i className="ico-search-white-small" />
        </button>
        {inputSearch.length > 0 && (
          <div
            className="absolute top-[13px] right-[65px] cursor-pointer"
            onClick={() => {}}
          >
            <i className="ico-close-circle" />
          </div>
        )}
      </div>
      <div className="flex items-center">
        <Sort />
        <i className="ico-line-2 mx-10"></i>
        <Grid valueLayout={valueLayout} clickFn={clickFn} />
      </div>
    </div>
  );
};

export default Toolbar;
