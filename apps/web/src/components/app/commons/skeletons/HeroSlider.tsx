import React from 'react';
import clsx from 'clsx';
import { ISkeletonLoading } from './ISkeletons';

function HeroSlider({ isLoading = true }: ISkeletonLoading) {
  return (
    <div
      className={clsx('bg-white', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
          isLoading,
      })}
    >
      <div className="mb-4 flex">
        <div className="h-60 w-1/6 rounded-tr-lg rounded-br-lg bg-gray-400/40" />
        <div className="mx-4 h-60 w-4/6 rounded-md bg-gray-400/40" />
        <div className="h-60 w-1/6 rounded-tl-lg rounded-bl-lg bg-gray-400/40" />
      </div>
      <div className="flex justify-center">
        <div className="mx-4 h-8 w-1/6 rounded-xl bg-gray-400/40" />
      </div>
    </div>
  );
}

export default HeroSlider;
