import { Fragment, useRef, useState } from 'react';
import { Menu } from '@headlessui/react';
import { debounce } from '@utils/commons/debonceHelper';

const links: any[] = [
  { href: '/account-settings', label: 'Account settings' },
  { href: '/support', label: 'Support' },
  { href: '/license', label: 'License' },
  { href: '/sign-out', label: 'Sign out' },
];

interface propsFillterOrder {
  searchFor: (text: string) => void;
  onFromDate: (text: string) => void;
}

const FilterOrder = ({ searchFor, onFromDate }: propsFillterOrder) => {
  const [inputSearch, setInputSeatch] = useState('');
  const onSearch = (e: any) => {
    e.preventDefault();
    inputSearch.length > 0 && searchFor(inputSearch);
  };
  const setInputDate = debounce((e: any) => {
    onFromDate(e);
  }, 1000);

  return (
    <div className="flex justify-between text-sm">
      <div className="flex h-[40px] w-[550px]">
        <div className="w-full">
          <input
            type="text"
            value={inputSearch}
            onChange={(e) => setInputSeatch(e.target.value)}
            className="bg-whte border-gray-light h-full w-full border px-4 text-sm focus:outline-none"
            placeholder="What are you looking for?"
          />
        </div>
        <button
          title="btn-search"
          onClick={onSearch}
          className={`h-full items-center justify-center rounded-r px-4 ${
            inputSearch.length > 0 ? 'bg-pink-primary' : 'bg-gray-200'
          }`}
        >
          <i className="ico-search-white" />
        </button>
      </div>
      {/* <div>
        <Menu>
          <Menu.Button className="mx-4 flex h-[40px] w-[238px] items-center rounded border px-4 text-sm">
            All Products
          </Menu.Button>
          <Menu.Items className="absolute z-10">
            {links.map((link: any) => (
              <Menu.Item key={link.href} as={Fragment}>
                {({ active }: any) => (
                  <a
                    href={link.href}
                    className={`${
                      active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                    }`}
                  >
                    <div className="ml-[10px] grid w-[238px] bg-white p-4 drop-shadow-lg hover:bg-gray-100 hover:text-black">
                      {link.label}
                    </div>
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div> */}
      <div>
        <input
          type="date"
          onChange={(e) => setInputDate(e.target.value)}
          className="bg-whte border-gray-light h-full w-[278px] flex-row-reverse rounded border px-4 text-sm focus:outline-none"
          placeholder="Select transaction date"
        />
      </div>
    </div>
  );
};

export default FilterOrder;
