import React from 'react';

interface CardInfoPropsInterface {
  isStockAvailable?: boolean;
  isStockLimited?: boolean;
  isOutOfStock?: boolean;
  stockInfoMessage?: string;
}

export const CardStockInfo: React.FC<CardInfoPropsInterface> = (props) => {
  return (
    <>
      <div className="mt-2">
        {props.isStockLimited ? (
          <span className="flex justify-center rounded-lg bg-seashell p-1 text-10 font-semibold tracking-wider text-venetian-red">
            {props.stockInfoMessage}
          </span>
        ) : (
          ''
        )}
        {props.isStockAvailable ? (
          <span className="flex justify-center rounded-lg bg-lime-100 p-1 text-10 font-semibold tracking-wider text-green-500">
            {props.stockInfoMessage}
          </span>
        ) : (
          ''
        )}
      </div>
    </>
  );
};
