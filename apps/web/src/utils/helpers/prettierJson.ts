/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @license Proprietary
 * @package utils/helpers
 */

export const prettierJson = (data: Object | undefined | any) => {
  return JSON.stringify(data, null, 2);
};
