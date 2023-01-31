import { Menu } from '@headlessui/react';
import Link from 'next/link';
const Minicart = () => {
  return (
    <Menu as="div" className="relative">
      <Menu.Button as="div" className="cursor-pointer">
        <i className="ico-cart"></i>
        <div className="absolute -top-1 -right-1">
          <div className="bg-yellow-counter border-orange-counter flex h-5 w-5 items-center justify-center rounded-full border text-[8px] font-medium">
            99+
          </div>
        </div>
      </Menu.Button>
      <Menu.Items
        as="section"
        className="w-440 border-gray-10 absolute right-0 top-[62px] z-10 rounded border bg-white shadow-lg shadow-md focus:outline-none"
      >
        <div className="flex w-full flex-col p-5">
          <div className="border-gray-light mb-5 flex border-b pb-6 last:mb-0 last:border-0 last:pb-0">
            <div className="flex w-[54px]">
              <img
                src="/images/image-product-mini.jpg"
                className="h-[54px] w-[54px] object-cover"
              />
            </div>
            <div className="ml-4 flex w-[230px] flex-col">
              <div className="text-sm font-semibold">
                Exclusive Canomy Home Humidifier
              </div>
              <div className="text-gray-20 mt-2 text-xs tracking-wider">
                270 Yellow Red, 42.5
              </div>
              <div className="mt-2">
                <div className="bg-black-light inline-flex items-center rounded py-1 px-3 text-white">
                  <i className="ico-eve-clock"></i>
                  <span className="ml-2 flex pt-[1px] text-[10px]">
                    Preorder Time :{' '}
                    <strong className="ml-1 font-semibold">5 Days</strong>
                  </span>
                </div>
              </div>
              <div className="mt-2 flex flex-wrap items-center">
                <div className="bg-yellow-discount rounded py-[2px] px-[7px] text-[10px] font-semibold tracking-wider">
                  10%
                </div>
                <div className="text-gray-20 ml-2 text-xs font-medium tracking-wider line-through">
                  Rp1.500.000
                </div>
                <div className="ml-2 text-sm font-semibold tracking-wider">
                  Rp1.100.000
                </div>
              </div>
            </div>
            <div className="ml-4 flex flex-col justify-between">
              <div className="flex justify-end text-sm tracking-wider">
                Quantity: 1
              </div>
              <div className="mb-1 flex cursor-pointer justify-end">
                <i className="ico-trash"></i>
              </div>
            </div>
          </div>

          <div className="border-gray-light mb-5 flex border-b pb-6 last:mb-0 last:border-0 last:pb-0">
            <div className="flex w-[54px]">
              <img
                src="/images/image-product-mini.jpg"
                className="h-[54px] w-[54px] object-cover"
              />
            </div>
            <div className="ml-4 flex w-[230px] flex-col">
              <div className="text-sm font-semibold">
                Sunpride Highland Cavendish Banana
              </div>
              <div className="text-gray-20 mt-2 text-xs tracking-wider">
                270 Yellow Red, 42.5
              </div>
              <div className="mt-2 flex flex-wrap items-center">
                <div className="text-sm font-semibold tracking-wider">
                  Rp1.100.000
                </div>
              </div>
            </div>
            <div className="ml-4 flex flex-col justify-between">
              <div className="flex justify-end text-sm tracking-wider">
                Quantity: 1
              </div>
              <div className="mb-1 flex cursor-pointer justify-end">
                <i className="ico-trash"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-10 flex items-center justify-between p-5 shadow-md">
          <div>
            Total (12): <strong className="font-semibold">Rp3.000.000</strong>
          </div>
          <Link href="/" className="text-pink-primary font-semibold">
            View All Items
          </Link>
        </div>

        {/* <div className="flex flex-col justify-center p-5 text-center mx-auto">
          <img src="/images/empty-minicart.svg" className="w-40 mx-auto" />
          <div className="font-medium tracking-wider mt-2 flex justify-center">
            It's never too late to start adding stuff to your cart :)
          </div>
        </div> */}
      </Menu.Items>
    </Menu>
  );
};

export default Minicart;
