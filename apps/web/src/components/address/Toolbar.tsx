import { useState } from 'react';

const Toolbar = ({ openModalFunc }: { openModalFunc: () => void }) => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const onInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="relative order-2 mt-3 flex w-full max-w-[320px] md:order-1 md:mt-0">
          <input
            type="text"
            className="flex h-[54px] rounded-l-lg border border-l-0 bg-white pl-4 pr-10 text-sm shadow focus:outline-none"
            placeholder="Search address"
            onChange={onInputchange}
            value={inputSearch}
          />
          <button className="bg-pink-primary flex h-[54px] w-[54px] items-center justify-center rounded-r-lg">
            <i className="ico-search-white-small" />
          </button>
          {inputSearch.length > 0 && (
            <div
              className="absolute top-[13px] right-[65px] cursor-pointer"
              onClick={() => setInputSearch('')}
            >
              <i className="ico-close-circle" />
            </div>
          )}
        </div>
        <div className="order-1 flex items-center space-x-2.5 md:order-2">
          <div
            className="bg-pink-primary flex w-[203px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white"
            onClick={openModalFunc}
          >
            <span>+ Add New Address</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
