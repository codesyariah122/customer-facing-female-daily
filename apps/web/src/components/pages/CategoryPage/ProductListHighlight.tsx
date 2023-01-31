const ProductListHighlight = () => {
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="border-gray-30 flex gap-x-16 border-b">
        <div className="text-teal-primary after:pseudo-content-comma after:bg-teal-primary relative p-2 text-lg font-semibold after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full">
          For You
        </div>
        <div className="text-black-olive p-2 text-lg">Best Sellers</div>
      </div>
      <div className="mt-10 grid grid-cols-5 gap-7">
        <div>
          <div className="rounded bg-white p-2 shadow-md">
            <div className="relative">
              <div className="absolute left-0 -top-[8px]">
                <i className="ico-discount-label"></i>
                <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                  15%
                </span>
              </div>
              <div className="absolute right-0 top-0">
                <i className="ico-wishlist"></i>
              </div>
              <img
                src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                className="w-full"
                alt=""
              />
            </div>
            <div className="text-black-olive line-clamp-2 mt-2 h-12 px-2 tracking-wider">
              Maybelline Superstay Matte
            </div>
            <div className="mt-1 flex flex-col px-2">
              <span className="font-semibold">Rp99.000</span>
              <span className="text-black-light text-sm tracking-wider line-through">
                Rp120.000
              </span>
            </div>
            <div className="mt-1 flex items-center px-2">
              <div className="flex gap-x-1">
                <i className="ico-star-pink"></i>
                <i className="ico-star-pink"></i>
                <i className="ico-star-pink"></i>
                <i className="ico-star-pink"></i>
                <i className="ico-star-grey"></i>
              </div>
              <div className="text-gray-20 ml-3 text-xs tracking-wider">
                154
              </div>
            </div>
            <div className="mt-5 px-2">
              <div className="border-platinum rounded border p-2 text-center text-xs font-semibold">
                + Add to Cart
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <span className="text-pink-primary border-pink-primary cursor-pointer rounded border px-8 py-3 font-semibold tracking-wider">
          See More
        </span>
      </div>
    </div>
  );
};

export default ProductListHighlight;
