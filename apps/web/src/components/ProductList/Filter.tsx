import { Disclosure } from '@headlessui/react';
import { useState } from 'react';
import ModalLocation from './ModalLocation';

const ratingList = [
  {
    id: 1,
    active: true,
  },
  {
    id: 2,
    active: false,
  },
  {
    id: 3,
    active: false,
  },
  {
    id: 4,
    active: false,
  },
  {
    id: 5,
    active: false,
  },
];

const category = [
  {
    id: 1,
    name: 'Body',
    child: [
      {
        id: 2,
        name: 'Body Moisturizer',
        child: [],
      },
      {
        id: 3,
        name: 'Bath & Shower',
        child: [
          {
            id: 31,
            name: 'Bath Treatment',
            child: [],
          },
          {
            id: 32,
            name: 'Scrub & Exfoliator',
            child: [],
          },
          {
            id: 33,
            name: 'Body Wash',
            child: [],
          },
        ],
      },
      {
        id: 4,
        name: 'Personal Care',
        child: [
          {
            id: 41,
            name: 'Deodorant',
            child: [],
          },
          {
            id: 42,
            name: 'Hair Removal',
            child: [],
          },
          {
            id: 43,
            name: 'Intimate Care',
            child: [],
          },
        ],
      },
      {
        id: 5,
        name: 'Fragrance',
        child: [],
      },
      {
        id: 6,
        name: 'Hair',
        child: [],
      },
    ],
  },
];

const Filter = () => {
  const [openLocationModal, setOpenLocationModal] = useState<Boolean>(false);
  const handleClickLocation = () => {
    setOpenLocationModal(true);
  };
  const handlePropsLocation = (value: Boolean): void => {
    setOpenLocationModal(value);
  };
  return (
    <div className="w-[323px]">
      <div className="border-gray-10 w-full rounded border shadow-md ">
        <div className="text-22 border-ghost-white2 border-b-[14px] px-5 pt-6 pb-3 font-semibold tracking-wider">
          Filter
        </div>
        <div className="mt-5 mb-5 space-y-5">
          <Disclosure as="div" className="px-5">
            {({ open }: { open: Boolean }) => (
              <>
                <Disclosure.Button className="flex w-full items-center justify-between">
                  <div className="font-semibold tracking-wider">Categories</div>
                  <i
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } ico-arrow-down-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="category-filter relative mt-5">
                    {category.map((item) => {
                      return (
                        <Disclosure
                          as="div"
                          className="flex flex-col space-y-4"
                          key={`cat-${item.id}`}
                        >
                          <Disclosure.Button className="flex w-full">
                            <div className="flex w-full items-center justify-between">
                              <label
                                htmlFor={`cat-${item.id}`}
                                className="flex cursor-pointer items-center"
                              >
                                <input
                                  type="checkbox"
                                  id={`cat-${item.id}`}
                                  name={`cat-${item.id}`}
                                  defaultValue={`cat-${item.id}`}
                                  className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                                />
                                <div className="mr-5 cursor-pointer">
                                  <i className="ico-check" />
                                  <i className="ico-uncheck" />
                                </div>
                                <div className="flex flex-1 items-center justify-between text-sm tracking-wider">
                                  <span>{item.name}</span>
                                </div>
                              </label>
                              {item.child.length > 0 && (
                                <div className="cursor-pointer">
                                  <i className="ico-polygon-down-grey" />
                                </div>
                              )}
                            </div>
                          </Disclosure.Button>
                          <Disclosure.Panel>
                            <div className="flex flex-col space-y-4 ">
                              {item.child.map((item2) => {
                                return (
                                  <Disclosure
                                    as="div"
                                    className="pl-4"
                                    key={`cat-${item2.id}`}
                                  >
                                    <Disclosure.Button className="flex w-full">
                                      <div className="flex w-full items-center justify-between">
                                        <label
                                          htmlFor={`cat-${item2.id}`}
                                          className="flex cursor-pointer items-center"
                                        >
                                          <input
                                            type="checkbox"
                                            id={`cat-${item2.id}`}
                                            name={`cat-${item2.id}`}
                                            defaultValue={`cat-${item2.id}`}
                                            className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                                          />
                                          <div className="relative -left-4 mr-5 cursor-pointer">
                                            <i className="ico-check" />
                                            <i className="ico-uncheck" />
                                          </div>
                                          <div className="flex flex-1 items-center justify-between text-sm tracking-wider">
                                            <span className="ml-4">
                                              {item2.name}
                                            </span>
                                          </div>
                                        </label>
                                        {item2.child.length > 0 && (
                                          <div className="cursor-pointer">
                                            <i className="ico-polygon-down-grey" />
                                          </div>
                                        )}
                                      </div>
                                    </Disclosure.Button>
                                    <Disclosure.Panel>
                                      <div className="flex flex-col space-y-4">
                                        {item2.child.map((item3) => {
                                          return (
                                            <Disclosure
                                              as="div"
                                              className="pl-4"
                                              key={`cat-${item3.id}`}
                                            >
                                              <Disclosure.Button className="flex w-full">
                                                <div className="flex w-full items-center justify-between">
                                                  <label
                                                    htmlFor={`cat-${item3.id}`}
                                                    className="flex cursor-pointer items-center"
                                                  >
                                                    <input
                                                      type="checkbox"
                                                      id={`cat-${item3.id}`}
                                                      name={`cat-${item3.id}`}
                                                      defaultValue={`cat-${item3.id}`}
                                                      className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                                                    />
                                                    <div className="relative -left-8 mr-5 cursor-pointer">
                                                      <i className="ico-check" />
                                                      <i className="ico-uncheck" />
                                                    </div>
                                                    <div className="flex flex-1 items-center justify-between text-sm tracking-wider">
                                                      <span>{item3.name}</span>
                                                    </div>
                                                  </label>
                                                </div>
                                              </Disclosure.Button>
                                            </Disclosure>
                                          );
                                        })}
                                      </div>
                                    </Disclosure.Panel>
                                  </Disclosure>
                                );
                              })}
                            </div>
                          </Disclosure.Panel>
                        </Disclosure>
                      );
                    })}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="px-5">
            {({ open }: { open: Boolean }) => (
              <div className="border-flash-white border-t pt-3.5">
                <Disclosure.Button className="flex w-full items-center justify-between">
                  <div className="font-semibold tracking-wider">
                    Price Range
                  </div>
                  <i
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } ico-arrow-down-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="mt-4 flex flex-col gap-y-4">
                    <div className="border-american-silver flex rounded-lg border">
                      <div className="bg-gray-light text-black-olive border-american-silver h-12 w-12 flex-none items-center justify-center rounded-l-lg border-r text-sm">
                        <div className="flex h-full w-full items-center justify-center">
                          Rp
                        </div>
                      </div>
                      <div className="h-12 grow">
                        <input
                          type="text"
                          placeholder="Minimum price"
                          className="h-full w-full rounded-r-lg px-3 text-sm focus:outline-none"
                        />
                      </div>
                    </div>
                    <div className="border-american-silver flex rounded-lg border">
                      <div className="bg-gray-light text-black-olive border-american-silver h-12 w-12 flex-none items-center justify-center rounded-l-lg border-r text-sm">
                        <div className="flex h-full w-full items-center justify-center">
                          Rp
                        </div>
                      </div>
                      <div className="h-12 grow">
                        <input
                          type="text"
                          placeholder="Maximum price"
                          className="h-full w-full rounded-r-lg px-3 text-sm focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure as="div" className="px-5">
            {({ open }: { open: Boolean }) => (
              <div className="border-flash-white border-t pt-3.5">
                <Disclosure.Button className="flex w-full items-center justify-between">
                  <div className="font-semibold tracking-wider">Location</div>
                  <i
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } ico-arrow-down-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="relative mt-5">
                    <div className="flex flex-col space-y-4">
                      <label
                        htmlFor="A1-yes"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A1-yes"
                          name="A1-confirmation"
                          defaultValue="Jabodetabek"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">
                          Jabodetabek
                        </span>
                      </label>
                      <label
                        htmlFor="A2-yes"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A2-yes"
                          name="A2-confirmation"
                          defaultValue="DKI Jakarta"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">
                          DKI Jakarta
                        </span>
                      </label>
                      <label
                        htmlFor="A3-yes"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A3-yes"
                          name="A3-confirmation"
                          defaultValue="Bekasi"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">Bekasi</span>
                      </label>
                      <div
                        className="text-pink-primary cursor-pointer text-xs font-semibold"
                        onClick={handleClickLocation}
                      >
                        See All
                      </div>
                    </div>
                    {openLocationModal && (
                      <ModalLocation
                        modalShow={openLocationModal}
                        clickFunc={handlePropsLocation}
                      />
                    )}
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure as="div" className="px-5">
            {({ open }: { open: Boolean }) => (
              <div className="border-flash-white border-t pt-3.5">
                <Disclosure.Button className="flex w-full items-center justify-between">
                  <div className="font-semibold tracking-wider">
                    Shipping Method
                  </div>
                  <i
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } ico-arrow-down-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="relative mt-5">
                    <div className="flex flex-col space-y-4">
                      <label
                        htmlFor="A1-Instant"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A1-Instant"
                          name="A1-Instant"
                          defaultValue="Instant"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">Instant</span>
                      </label>
                      <label
                        htmlFor="A2-SameDay"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A2-SameDay"
                          name="A2-SameDay"
                          defaultValue="Same Day"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">Same Day</span>
                      </label>
                      <label
                        htmlFor="A3-NextDay"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A3-NextDay"
                          name="A3-NextDay"
                          defaultValue="Next Day"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">Next Day</span>
                      </label>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure as="div" className="px-5">
            {({ open }: { open: Boolean }) => (
              <div className="border-flash-white border-t pt-3.5">
                <Disclosure.Button className="flex w-full items-center justify-between">
                  <div className="font-semibold tracking-wider">Offers</div>
                  <i
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } ico-arrow-down-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="relative mt-5">
                    <div className="flex flex-col space-y-4">
                      <label
                        htmlFor="A1-Cashback"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A1-Cashback"
                          name="A1-Cashback"
                          defaultValue="Cashback"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">Cashback</span>
                      </label>
                      <label
                        htmlFor="A2-FreeDelivery"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A2-FreeDelivery"
                          name="A2-FreeDelivery"
                          defaultValue="Free Delivery"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">
                          Free Delivery
                        </span>
                      </label>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure as="div" className="px-5">
            {({ open }: { open: Boolean }) => (
              <div className="border-flash-white border-t pt-3.5">
                <Disclosure.Button className="flex w-full items-center justify-between">
                  <div className="font-semibold tracking-wider">Rating</div>
                  <i
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } ico-arrow-down-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="relative mt-5 w-4/5">
                    <div className="grid grid-cols-3 gap-4">
                      {ratingList.map((item) => (
                        <div
                          className={`flex h-10 cursor-pointer items-center justify-center space-x-1 rounded-lg border shadow ${
                            item.active
                              ? 'border-teal-primary'
                              : 'border-gray-30'
                          }`}
                          key={item.id}
                        >
                          <i className="ico-star-pink" />
                          <span className="text-sm">{item.id}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>

          <Disclosure as="div" className="px-5">
            {({ open }: { open: Boolean }) => (
              <div className="border-flash-white border-t pt-3.5">
                <Disclosure.Button className="flex w-full items-center justify-between">
                  <div className="font-semibold tracking-wider">Sold by</div>
                  <i
                    className={`${
                      open ? 'rotate-180 transform' : ''
                    } ico-arrow-down-black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel>
                  <div className="relative mt-5">
                    <div className="flex flex-col space-y-4">
                      <label
                        htmlFor="A1-FDStudio"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A1-FDStudio"
                          name="A1-FDStudio"
                          defaultValue="FD Studio"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">
                          FD Studio
                        </span>
                      </label>
                      <label
                        htmlFor="A2-SuperPartners"
                        className="flex cursor-pointer items-center"
                      >
                        <input
                          type="checkbox"
                          id="A2-SuperPartners"
                          name="A2-SuperPartners"
                          defaultValue="Super Partners"
                          className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        />
                        <div className="mr-5 cursor-pointer">
                          <i className="ico-check" />
                          <i className="ico-uncheck" />
                        </div>
                        <span className="text-sm tracking-wider">
                          Super Partners
                        </span>
                      </label>
                    </div>
                  </div>
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Filter;
