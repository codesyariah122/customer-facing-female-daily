import clsx from 'clsx';
import React from 'react';
import { ISkeletonLoading } from './ISkeletons';

const Profile = ({ isLoading = true }: ISkeletonLoading) => {
  return (
    <div className="grid grid-cols-3 gap-4 py-24 px-24">
      <div>
        <div
          className={clsx('rounded-md bg-gray-100', {
            'relative w-full overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
              isLoading,
          })}
        >
          <div className="relative py-4 shadow-md">
            <div className="flex justify-center">
              <div className="h-24 w-24 rounded-full bg-gray-400/40" />
            </div>
            <div className="mt-4 flex flex-col justify-center">
              <div className="flex justify-center font-semibold tracking-wider">
                <div className="h-2 w-32 rounded-md bg-gray-400/40" />
              </div>
              <div className="mt-2 flex justify-center text-sm">
                <div className="h-2 w-36 rounded-md bg-gray-400/40" />
              </div>
              <div className="mt-2 flex justify-center">
                <div className="h-6 w-24 rounded-full bg-gray-400/40" />
              </div>
            </div>
            <div className="mt-5 ml-2 flex w-full px-5">
              <div className="flex flex-1 flex-col justify-center pr-4">
                <div className="mx-auto">
                  <div className="h-8 w-8 rounded-full bg-gray-400/40" />
                </div>
                <div className="text-gray-20 text-10 mt-2.5 text-center tracking-wider">
                  <div className="h-1 w-full rounded-md bg-gray-400/40" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center pr-4">
                <div className="mx-auto">
                  <div className="h-8 w-8 rounded-full bg-gray-400/40" />
                </div>
                <div className="text-gray-20 text-10 mt-2.5 text-center tracking-wider">
                  <div className="h-1 w-full rounded-md bg-gray-400/40" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center pr-4">
                <div className="mx-auto">
                  <div className="h-8 w-8 rounded-full bg-gray-400/40" />
                </div>
                <div className="text-gray-20 text-10 mt-2.5 text-center tracking-wider">
                  <div className="h-1 w-full rounded-md bg-gray-400/40" />
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col px-4">
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className={clsx('rounded-md bg-gray-100', {
            'relative w-full overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
              isLoading,
          })}
        >
          <div className="relative py-4 shadow-md">
            <div className="mt-5 ml-2 flex flex-col px-5">
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
            </div>
            <div className="mt-12 flex justify-center">
              <div className="h-24 w-24 rounded-full bg-gray-400/40" />
            </div>
            <div className="mt-4 flex flex-col justify-center">
              <div className="mt-2 flex justify-center">
                <div className="h-12 w-36 rounded-md bg-gray-400/40" />
              </div>
            </div>
            <div className="mt-8 flex flex-col px-4">
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-6 w-full rounded-md bg-gray-400/40" />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div
          className={clsx('rounded-md bg-gray-100', {
            'relative w-full overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
              isLoading,
          })}
        >
          <div className="relative py-4 shadow-md">
            <div className="mt-8 flex flex-col px-4">
              <div className="mt-2 h-12 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-12 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-12 w-full rounded-md bg-gray-400/40" />
              <div className="mt-2 h-12 w-full rounded-md bg-gray-400/40" />
            </div>
            <div className="mt-4 flex flex-col justify-center">
              <div className="mt-2 flex justify-center">
                <div className="h-24 w-full rounded-md bg-gray-400/40" />
              </div>
            </div>
            <div className="mt-2 flex flex-col justify-center">
              <div className="mt-2 flex justify-center">
                <div className="h-12 w-40 rounded-md bg-gray-400/40" />
              </div>
              <div className="mt-2 flex justify-center">
                <div className="h-12 w-40 rounded-md bg-gray-400/40" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
