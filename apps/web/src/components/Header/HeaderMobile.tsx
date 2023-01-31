import Minicart from './Minicart';

const HeaderMobile = () => {
  return (
    <header>
      <div className="container fixed z-20 mx-auto bg-white px-2 drop-shadow-lg xl:fixed">
        <div className="flex items-center justify-between py-5">
          <i className="ico-back" />
          <div className="h-14 w-44 rounded-full">
            <i className="ico-search-grey" />
            <input
              type="text"
              className="bg-whte border-gray-light h-full w-full rounded-lg border border-l-0 px-8 text-sm focus:outline-none "
              placeholder="Search products"
            />
          </div>
          <div className="flex items-center">
            <i className="ico-share-mobile" />
            <div className="flex items-center">
              <Minicart />
            </div>
            <i className="ico-options-menu" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMobile;
