/**
 * Pagination libs based on
 * https://www.freecodecamp.org/news/build-a-custom-pagination-component-in-react/
 * https://github.com/mayankshubham/react-pagination/tree/master/src
 */
import { useMemo } from 'react';
import { IProductsPaginationUtil } from '.';

/**
 * Show dots character on pagination
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @var    string
 */
export const DOTS: string = '...';

/**
 * Show pagination range
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {number} start <input start of pagination page>
 * @param   {number} end <input end of pagination page>
 * @returns {Array}
 */
const range = (start: number, end: number): any[] => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

/**
 * Pagination library <generate pagination content>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {IProductsPaginationUtil} props <input props based on IProductsPaginationUtil interface>
 * @returns {any[] | undefined}
 */
export function ProductsPagination(
  props: IProductsPaginationUtil
): any[] | undefined {
  const paginationRange = useMemo(() => {
    // Init props value
    const totalCount: number = props.totalCount ? props.totalCount : 0;
    const pageSize: number = props.pageSize ? props.pageSize : 0;
    const siblingCount: number = props.siblingCount ? props.siblingCount : 1;
    const currentPage: number = props.currentPage ? props.currentPage : 0;

    const totalPageCount = Math.ceil(totalCount / pageSize);
    // Pages count is determined as siblingCount + (firstPage + lastPage + currentPage + 2*DOTS)
    const totalPageNumbers = siblingCount + 5;
    /*
      If the number of pages is less than the page numbers we want to show in our
      paginationComponent, we return the range [1..totalPageCount]
    */
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    /*
      We do not want to show dots if there is only one position left
      after/before the left/right page count as that would lead to a change if our Pagination
      component size which we do not want
    */
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );
    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
    }
  }, [props.totalCount, props.pageSize, props.siblingCount, props.currentPage]);

  return paginationRange;
}
