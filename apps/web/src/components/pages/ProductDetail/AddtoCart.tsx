/**
 * Product detail add to cart component
 */

import { currencyFormat } from '@utils/commons/currencyHelper';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { isFDUserLogin } from '@utils/commons/customerHelper';
import { BASE_URL } from '@constants/env';

type DataAddToCart = {
  stock: number;
  finalPrice: number;
  sku: string;
  qty: number;
  handlerUpdateQty: Function;
  handleAddToCart: Function;
  handleBuyNow: Function;
  handleAddToWishlit: Function;
  isWishlisted: boolean | undefined;
  isLoadingWishlist: boolean | undefined;
};

/**
 * Product detail add to cart component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {stock} number <data stock product>
 * @param   {finalPrice} number <data product final price>
 * @param   {sku} string <data product code/sku>
 * @returns {React.ReactElement}
 */
const AddToCart = ({
  stock,
  finalPrice,
  sku,
  qty,
  handlerUpdateQty,
  handleAddToCart,
  handleBuyNow,
  handleAddToWishlit,
  isWishlisted,
  isLoadingWishlist,
}: DataAddToCart) => {
  const router = useRouter();

  /**
   * Constant isLogin flag
   * @var boolean
   */
  const isLogin: boolean = isFDUserLogin();

  const [currentQty, setCurrentQty] = useState<number>(qty);
  const [addToCart, setAddToCart] = useState<boolean>(false);
  const [buyNow, setBuyNow] = useState<boolean>(false);

  const handleChangeQty = (e: any) => {
    const value = e.target.value;
    setCurrentQty(value);
  };

  const handleQtyPlus = () => {
    const dataQty = qty + 1;
    setCurrentQty(dataQty);
  };

  const handleQtyMin = () => {
    const dataQty = qty - 1;
    dataQty < 1 ? setCurrentQty(1) : setCurrentQty(dataQty);
  };

  useEffect(() => {
    handlerUpdateQty(currentQty);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQty]);

  useEffect(() => {
    if (addToCart == true) {
      handleAddToCart();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addToCart]);

  useEffect(() => {
    if (buyNow == true) {
      handleBuyNow();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [buyNow]);

  return (
    <>
      <div className="flex place-content-between items-center px-6 py-4">
        <div>
          <strong>Stock:</strong>
          <span className="text-pink-primary px-2">{stock}</span>
        </div>
        <span>{currencyFormat(finalPrice)}</span>
      </div>
      <div className="my-4 flex items-center justify-center">
        <span>
          <button onClick={() => handleQtyMin()}>
            <span className="text-pink-primary border-zink-700 mr-2 w-72 cursor-pointer justify-center rounded border-2 bg-white py-2 px-4 font-semibold tracking-wide">
              -
            </span>
          </button>
        </span>
        <input
          value={qty}
          type="number"
          name="qty"
          id="qty"
          min="1"
          onChange={(e) => handleChangeQty(e)}
          className="w-1/4 rounded border p-2 text-center"
          title="Qty"
        />
        <span>
          <button onClick={() => handleQtyPlus()}>
            <span className="bg-pink-primary mx-2 mb-4 cursor-pointer justify-center rounded p-2 py-2 px-4 font-semibold tracking-wide text-white">
              +
            </span>
          </button>
        </span>
      </div>
      <div className="flex flex-row-reverse items-center xl:flex-col">
        <div
          onClick={() => setBuyNow(true)}
          className="bg-pink-primary mx-2 flex w-72 cursor-pointer justify-center py-3 px-4 font-semibold tracking-wide text-white xl:mb-4 xl:rounded"
        >
          Buy Now
        </div>
        <div
          onClick={() => setAddToCart(true)}
          className="text-pink-primary flex cursor-pointer justify-center border-2 border-pink-700 bg-white py-3 px-4 font-semibold tracking-wide xl:w-72 xl:rounded"
        >
          <i className="ico-cart-sidebar" />
          <span className="hidden xl:block">Add to cart</span>
        </div>
      </div>
      <div className="flex place-content-around py-4">
        <span
          onClick={() => {
            router.push({
              pathname: '/download',
            });
          }}
          className="flex cursor-pointer"
        >
          <i className="ico-chat-pdp" />
          Chat
        </span>
        {isLoadingWishlist ? (
          <div>Loading</div>
        ) : isWishlisted ? (
          <span
            onClick={() => handleAddToWishlit(false)}
            className="flex cursor-pointer items-center"
          >
            <i className="ico-heart-red mr-1" />
            Remove Wishlist
          </span>
        ) : (
          <span
            onClick={() => handleAddToWishlit(true)}
            className="flex cursor-pointer"
          >
            <i className="ico-inactive" />
            Add to Wishlist
          </span>
        )}
        <a
          target="blank"
          href={`https://web.whatsapp.com/send?text=${BASE_URL}${router.asPath}`}
          data-action="share/whatsapp/share"
          className="flex cursor-pointer"
        >
          <i className="ico-share" />
          Share
        </a>
      </div>
    </>
  );
};

export default AddToCart;
