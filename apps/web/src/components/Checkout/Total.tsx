import { Disclosure } from '@headlessui/react';

const Total = () => {
  return (
    <div className="my-2 grid w-full border-t py-2">
      <Disclosure>
        <Disclosure.Button className="flex w-full items-center py-2 pl-8">
          <div className="flex w-full">
            <div>Subtotal</div>
            <div className="mx-2 text-gray-500">1 Item</div>
          </div>
          <div className="text-lg font-semibold">Rp3.700.000</div>
          <div className="flex items-center justify-between">
            <i className="ico-arrow-down-grey mx-2"></i>
          </div>
        </Disclosure.Button>
        <Disclosure.Panel className="w-full px-8 leading-7">
          <div className="flex justify-between leading-7">
            <span className="text-gray-500">Price (2 Item)</span>
            <span className="">Rp2.300.000</span>
          </div>
          <div className="flex justify-between leading-7">
            <span className="text-gray-500">Delivery Fee</span>
            <span className="">Rp1.395.000</span>
          </div>
          <div className="flex justify-between leading-7">
            <span className="text-gray-500">Delivery Insurance Fee</span>
            <span className="">Rp5000</span>
          </div>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  );
};

export default Total;
