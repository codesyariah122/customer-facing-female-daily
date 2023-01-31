import Link from 'next/link';

const ShopByCategories = () => {
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="text-22 font-semibold">Shop by Categories</div>
        <Link href="/">
          <span className="text-pink-primary font-semibold">See all</span>
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="border-orchid-pink flex h-20 w-20 items-center justify-center rounded-full border">
            <img src="/images/ico-skincare.svg" alt="" />
          </div>
          <span className="mt-3 text-center text-xs tracking-wider">
            Skincare
          </span>
        </div>
        <div className="flex flex-col">
          <div className="border-orchid-pink flex h-20 w-20 items-center justify-center rounded-full border">
            <img src="/images/ico-skincare.svg" alt="" />
          </div>
          <span className="mt-3 text-center text-xs tracking-wider">
            Skincare
          </span>
        </div>
        <div className="flex flex-col">
          <div className="border-orchid-pink flex h-20 w-20 items-center justify-center rounded-full border">
            <img src="/images/ico-skincare.svg" alt="" />
          </div>
          <span className="mt-3 text-center text-xs tracking-wider">
            Skincare
          </span>
        </div>
        <div className="flex flex-col">
          <div className="border-orchid-pink flex h-20 w-20 items-center justify-center rounded-full border">
            <img src="/images/ico-skincare.svg" alt="" />
          </div>
          <span className="mt-3 text-center text-xs tracking-wider">
            Skincare
          </span>
        </div>
        <div className="flex flex-col">
          <div className="border-orchid-pink flex h-20 w-20 items-center justify-center rounded-full border">
            <img src="/images/ico-skincare.svg" alt="" />
          </div>
          <span className="mt-3 text-center text-xs tracking-wider">
            Skincare
          </span>
        </div>
        <div className="flex flex-col">
          <div className="border-orchid-pink flex h-20 w-20 items-center justify-center rounded-full border">
            <img src="/images/ico-skincare.svg" alt="" />
          </div>
          <span className="mt-3 text-center text-xs tracking-wider">
            Skincare
          </span>
        </div>
        <div className="flex flex-col">
          <div className="border-orchid-pink flex h-20 w-20 items-center justify-center rounded-full border">
            <img src="/images/ico-skincare.svg" alt="" />
          </div>
          <span className="mt-3 text-center text-xs tracking-wider">
            Skincare
          </span>
        </div>
        <div className="flex flex-col">
          <div className="border-orchid-pink flex h-20 w-20 items-center justify-center rounded-full border">
            <img src="/images/ico-skincare.svg" alt="" />
          </div>
          <span className="mt-3 text-center text-xs tracking-wider">
            Skincare
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
