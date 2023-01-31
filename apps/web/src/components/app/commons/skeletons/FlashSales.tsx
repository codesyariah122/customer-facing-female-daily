import React from 'react';
import clsx from 'clsx';
import { ISkeletonLoading } from './ISkeletons';

function FlashSales({ isLoading = true }: ISkeletonLoading) {
  return (
    <div
      className={clsx('bg-white px-6', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
          isLoading,
      })}
    >
      <div className="flex">
        <div className="h-20 w-full rounded-tl-md rounded-tr-md bg-gray-400/40" />
      </div>
      <div className="mb-4 flex space-x-4 bg-gray-100 p-4">
        <div className="h-80 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-80 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-80 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-80 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-80 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-80 w-1/6 rounded-md bg-gray-400/40" />
      </div>
    </div>
  );
}

export default FlashSales;
