import { useState } from 'react';
import Select from './Select';

type TSelect = {
  id: number;
  name: string;
  label: string;
  code: string;
};

type TToolbarProps = {
  dataCategory: any;
  onSelectChange: (arg: TSelect) => void;
  onCategoryChange: (arg: TSelect) => void;
  onSearchChange: (arg: string) => void;
};

const dataSelect = [
  {
    id: 1,
    name: 'Latest Deals',
    label: 'Latest Deals',
    code: 'LATEST_DEALS',
  },
  {
    id: 2,
    name: 'Ending Soon',
    label: 'Ending Soon',
    code: 'ENDING_SOON',
  },
];

const Toolbar = ({
  onSelectChange,
  onCategoryChange,
  onSearchChange,
  dataCategory,
}: TToolbarProps) => {
  const [inputSearch, setInputSearch] = useState<string>('');

  const onKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') onSearchChange(inputSearch);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="relative flex w-full max-w-[426px]">
        <input
          type="text"
          className="flex h-10 w-full rounded-l-[4px] border-[1.5px] border-[#EAEAEA] bg-white pl-4 pr-10 text-sm shadow-[0px_2px_4px_rgba(190,190,190,0.15)] focus:outline-none"
          placeholder="Search promotions"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
          onKeyDown={onKeyDown}
        />
        <span
          className="bg-pink-primary flex h-10 w-10 cursor-pointer items-center justify-center rounded-r-[4px]"
          onClick={() => onSearchChange(inputSearch)}
        >
          <i className="ico-search-white-small" />
        </span>
      </div>
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2.5">
          <span className="text-base font-normal leading-4 text-black">
            Categories
          </span>
          <div className="h-8 w-[172px]">
            <Select
              dataSelect={dataCategory}
              onSelectChange={onCategoryChange}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2.5">
          <span className="text-base font-normal leading-4 text-black">
            Sort by
          </span>
          <div className="h-8 w-[172px]">
            <Select dataSelect={dataSelect} onSelectChange={onSelectChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
