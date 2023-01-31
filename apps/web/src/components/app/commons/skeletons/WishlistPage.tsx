import React from 'react';
import { ISkeletonLoading } from './ISkeletons';
import { Tab } from '@headlessui/react';
import ProductCard from './ProductCard';
import clsx from 'clsx';

function WishlistPage({ isLoading = true }: ISkeletonLoading) {
  return (
    <div className="w-3/4 pl-8">
      <div
        className={clsx('rounded-md bg-gray-400/40', {
          'relative my-2 h-8 w-36 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
            isLoading,
        })}
      />
      <div className="border-gray-light rounded-2xl border py-7 px-5">
        <Tab.Group>
          <Tab.List className="border-gray-light flex w-full gap-x-8 border-b pb-4">
            <Tab>
              <div className="selected after:pseudo-content-comma after:bg-teal-primary relative flex cursor-pointer px-2 after:absolute after:left-0 after:-bottom-4 after:h-1 after:w-full">
                <div
                  className={clsx('rounded-md bg-gray-400/40', {
                    'relative my-2 h-6 w-24 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
                      isLoading,
                  })}
                />
              </div>
            </Tab>
            <Tab>
              <div className="relative flex cursor-pointer px-2">
                <div
                  className={clsx('rounded-md bg-gray-400/40', {
                    'relative my-2 h-6 w-24 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
                      isLoading,
                  })}
                />
              </div>
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              <div className="flex flex-col py-6">
                <div className="mt-7 grid h-64 grid-cols-4 gap-4">
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                  <ProductCard />
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}

export default WishlistPage;
