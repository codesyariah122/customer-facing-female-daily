import React from 'react';
import { ISkeletonLoading } from './ISkeletons';
import clsx from 'clsx';

function PaymentPage({ isLoading = true }: ISkeletonLoading) {
  return (
    <div className="w-3/4 pl-8">
      <div className="">
        <div
          className={clsx('rounded-md bg-gray-400/40', {
            'relative my-2 h-8 w-3/12 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
              isLoading,
          })}
        />
        <div className="border-gray-light h-98 mt-5 rounded-2xl border p-10">
          <div>
            <div className="space-y-6">
              <div>
                <div
                  className={clsx('rounded-md bg-gray-400/40', {
                    'relative my-2 h-8 w-6/12 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
                      isLoading,
                  })}
                />
                <div
                  className={clsx('rounded-md bg-gray-400/40', {
                    'relative my-2 h-6 w-9/12 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
                      isLoading,
                  })}
                />
              </div>
              <div>
                <details open={true} className="group duration-300">
                  <summary className="flex cursor-pointer items-center justify-between border-b-2 pb-6">
                    <div
                      className={clsx('rounded-md bg-gray-400/40', {
                        'relative my-2 h-6 w-3/12 overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
                          isLoading,
                      })}
                    />
                  </summary>
                  <div className="mt-4 grid grid-cols-2 gap-8">
                    <div
                      className={clsx('rounded-2xl bg-gray-400/40', {
                        'relative my-2 h-36 w-full overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
                          isLoading,
                      })}
                    />
                    <div
                      className={clsx('rounded-2xl bg-gray-400/40', {
                        'relative my-2 h-36 w-full overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
                          isLoading,
                      })}
                    />
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
