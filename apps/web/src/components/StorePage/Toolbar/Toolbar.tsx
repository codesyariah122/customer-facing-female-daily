import { useState } from 'react';
import Grid from '../../Global/Toolbar/Grid';
import Sort from '../../Global/Toolbar/Sort';

const Toolbar = ({
  valueLayout,
  clickFunc,
}: {
  valueLayout: Boolean;
  clickFunc: (value: Boolean) => void;
}) => {
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
        <Grid valueLayout={valueLayout} clickFunc={clickFunc} />
      </div>
    </div>
  );
};

export default Toolbar;
