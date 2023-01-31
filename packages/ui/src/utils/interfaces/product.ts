/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import { CartProductInterface } from './cart';

/**
 * Interface ProductAttrcoloributesInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ProductAttributeInterface {
  name: string;
  value: string | number | boolean | null;
}

/**
 * Interface ProductAddToCartButtonInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ProductAddToCartButtonInterface {
  className?: string;
  addToCartText?: string;
  item?: CartProductInterface;
  clickHandler: (event: React.FormEvent<HTMLButtonElement>, item: any) => void;
  redirectHandler: (
    event: React.FormEvent<HTMLButtonElement>,
    itemName: string | undefined,
    itemCode: string | undefined
  ) => void;
}

/**
 * Interface ProductMediaInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ProductMediaInterface {
  url?: string;
  kind?: string;
  filename?: string;
}

/**
 * Interface ProductPriceInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
export interface ProductPriceInterface {
  originalPrice?: number;
  promoPrice?: number;
}

/**
 * Interface ProductInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @todos  <This interface need to readjust several times based on development progress>
 */
export interface ProductInterface {
  code?: string;
  name?: string;
  price?: ProductPriceInterface;
  medias?: ProductMediaInterface;
  isVariance?: boolean;
  url_key?: string;
}
