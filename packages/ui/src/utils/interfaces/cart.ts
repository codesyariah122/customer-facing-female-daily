/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import { ProductInterface } from './product';

/**
 * Interface CartProductInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @todos  <This interface need to readjust several times based on development progress>
 */
export interface CartProductInterface {
  product?: ProductInterface;
  quantity?: number;
  installation_applied?: boolean;
  installation?: any;
}
