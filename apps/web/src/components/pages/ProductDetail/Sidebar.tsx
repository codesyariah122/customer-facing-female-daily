/**
 * Sidebar component
 */

import { useRouter } from 'next/router';
import Coupon from './Coupon';
import AddToCart from './AddtoCart';
import Image from 'next/image';
import Link from 'next/link';
import { ISidebar } from '@utils/pages/productDetail/productDetailInterface';
// Assets
import ImageBrand from '@assets/images/ico-ios.svg';
import PlaceholderStoreImg from '@assets/images/default-fd-store.svg';
/**
 * Product detail sidebar component
 * @author  Ilma Dinnia Alghani<ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {ISidebar} props <input props based on ISidebar interface>
 * @returns {React.ReactElement}
 */
const Sidebar = (props: ISidebar): React.ReactElement => {
  const router = useRouter();
  return (
    <div className="sm:w-full sm:p-0 xl:w-[22rem] xl:pl-5">
      <div className="h-fit bg-white xl:rounded xl:border-0 xl:drop-shadow-md">
        <div>
          <h2 className="p-4 pb-2">
            <strong>Sold by</strong>
          </h2>
        </div>
        <div className="flex w-full items-center px-4 pb-4">
          <Link href="/">
            {props?.merchant?.profilePicture ? (
              <Image
                src={props?.merchant?.profilePicture?.url}
                alt={props?.merchant?.store}
                className="flex-start mr-2 h-[36px] w-[36px] cursor-pointer rounded-full object-cover"
                width={36}
                height={36}
              />
            ) : (
              <Image
                src={PlaceholderStoreImg}
                alt={props?.merchant?.store || 'store'}
                className="flex-start mr-2 h-[36px] w-[36px] cursor-pointer rounded-full object-cover"
                width={36}
                height={36}
              />
            )}
          </Link>
          <div className="grid w-2/4 leading-4">
            <span className="text-pink-primary text-sm font-semibold leading-4">
              {props?.merchant?.store}
            </span>
            <div className="flex py-2 text-[10px]">
              {/* <i className="ico-star-pink-small"></i>
              <span>4.5</span> */}
              <i className="ico-group mr-2"></i>
              <span> {props?.merchant?.merchantTypeLabel}</span>
            </div>
            <div className="flex py-2 text-[10px]">
              <span className="text-pink-primary">
                {' '}
                {props?.merchant?.merchantFDLabel}
              </span>
            </div>
            {/* <div className="pb-2 text-[10px]">
              <span>Online 30m ago</span>
            </div> */}
            {/* <div className="flex text-[10px]">
              <i className="ico-map" />
              <span className="text-gray-400">Jakarta</span>
            </div> */}
          </div>
          <div
            onClick={() => {
              router.push({
                pathname: '/store/[code]',
                query: { code: props?.merchant?.code },
              });
            }}
            className="bg-pink-primary mb-4 flex w-fit cursor-pointer justify-center rounded py-2 px-4 text-xs font-semibold tracking-wide text-white"
          >
            View Store
          </div>
        </div>
        <div className="flex place-content-around pb-4 text-xs">
          <div className="flex">
            <i className="ico-package" />
            <span className="text-pink-primary px-2">
              {props?.merchant?.productSold}
            </span>
            <span>Products</span>
          </div>
          {/* <div className="flex ">
            <i className="ico-hipchat" />
            <span className="text-pink-primary px-2">90%</span>
            <span>Chat Responded</span>
          </div> */}
        </div>
      </div>
      <div className="fixed bottom-0 z-50 h-fit rounded bg-white drop-shadow-md xl:relative xl:my-8 xl:h-3/4">
        {props.myCoupon !== null ? (
          <div className="hidden xl:block">
            <Coupon myCoupon={props.myCoupon} />
          </div>
        ) : null}
        <hr className="pt-2" />
        <AddToCart
          stock={props.stock}
          finalPrice={props.finalPrice}
          sku={props.sku}
          qty={props.qty}
          handlerUpdateQty={props.handlerUpdateQty}
          handleAddToCart={props.handleAddToCart}
          handleBuyNow={props.handleBuyNow}
          handleAddToWishlit={props.handleAddToWishlit}
          isWishlisted={props.isWishlisted}
          isLoadingWishlist={props.isLoadingWishlist}
        />
      </div>
      <div></div>
    </div>
  );
};

export default Sidebar;
