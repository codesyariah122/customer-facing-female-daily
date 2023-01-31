import Link from 'next/link';

const MenuCategory = () => {
  return (
    <div className="">
      <div className="flex items-center">
        <i className="ico-category-menu"></i>
        <span className="mx-4 text-sm font-semibold">Categories</span>
        <i className="ico-arrow-down-white"></i>
      </div>
      <div className="absolute top-[52px] left-0 z-10 hidden w-full bg-white text-black shadow-md">
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="flex flex-wrap">
            <div className="flex w-1/4 flex-col space-y-4 border-r border-[#DADADA] py-8 pr-3">
              <Link
                href="/"
                className="c1 group flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center">
                    <img src="/images/ico-groceries.svg" />
                    <span className="text group-hover:text-pink-primary ml-4 text-sm font-semibold tracking-wider">
                      Groceries
                    </span>
                  </div>
                  <i className="ico-polygon-right-grey"></i>
                </div>
              </Link>
              <Link
                href="/"
                className="c1 group flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center">
                    <img src="/images/ico-groceries.svg" />
                    <span className="text group-hover:text-pink-primary ml-4 text-sm font-semibold tracking-wider">
                      Mother, Baby & Kids
                    </span>
                  </div>
                  <i className="ico-polygon-right-grey"></i>
                </div>
              </Link>
              <Link
                href="/"
                className="c1 group flex items-center justify-between"
              >
                <div>
                  <div className="flex items-center">
                    <img src="/images/ico-groceries.svg" />
                    <span className="text group-hover:text-pink-primary ml-4 text-sm font-semibold tracking-wider">
                      Beauty, Health & Pharmacy
                    </span>
                  </div>
                  <i className="ico-polygon-right-grey"></i>
                </div>
              </Link>
            </div>
            <div className="flex w-1/4 flex-col space-y-4 border-r border-[#DADADA] py-8 pr-3 pl-6">
              <div>
                <Link
                  href="/as"
                  className="c2 flex items-center justify-between"
                >
                  <span className="text text-sm font-semibold tracking-wider">
                    Rice
                  </span>
                </Link>
              </div>
              <div>
                <Link
                  href="/d"
                  className="c2 flex items-center justify-between"
                >
                  <span className="text text-sm font-semibold tracking-wider">
                    Bakery Pastry
                  </span>
                </Link>
                <div className="flex flex-col">
                  <Link
                    href="/"
                    className="c3 mt-2 flex items-center justify-between"
                  >
                    <span className="text text-sm tracking-wider">Breads</span>
                  </Link>
                  <Link
                    href="/"
                    className="c3 mt-2 flex items-center justify-between"
                  >
                    <span className="text text-sm tracking-wider">
                      Danish Puffs
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className="c3 mt-2 flex items-center justify-between"
                  >
                    <span className="text text-sm tracking-wider">Cookies</span>
                  </Link>
                </div>
              </div>
              <div>
                <Link href="/" className="c2 flex items-center justify-between">
                  <span className="text text-sm font-semibold tracking-wider">
                    Cooking Ingredients Seasonings
                  </span>
                </Link>
                <div className="flex flex-col">
                  <Link
                    href="/"
                    className="c3 mt-2 flex items-center justify-between"
                  >
                    <span className="text text-sm tracking-wider">Flour</span>
                  </Link>
                  <Link
                    href="/"
                    className="c3 mt-2 flex items-center justify-between"
                  >
                    <span className="text text-sm tracking-wider">
                      Sugar Other Sweeteners
                    </span>
                  </Link>
                  <Link
                    href="/"
                    className="c3 mt-2 flex items-center justify-between"
                  >
                    <div>
                      <span className="text text-sm tracking-wider">
                        Home Baking
                      </span>
                      <i className="ico-polygon-right-grey"></i>
                    </div>
                  </Link>
                  <Link
                    href="/"
                    className="c3 mt-2 flex items-center justify-between"
                  >
                    <span className="text text-sm tracking-wider">Salt</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex w-1/4 flex-col space-y-2 py-8 pr-3 pl-6">
              <Link href="/" className="c3 flex items-center justify-between">
                <span className="text text-sm tracking-wider">
                  Baking Powder
                </span>
              </Link>
              <Link href="/" className="c3 flex items-center justify-between">
                <span className="text text-sm tracking-wider">
                  Pudding Powder
                </span>
              </Link>
              <Link href="/" className="c3 flex items-center justify-between">
                <span className="text text-sm tracking-wider">
                  Jelly Powder
                </span>
              </Link>
            </div>
            <div className="flex w-1/4 flex-col py-8">
              <img src="/images/image-cat.jpg" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
