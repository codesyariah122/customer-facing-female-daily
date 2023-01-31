/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import { ConfigUi } from './config';

/**
 * Truncate inputed string based string length on config
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {string} inputString <string inputted>
 * @returns {string}
 */
export const truncateString = (inputString: string): string => {
  if (inputString.length > ConfigUi.MaxLengthStr) {
    return inputString.substring(0, ConfigUi.MaxLengthStr) + '...';
  }

  return inputString;
};
