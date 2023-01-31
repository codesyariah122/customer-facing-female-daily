'use client';
import { HeroSlider, List, Side } from '@components/app/store';
import { ProductsList } from '../products';
import { CustomerAddToCart, GuestAddToCart } from '@utils/commons/cartHelper';
import { useRouter } from 'next/navigation';
import { GetCustomerUUID, GetTokenJwt } from '@utils/commons/customerHelper';

/**
 * StorePage component <show StorePage component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */
/**
 * FIXME: props still using any
 */
const CustomerGuestId = GetCustomerUUID();
const StorePage = (props: any): React.ReactElement => {
  const router = useRouter();
  const redirectAction = (
    event: any,
    itemName: string,
    itemCode: string
  ): void => {
    router.push(`${window.location.host}/product/${itemName}-${itemCode}`);
  };
  const AddToCartAction = (event: any, item: any): void => {
    const isValid = (): boolean => {
      if (item?.product && 'isVariance' in item.product) {
        if (item.product.isVariance) {
          return true;
        }

        if (item.product.isVariance === false) {
          return true;
        }
      }
      return false;
    };
    if (isValid()) {
      const token = GetTokenJwt();
      if (token !== undefined) {
        CustomerAddToCart(item.product.code, 1);
      } else {
        GuestAddToCart(CustomerGuestId, item.product.code, 1);
      }
    }
  };
  return (
    <main>
      <HeroSlider dataBanner={props.dataStore[0].banner} />
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="mt-7 flex">
          <Side
            dataStoreSide={props.dataStore}
            changeHandler={props.inputFilterHandler}
          />
          <section className="flex-1 pl-5">
            <ProductsList
              productsSources={props.dataProducts}
              paginationTotalCount={props.paginationTotalCount}
              paginationPageSize={props.paginationCurrentSize}
              paginationOnPageChange={props.paginationOnPageChange}
              paginationCurrentPage={props.paginationCurrentPage}
              paginationSiblingCount={1}
              addToCartHandler={AddToCartAction}
              redirectHandler={redirectAction}
              toolbarSortSelectName={props.toolbarSortSelectName}
              toolbarSortSelectValue={props.toolbarSortSelectValue}
              toolbarSortSelectChangeHandler={
                props.toolbarSortSelectChangeHandler
              }
              toolbarIsGridLayout={props.toolbarIsGridLayout}
              toolbarIsListLayout={props.toolbarIsListLayout}
              toolbarLayoutClickHandler={props.toolbarLayoutClickHandler}
            />
          </section>
        </div>
      </div>
    </main>
  );
};

export default StorePage;
