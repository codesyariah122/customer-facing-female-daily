import React from 'react';

export const SkeletonLoadingMyOrderCard = () => {
  return (
    <div className="my-4 divide-y  rounded-xl bg-white p-4 opacity-60 drop-shadow">
      <div className="flex space-x-4 pb-4">
        <i className="skeleton h-[30px] w-[30px] rounded-lg" />
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-4">
            <i className="skeleton h-4 w-[4rem] rounded" />
            <i className="skeleton h-4 w-[4rem] rounded" />
            <i className="skeleton h-4 w-[4rem] rounded" />
          </div>
          <div>
            <i className="skeleton h-4 w-[4rem] rounded" />
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="flex space-x-4">
          <i className="skeleton h-[60px] w-[60px] rounded-lg" />
          <div className="flex flex-1 space-x-8">
            <i className="skeleton h-4 w-full rounded" />
            <i className="skeleton h-4 w-full rounded" />
            <i className="skeleton h-4 w-full rounded" />
          </div>
        </div>
        <i className="skeleton h-2 w-[4rem] rounded" />
        <div className="flex justify-end space-x-4">
          <i className="skeleton h-12 w-24 rounded" />
          <i className="skeleton h-12 w-24 rounded" />
        </div>
      </div>
    </div>
  );
};
