import { Istate, IsubState } from '@utils/app/myorder';
import Image from 'next/image';

interface propsProducts {
  product: typeOfProductsProps;
  customer_note: string;
  state: Istate;
  order_state_sub: IsubState;
  reOrder: () => void;
}

interface typeOfProduct {
  medias: Array<any>;
  name: string;
  brand: typeOfBrand;
  weight: number;
}

interface typeOfProductsProps {
  product: typeOfProduct;
  quantity: number;
  price: number;
}

interface typeOfBrand {
  name: string;
}
const ProductOrder = (props: propsProducts) => {
  const { quantity = 0, product, price } = props.product;
  const { medias, name = 'Unknown Product', brand } = product;

  const canReorder =
    props.order_state_sub?.code !== 'IN_COMPLAINT' &&
    props.state.code === 'COMPLETE';
  return (
    <div className="flex flex-col space-y-2 py-4">
      <div className="flex w-full flex-1 space-x-4  leading-6">
        <div className="h-[90px] w-[90px]">
          <div className=" relative  h-[90px] w-[90px]">
            {medias && medias.length > 0 ? (
              <Image src={medias[0].url} alt="product-images" fill />
            ) : (
              <i className="skeleton h-[90px] w-[90px]" />
            )}
            <i className="ico-award-auto absolute top-0 right-0 h-[24px] w-[24px] rounded" />
          </div>
        </div>
        <div className="flex-1 leading-loose">
          {/* <StateofProduct /> */}
          <p className="text-sm font-semibold">{brand.name}</p>
          <div className="flex justify-between">
            <div className="flex-1">
              <p>{name}</p>
              <p className="flex text-xs">
                Quantity: {quantity} ({product.weight} gr)
              </p>
            </div>
            <div className="leading-snug" style={{ minWidth: '150px' }}>
              <p className="text-sm font-medium">Total</p>
              <p className="text-md font-semibold">
                Rp {Intl.NumberFormat('id-ID').format(price)}
              </p>
            </div>
            {canReorder && (
              <button
                onClick={() => props.reOrder()}
                className="bg-pink-primary mx-8 flex h-[42px] w-[115px] items-center justify-center rounded-md px-2 text-xs font-medium text-white"
              >
                <span>Reorder</span>
              </button>
            )}
          </div>
        </div>
      </div>
      {props.customer_note && (
        <div className="flex space-x-2 pt-2 text-xs text-gray-500">
          <span className="font-semibold"> Notes: </span>{' '}
          <p className="flex-1">{props.customer_note}</p>
        </div>
      )}
    </div>
  );
};

export default ProductOrder;
