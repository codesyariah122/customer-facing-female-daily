/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @license Proprietary
 * @package utils/helpers/range
 */

/**
 * get a range of numbers, ex: get range when pagination
 * @param min - start of number
 * @param max - end of number
 * @returns {number[]} - array of number from min into max
 */
export const range = (min: number, max: number): number[] => {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
};
