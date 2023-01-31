import { useState } from 'react';
import { Select } from '@components/app/commons';

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

/**
 * Toolbar component <Toolbar component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */

const Toolbar = () => {
  const [inputSearch, setInputSearch] = useState<string>('');
  return (
    <div className="flex items-center justify-between">
      <div className="relative flex w-full max-w-[300px]">
        <input
          type="text"
          className="flex h-10 w-full rounded-l-lg border border-l-0 bg-white pl-4 pr-10 text-sm shadow focus:outline-none"
          placeholder="Search"
          onChange={(e) => setInputSearch(e.target.value)}
          value={inputSearch}
        />
        <button className="bg-pink-primary flex h-10 w-10 items-center justify-center rounded-r-lg">
          <i className="ico-search-white-small" />
        </button>
      </div>
      <div className="flex items-center space-x-2.5">
        <span className="tracking-wider">Topics</span>
        <div className="h-10 w-[185px]">
          <Select dataSelect={dataSelect} />
        </div>
      </div>
      <div className="flex items-center space-x-2.5">
        <span className="tracking-wider">Sort by</span>
        <div className="h-10 w-[185px]">
          <Select dataSelect={dataSelect} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
