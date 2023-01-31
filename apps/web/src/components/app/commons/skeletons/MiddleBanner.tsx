import React from 'react';
import clsx from 'clsx';
import { ISkeletonLoading } from './ISkeletons';

function MiddleBanner({ isLoading = true }: ISkeletonLoading) {
  return (
    <div
      className={clsx('bg-white', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
          isLoading,
      })}
    >
      <div className="flex">
        <div className="mx-4 h-10 w-1/2 rounded-md bg-gray-400/40" />
        <div className="mx-4 h-10 w-1/2 rounded-md bg-gray-400/40" />
      </div>
    </div>
  );
}

export default MiddleBanner;
