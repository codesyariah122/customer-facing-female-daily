import { useState } from 'react';
import Image from 'next/image';
import { Menu } from '@headlessui/react';
import { currencyFormat } from '@utils/commons/currencyHelper';
import { ModalRemove } from '.';
import { ModalAddList } from '.';
import { CustomerAddToCart, GuestAddToCart } from '@utils/commons/cartHelper';
import { GetCustomerUUID, GetTokenJwt } from '@utils/commons/customerHelper';

const CardProduct = ({
  dataProducts,
  dataMyList,
}: {
  dataProducts: any;
  dataMyList: any;
}) => {
  /** get customer id */
  const CustomerGuestId = GetCustomerUUID();
  /** */
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);
  const [openModalRemove, setOpenModalRemove] = useState<boolean | undefined>(
    false
  );
  const closeModalRemove = () => {
    setOpenModalRemove(false);
  };
  const openModalFuncRemove = () => {
    setOpenModalRemove(true);
  };
  const openModalAddList = () => {
    setOpenModal(true);
  };
  const closeModalAddList = () => {
    setOpenModal(false);
  };

  const AddToCartAction = (event: any, item: any): void => {
    const isValid = (): boolean => {
      if (item?.product) {
        if (item.product.children) {
          return true;
        }
        if (!item.product.children) {
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
    <div>
      <div className="hover:border-teal-primary rounded border border-transparent bg-white pb-4 shadow-md">
        <div className="relative">
          {dataProducts.product.flash_sale ? (
            <div className="absolute left-3 top-0">
              <i className="ico-discount-label"></i>
              <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                {dataProducts.product.flash_sale_description.promo_discount}%
              </span>
            </div>
          ) : null}
          <div className="absolute right-3 top-3 cursor-pointer">
            <i className="ico-award-female-daily"></i>
          </div>
          <Image
            src={dataProducts.product.medias[0].url}
            alt={dataProducts.product.medias[0].filename}
            width={206}
            height={206}
            className="rounded-l"
          />
          <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
            <i className="ico-star"></i>
            <span className="text-gray-20 ml-1 mr-1 text-sm">
              {dataProducts.product.rating_average}
            </span>
            <i className="ico-trusted-fd"></i>
          </div>
        </div>
        <h3 className="text-text-xs mt-2 px-2 font-bold tracking-wider">
          {dataProducts.product.brand.name}
        </h3>
        <strong className="text-black-olive line-clamp-1 mt-2 h-5 px-2 font-normal tracking-wider">
          {dataProducts.product.name}
        </strong>
        {dataProducts.product.flash_sale ? (
          <div className="mt-2 flex items-center space-x-1 px-2">
            <span className="text-xs font-semibold tracking-wider">
              {currencyFormat(
                dataProducts.product.flash_sale_description.promo
              )}
            </span>
            <span className="text-black-light text-[8px] tracking-wider line-through">
              {currencyFormat(
                dataProducts.product.flash_sale_description.setoko
              )}
            </span>
          </div>
        ) : (
          <div className="mt-2 flex items-center space-x-1 px-2">
            <span className="text-xs font-semibold tracking-wider">
              {currencyFormat(dataProducts.product.final_price.setoko)}
            </span>
          </div>
        )}
        <div className="mt-2 px-2">
          <div
            className="border-platinum cursor-pointer rounded border p-2 text-center text-xs font-semibold"
            onClick={(e) => {
              AddToCartAction(e, dataProducts);
            }}
          >
            <span>+ Add to Cart</span>
          </div>
          <div className="relative mt-4">
            <Menu>
              <Menu.Button className="mx-auto flex cursor-pointer items-center justify-center text-xs font-semibold tracking-wider">
                <i className="ico-more mr-2" />
                <span>More</span>
              </Menu.Button>
              <Menu.Items className="border-gray-10 absolute top-7 left-0 z-50 flex w-full flex-col rounded border bg-white px-4 py-2.5 shadow">
                {openModalAddList !== undefined && (
                  <Menu.Item>
                    <span
                      className="mb-2 cursor-pointer border-b pb-2 text-xs font-medium tracking-wider"
                      onClick={openModalAddList}
                    >
                      + Add to List
                    </span>
                  </Menu.Item>
                )}
                <Menu.Item>
                  <span
                    className="text-venetian-red cursor-pointer text-xs font-medium tracking-wider"
                    onClick={openModalFuncRemove}
                  >
                    Remove from Wishlist
                  </span>
                </Menu.Item>
              </Menu.Items>
            </Menu>
            <ModalAddList
              isModalOpen={openModal}
              closeModal={closeModalAddList}
              dataProduct={dataProducts}
              dataMyList={dataMyList}
            />
            <ModalRemove
              isModalOpen={openModalRemove}
              closeModal={closeModalRemove}
              code={dataProducts.product_code}
              type="favorites"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
