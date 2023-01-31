import clsx from 'clsx';
import { ISkeletonLoading } from './ISkeletons';

function BrandWidget({ isLoading = true }: ISkeletonLoading) {
  return (
    <div
      className={clsx('bg-white', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
          isLoading,
      })}
    >
      <div className="mb-4 flex justify-between">
        <div className="h-8 w-1/6 rounded-xl bg-gray-400/40" />
        <div className="h-8 w-1/6 rounded-xl bg-gray-400/40" />
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="h-20 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-20 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-20 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-20 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-20 w-1/6 rounded-md bg-gray-400/40" />
        <div className="h-20 w-1/6 rounded-md bg-gray-400/40" />
      </div>
    </div>
  );
}

export default BrandWidget;