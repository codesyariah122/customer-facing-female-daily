import React from 'react';
import clsx from 'clsx';
import { ISkeletonLoading } from './ISkeletons';

function Promotion({ isLoading = true }: ISkeletonLoading) {
  return (
    <div
      className={clsx('rounded-md bg-gray-100 p-4', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
          isLoading,
      })}
    >
      <div className="flex">
        <div className="space-y-3">
          <div className="h-14 rounded-md bg-gray-400/40" />
          <div className="h-3 w-11/12 rounded-md bg-gray-400/40" />
          <div className="h-3 w-8/12 rounded-md bg-gray-400/40" />
        </div>
      </div>
    </div>
  );
}

export default Promotion;
