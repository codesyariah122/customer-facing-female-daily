/**
 * Pagination component
 */
import React from 'react';
import { IProductsPagination } from '@utils/app/products/index';
import { ProductsPagination as usePagination } from '@utils/app/products/productsPagination';

/**
 * ProductsPagination component <show pagination on products list page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsPagination} props <input props based on IProductsPagination interface>
 * @returns {React.ReactElement}
 */
export function ProductsPagination(
  props: IProductsPagination
): React.ReactElement {
  const paginationRange = usePagination({
    currentPage: props.currentPage,
    totalCount: props.totalCount,
    siblingCount: props.siblingCount,
    pageSize: props.pageSize,
  });

  if (
    props.currentPage === 0 ||
    (paginationRange && paginationRange.length < 2)
  ) {
    return <></>;
  }

  let lastPage = paginationRange
    ? paginationRange[paginationRange.length - 1]
    : 0;
  return (
    <>
      <div className="flex justify-center">
        <div className="border-gray-30 flex rounded border">
          <div
            className="border-gray-30 flex h-12 w-12 rotate-180 cursor-pointer items-center justify-center border-l"
            onClick={(e) => props.onPageChange(e, props.currentPage)}
          >
            <i className="ico-arrow-right-pagination" />
          </div>
          {paginationRange?.map((pageNumber, key) =>
            pageNumber === props.currentPage ? (
              <div
                className="bg-pink-primary flex h-12 w-12 cursor-pointer items-center justify-center font-semibold text-white"
                onClick={(e) => props.onPageChange(e, pageNumber)}
                key={key}
              >
                {pageNumber}
              </div>
            ) : (
              <div
                className="flex h-12 w-12 cursor-pointer items-center justify-center"
                onClick={(e) => props.onPageChange(e, pageNumber)}
                key={key}
              >
                {pageNumber}
              </div>
            )
          )}
          <div
            className="border-gray-30 flex h-12 w-12 cursor-pointer items-center justify-center border-l"
            onClick={(e) => props.onPageChange(e, lastPage)}
          >
            <i className="ico-arrow-right-pagination" />
          </div>
        </div>
      </div>
    </>
  );
}
