import { useState } from 'react';
import Select from '../Global/Select';

const dataSelect = [
  {
    id: 1,
    name: 'All',
    label: 'All',
  },
  {
    id: 2,
    name: 'Face',
    label: 'Face',
  },
  {
    id: 3,
    name: 'Foundation',
    label: 'Foundation',
  },
];

const Toolbar = () => {
  const [inputSearch, setInputSearch] = useState<string>('');
  return (
    <div className="flex items-center justify-between">
      <div className="relative flex w-full max-w-[426px]">
        <input
          type="text"
          className="flex h-10 w-full rounded-l-lg border border-l-0 bg-white pl-4 pr-10 text-sm shadow focus:outline-none"
          placeholder="Search promotions"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <button className="bg-pink-primary flex h-10 w-10 items-center justify-center rounded-r-lg">
          <i className="ico-search-white-small" />
        </button>
      </div>
      <div className="flex items-center space-x-12">
        <div className="flex items-center space-x-2.5">
          <span className="tracking-wider">Categories</span>
          <div className="h-8 w-[240px]">
            <Select dataSelect={dataSelect} />
          </div>
        </div>
        <div className="flex items-center space-x-2.5">
          <span className="tracking-wider">Sort by</span>
          <div className="h-8 w-[172px]">
            <Select dataSelect={dataSelect} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
