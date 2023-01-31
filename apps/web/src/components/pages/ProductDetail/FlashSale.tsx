/**
 * Flash sale data component
 */
import { currencyFormat } from '@utils/commons/currencyHelper';
import { FlashsaleTimer } from '@components/app/homepage';

const _LIMIT_STOCK_ = 5;

type DataFlashSale = {
  isFlashSale?: boolean;
  originalPrice?: number;
  finalPrice?: number;
  discPercentage?: number;
  flashSaleEnd?: any;
  flashSaleStock?: number;
};

/**
 * Product detail flash sale component
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {DataFlashSale} <data flash sale>
 * @returns {React.ReactElement}
 */
const FlashSale = (props: DataFlashSale) => {
  const stock = props.flashSaleStock || 0;
  return (
    <>
      {props.isFlashSale ? (
        <div className="mx-4 flex bg-rose-50 px-4 py-2 text-xs xl:mx-0">
          <div className="w-7/12">
            <div className="flex">
              <i className="ico-flashsale w-5"></i>
              <div className="text-lg font-semibold">
                <span className="px-2">Flash Sale</span>
              </div>
            </div>
            <div className="py-2 px-4 xl:px-0">
              <div>
                <span className="text-lg font-semibold">
                  {currencyFormat(props.finalPrice)}
                </span>
              </div>
              <div className="my-2 flex text-xs leading-7">
                <span className="rounded bg-amber-200 px-2 font-semibold">
                  {props.discPercentage}%
                </span>
                <span className="mx-1.5 text-zinc-400 line-through">
                  {currencyFormat(props.originalPrice)}
                </span>
              </div>
            </div>
          </div>
          <div className="w-3/12 pt-4">
            <span className="py-2 text-right font-semibold">Sale ends in</span>
            <FlashsaleTimer endTime={props.flashSaleEnd} />
            <div className="pt-4">
              {stock <= _LIMIT_STOCK_ ? (
                <>
                  <span className="font-semibold">Few Stocks Left</span>
                </>
              ) : (
                <>
                  <span className="font-semibold">Product Available</span>
                </>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default FlashSale;
