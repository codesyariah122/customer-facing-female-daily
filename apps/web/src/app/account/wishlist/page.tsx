'use client';
import React from 'react';
import { useAccounts } from '@hooks/useAccounts';
import { Wishlist } from '@components/app/account/wishlist';
import Skeleton from '@components/app/account/wishlist/Skeleton';

/**
 * wishlist page
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
const WishlistPage = (): React.ReactElement => {
  const {
    data: dataWishlist,
    status: statusWishlist,
    error: errorStore,
  } = useAccounts();
  return (
    <>
      {statusWishlist === 'loading' ? (
        <>
          <Skeleton />
        </>
      ) : (
        <>
          <Wishlist
            dataWishlist={dataWishlist.favorites}
            dataMyList={dataWishlist.wish_lists}
          />
        </>
      )}
    </>
  );
};

export default WishlistPage;
