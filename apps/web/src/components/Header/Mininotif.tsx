import { Menu } from '@headlessui/react';
import Link from 'next/link';
const Mininotif = () => {
  return (
    <Menu as="div" className="relative mr-12">
      <Menu.Button as="div" className="cursor-pointer">
        <i className="ico-notif"></i>
        <div className="absolute -top-1 -right-1">
          <div className="bg-yellow-counter border-orange-counter flex h-5 w-5 items-center justify-center rounded-full border text-[8px] font-medium">
            36
          </div>
        </div>
      </Menu.Button>
      <Menu.Items
        as="section"
        className="w-440 border-gray-10 absolute right-0 top-[62px] z-10 rounded border bg-white shadow-lg shadow-md focus:outline-none"
      >
        <div className="flex p-2">
          <div className="border-gray-light flex flex w-full justify-center border-b pb-3">
            <div
              className="after:pseudo-content-comma after:bg-pink-primary relative flex w-1/2 cursor-pointer 
            items-center justify-center after:absolute after:left-0 after:-bottom-3 after:h-1 after:w-full"
            >
              <span className="text-black-light tracking-wider">
                Transactions
              </span>
              <span className="bg-venetian-red text-10 ml-1 rounded py-[2px] px-[7px] font-medium text-white">
                38
              </span>
            </div>
            <div className="relative flex w-1/2 cursor-pointer items-center justify-center">
              <span className="text-black-light tracking-wider">Updates</span>
              <span className="bg-venetian-red text-10 ml-1 rounded py-[2px] px-[7px] font-medium text-white">
                5
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-2">
          <div className="bg-teal-lighter border-gray-light mb-4 flex border-b p-5 pb-4 last:mb-0 last:border-0 last:pb-0">
            <div className="w-[54px] shrink">
              <img
                src="/images/image-product-mini.jpg"
                className="border-gray-30 w-full rounded border shadow-md"
              />
            </div>
            <div className="ml-3 flex flex-1 flex-col">
              <div className="text-sm tracking-wider">
                Have you received your order?
              </div>
              <div className="mt-2 text-xs tracking-wider">
                Make sure that order 21049580W6VHOMG has been delivered
                completely without any problem/defect. Otherwise, you can
                request to return your order.
              </div>
              <div className="text-black-light text-10 mt-2">
                26 Feb 2021, 10:13
              </div>
            </div>
          </div>
          <div className="border-gray-light mb-4 flex border-b p-5 pb-4 last:mb-0 last:border-0 last:pb-0">
            <div className="w-[54px] shrink">
              <img
                src="/images/image-product-mini.jpg"
                className="border-gray-30 w-full rounded border shadow-md"
              />
            </div>
            <div className="ml-3 flex flex-1 flex-col">
              <div className="text-sm tracking-wider">
                It’s time to review your order!
              </div>
              <div className="mt-2 text-xs tracking-wider">
                Order 21049580W6VHOMG has been completed. Help others to
                consider this product by giving review.
              </div>
              <div className="text-black-light text-10 mt-2">
                26 Feb 2021, 10:13
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-10 flex items-center justify-between p-5 shadow-md">
          <div>Mark all as read</div>
          <Link href="/">View All</Link>
        </div>
      </Menu.Items>
    </Menu>
  );
};

export default Mininotif;
