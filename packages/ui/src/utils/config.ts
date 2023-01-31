/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */

/**
 * Interface ConfigUiInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface ConfigUiInterface {
  MaxLengthStr: number;
}

/**
 * Config constant for Ui package based on ConfigUiInterface interface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export const ConfigUi: ConfigUiInterface = {
  MaxLengthStr: 100,
};
