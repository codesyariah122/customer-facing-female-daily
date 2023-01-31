import React from 'react';
import clsx from 'clsx';
import { ISkeletonLoading } from './ISkeletons';

function UserLogin({ isLoading = true }: ISkeletonLoading) {
  return (
    <div
      className={clsx('bg-white', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
          isLoading,
      })}
    >
      <div className="mr-4 flex justify-center space-x-4">
        <div className="h-10 w-10 rounded-full bg-gray-400/40" />
        <div className="mr-10 h-10 w-10 rounded-full bg-gray-400/40" />
      </div>
    </div>
  );
}

export default UserLogin;
