import React from 'react';
import clsx from 'clsx';
import { ISkeletonLoading } from './ISkeletons';

function ShopByCategories({ isLoading = true }: ISkeletonLoading) {
  return (
    <div
      className={clsx('bg-white px-6', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
          isLoading,
      })}
    >
      <div className="mb-4 flex justify-between">
        <div className="ml-6 h-8 w-1/6 rounded-xl bg-gray-400/40" />
        <div className="mr-6 h-8 w-1/6 rounded-xl bg-gray-400/40" />
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="h-40 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-40 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-40 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-40 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-40 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-40 w-1/6 rounded-md bg-gray-400/40" />
      </div>
    </div>
  );
}

export default ShopByCategories;
