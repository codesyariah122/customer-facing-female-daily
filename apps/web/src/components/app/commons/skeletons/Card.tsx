import clsx from 'clsx';
import { ISkeletonLoading } from './ISkeletons';

function Card({ isLoading = true }: ISkeletonLoading) {
  return (
    <div
      className={clsx('h-[250px] rounded-md bg-gray-400/40 p-4', {
        'relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white before:to-transparent':
          isLoading,
      })}
    ></div>
  );
}

export default Card;
