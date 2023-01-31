import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';

const ContentRecipe = () => {
  return (
    <div className="container mx-auto mt-5 xl:max-w-screen-lg">
      <div className="my-4 space-y-4">
        <Image
          src="https://media-fd-stg.setoko-test.com/images/b519d376-758d-4f27-b926-2e77b36900f6.jpg"
          width={934}
          height={280}
          alt="article"
          className="h-[280px] w-full object-cover"
        />
        <div className="space-y-4">
          <h2 className="text-22 font-semibold">Big ideas for small spaces</h2>
          <div className="space-x-2 text-sm">
            <span className="space-x-2">
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                living
              </span>
            </span>
            <span className="text-black-light space-x-2">
              <span>12 Feb 2021</span>
              <span>|</span>
              <span>2 min read</span>
            </span>
          </div>
          <div className="border-b py-4">
            <Tab.Group>
              <Tab.List className="border-gray-light flex flex w-full gap-x-8 border-b pb-4">
                <Tab as={Fragment}>
                  {({ selected }: { selected: any }) => (
                    <div
                      className={`relative flex cursor-pointer px-12 ${
                        selected
                          ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:-bottom-4 after:h-1 after:w-full after:rounded-full'
                          : ''
                      }`}
                    >
                      <span
                        className={`text-sm tracking-wider ${
                          selected ? 'text-teal-primary' : 'text-black-light'
                        }`}
                      >
                        Ingredients
                      </span>
                    </div>
                  )}
                </Tab>
                <Tab as={Fragment}>
                  {({ selected }: { selected: any }) => (
                    <div
                      className={`relative flex cursor-pointer px-12 ${
                        selected
                          ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:-bottom-4 after:h-1 after:w-full after:rounded-full'
                          : ''
                      }`}
                    >
                      <span
                        className={`text-sm tracking-wider ${
                          selected ? 'text-teal-primary' : 'text-black-light'
                        }`}
                      >
                        How to Cook
                      </span>
                    </div>
                  )}
                </Tab>
              </Tab.List>
              <Tab.Panels>
                <Tab.Panel>
                  <div className="mt-6 px-5 text-sm">
                    <ul className="list-disc space-y-2">
                      <li>Extra Virgin Olive Oil</li>
                      <li>Extra Virgin Olive Oil</li>
                      <li>Extra Virgin Olive Oil</li>
                      <li>Extra Virgin Olive Oil</li>
                      <li>Extra Virgin Olive Oil</li>
                      <li>Extra Virgin Olive Oil</li>
                      <li>Extra Virgin Olive Oil</li>
                      <li>Extra Virgin Olive Oil</li>
                      <li>Extra Virgin Olive Oil</li>
                    </ul>
                  </div>
                </Tab.Panel>
                <Tab.Panel>
                  <div className="mt-6 text-sm">
                    <p>
                      Got a teeny room, an empty corner, or a bare wall? That’s
                      a prime spot for a cozy nook or a little vignette. Whether
                      you turn yours into a book-filled retreat, an intimate
                      dining alcove, or a snug seating area, a “room within a
                      room” feels instantly inviting. And as these ­Airbnbs
                      show, it’s not hard to pull off — all you need are some
                      smart styling strategies.
                    </p>
                  </div>
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
          <div>
            <span className="space-x-2 text-xs">
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                Furniture
              </span>
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                Lifestyle
              </span>
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                Interior
              </span>
              <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
                Home
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContentRecipe;
