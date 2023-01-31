import { Menu } from '@headlessui/react';
const HeaderSearch = () => {
  return (
    <div className="flex items-center">
      <div className="h-14 w-20">
        <div className="bg-gray-10 border-gray-light flex h-full w-full items-center justify-center rounded-l border">
          <Menu as="div" className="relative flex h-full w-full">
            <Menu.Button
              as="div"
              className="flex h-full w-full cursor-pointer items-center justify-center"
            >
              <span className="text-sm">All</span>
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
                <div className="w-1/2 py-2 text-sm tracking-wider">Test 1</div>
                <div className="w-1/2 py-2 text-sm tracking-wider">Test 1</div>
                <div className="w-1/2 py-2 text-sm tracking-wider">Test 1</div>
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
        />
      </div>
      <div className="h-14 w-14">
        <button className="bg-pink-primary flex h-full w-full items-center justify-center rounded-r">
          <i className="ico-search-white" />
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
