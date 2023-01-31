/**
 * Order review component
 */
import React from 'react';
import { usePagination, useTable } from 'react-table';
import { IOrderReview } from '@utils/pages/productDetail/productDetailInterface';
import Pagination from '../../Global/Pagination';

type DataOrderReview = {
  totalRating?: number;
  totalReview?: number;
  orderReviews?: any;
};

/**
 * Order review Content
 * @author Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {DataOrderReview} props <input props based on DataOrderReview type>
 * @returns {React.ReactElement}
 */
const OrderReview = (props: DataOrderReview) => {
  /**
   * array ro rating
   */
  const rates = [1, 2, 3, 4, 5];

  const columns = React.useMemo(
    () => [
      {
        Header: 'Content',
        accessor: 'id',
      },
    ],
    []
  );

  const data = props?.orderReviews;

  const {
    prepareRow,
    page,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 6 },
    },
    usePagination
  );

  return (
    <div className="px-4 tracking-wide">
      <h2 className="py-2 font-semibold">Order Review</h2>
      <div className="my-4 flex border-b pb-2 text-sm">
        {props.totalRating ? (
          <>
            <div>
              <i className="ico-star-pink"></i>
            </div>
            <div>
              <span className="pl-2 font-semibold">{props.totalRating}</span>
            </div>
          </>
        ) : null}
        <div>
          <span className="pl-2 ">
            ({props.totalReview ? props.totalReview : 0} reviews)
          </span>
        </div>
      </div>
      {page?.map((row: any, i) => {
        prepareRow(row);
        return (
          <div key={row.id} className="border-b py-4" {...row.getRowProps()}>
            {row.cells.map((cell: any) => {
              const rowData = cell.row.original;
              console.log(rowData);
              return (
                <>
                  <div className="flex gap-x-1">
                    {rates.map((rate: any) =>
                      rowData.ratingReview &&
                      rate <= Math.floor(rowData.ratingReview) ? (
                        <i key={rate} className="ico-star-pink"></i>
                      ) : (
                        <i key={rate} className="ico-star-grey"></i>
                      )
                    )}
                  </div>
                  <div>
                    <div className="py-4">
                      <div className=" py-2 text-sm">
                        <div>{rowData.reviewContent}</div>
                        <div className="flex flex-wrap">
                          {rowData.tags?.map((tag: string, index: number) => {
                            return (
                              <div
                                key={index}
                                className="my-2 mr-2 rounded-xl bg-slate-200 py-1 px-2"
                              >
                                <span>{tag}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                    <div className="flex">
                      {rowData.images?.map((image: any, index: number) => {
                        return (
                          <img
                            key={index}
                            src={image.url}
                            className="mx-2 h-[93px] w-[93px] rounded-md"
                            alt={image.filename}
                          />
                        );
                      })}
                    </div>
                    <div className="text-salte-700 my-2 flex text-xs">
                      <span>{rowData.reviewDate} </span>
                      <span className="px-2">|</span>
                      <span>{rowData.userName}</span>
                    </div>
                    {rowData.sellerResponse?.comment ? (
                      <div className="my-2	rounded-lg bg-slate-50 p-4">
                        <h2 className="font-semibold">Seller Response</h2>
                        <div>
                          <span>{rowData.sellerResponse?.comment}</span>
                        </div>
                        <div className="flex">
                          <span>{rowData.sellerResponse?.createdAt} </span>
                          <span className="px-2">|</span>
                          <span>{rowData.storeName}</span>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </>
              );
            })}
          </div>
        );
      })}
      {pageOptions.length > 1 ? (
        <div className="py-8">
          <Pagination
            gotoPage={gotoPage}
            nextPage={nextPage}
            previousPage={previousPage}
            pageOptions={pageOptions}
            pageIndex={pageIndex}
          />
        </div>
      ) : null}
    </div>
  );
};

export default OrderReview;
