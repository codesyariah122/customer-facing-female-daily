import Image from 'next/image';

const CardProductListView = () => {
  return (
    <div className="hover:border-teal-primary relative flex flex-wrap rounded border border-transparent bg-white shadow-md">
      <div className="relative">
        <div className="absolute left-1 top-0">
          <i className="ico-discount-label"></i>
          <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
            15%
          </span>
        </div>
        <div className="absolute right-1 top-1 cursor-pointer">
          <i className="ico-award-female-daily"></i>
        </div>
        <Image
          src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
          alt="store info"
          width={119}
          height={119}
          className="rounded-l"
        />
        <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
          <i className="ico-star"></i>
          <span className="text-gray-20 ml-1 mr-1 text-sm">4.5</span>
          <i className="ico-trusted-fd"></i>
        </div>
      </div>
      <div className="flex w-[50%] flex-col py-2.5 pl-5">
        <strong className="text-xs font-bold">Brand Name</strong>
        <strong className="text-black-olive mt-1 text-xs font-normal tracking-wider">
          Maybelline Superstay Matte
        </strong>
        <div className="mt-1 flex items-center space-x-3">
          <span className="text-xs font-semibold tracking-wider">Rp99.000</span>
          <span className="text-black-light text-10 tracking-wider line-through">
            Rp120.000
          </span>
        </div>
      </div>
      <div className="flex items-end py-5">
        <div className="border-platinum w-[227px] cursor-pointer rounded border p-2.5 text-center font-semibold">
          + Add to Cart
        </div>
      </div>
    </div>
  );
};

export default CardProductListView;
