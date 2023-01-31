import Image from 'next/image';

const shopRecipeItem = [
  {
    id: 8,
  },
  {
    id: 9,
  },
];

const ShopRecipe = () => {
  return (
    <div className="container mx-auto my-10 xl:max-w-screen-lg">
      <div className="font-semibold">Shop the ingredients</div>
      <div className="my-4">
        {shopRecipeItem.map((item, index) => {
          return (
            <div className="border-b py-4" key={item.id}>
              <div>
                <label
                  htmlFor={`selectall-${item.id}`}
                  className="flex cursor-pointer items-center"
                >
                  <div className="flex">
                    <div>
                      <Image
                        src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                        width={90}
                        height={90}
                        alt=""
                        className="h-[90px] w-[90px] object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <strong className="text-sm font-semibold">
                        Dr Bronner’s
                      </strong>
                      <div className="text-gray-20 mt-1 tracking-wider">
                        MAC Studio Fix Fluid SPF 15 - 30ml
                      </div>
                      <div className="color-black-light mt-1 text-xs">
                        NC15, 30ml
                      </div>
                      <div className="mt-2 flex flex-wrap items-center">
                        <div className="bg-yellow-discount rounded py-[2px] px-[3px] text-xs font-semibold tracking-wider">
                          15%
                        </div>
                        <div className="text-gray-20 ml-2 text-xs font-medium tracking-wider line-through">
                          Rp720.000
                        </div>
                        <div className="ml-2 text-sm font-semibold tracking-wider">
                          Rp690.000
                        </div>
                      </div>
                    </div>
                  </div>
                </label>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <div className="black-olive flex cursor-pointer items-center text-sm tracking-wider">
                  <i className="ico-inactive" /> Move to wishlist
                </div>
                <div className="flex justify-center">
                  <div className="text-gray-30 border-gray-30 flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded border text-[20px] font-semibold shadow">
                    -
                  </div>
                  <div className="text-black-olive flex h-[35px] w-[35px] items-center justify-center font-semibold">
                    0
                  </div>
                  <div className="bg-pink-primary flex h-[35px] w-[35px] cursor-pointer items-center justify-center rounded text-[20px] font-semibold text-white shadow">
                    +
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 flex justify-center gap-x-8">
        <div className="border-pink-primary text-pink-primary flex w-[264px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide">
          <span>Add all items to cart</span>
        </div>
        <div className="border-pink-primary bg-pink-primary flex w-[264px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide text-white">
          <span>Add to Cart</span>
        </div>
      </div>
    </div>
  );
};

export default ShopRecipe;
