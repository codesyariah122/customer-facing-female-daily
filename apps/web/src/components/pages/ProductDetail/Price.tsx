/**
 * Product detail price component
 */
import { currencyFormat } from '@utils/commons/currencyHelper';

type DataProduct = {
  finalPrice: number;
  originalPrice?: number;
  isProductPromo: boolean;
  discountPercentage?: number;
};

/**
 * Product detail price info
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {finalPrice, originalPrice} props <input props price data>
 * @returns {React.ReactElement}
 */
const Price = ({
  finalPrice,
  originalPrice,
  isProductPromo,
  discountPercentage,
}: DataProduct) => {
  return (
    <div className="py-2 px-4 xl:px-0">
      <div>
        <span className="text-lg font-semibold">
          {currencyFormat(finalPrice)}
        </span>
      </div>
      {isProductPromo ? (
        <div className="my-2 flex text-xs leading-7">
          <span className="rounded bg-amber-200 px-2 font-semibold">
            {discountPercentage}%
          </span>
          <span className="mx-1.5 text-zinc-400 line-through">
            {currencyFormat(originalPrice)}
          </span>
        </div>
      ) : null}
    </div>
  );
};

export default Price;
