'use client';
import { useEffect, useState } from 'react';
import emptyImg from '@assets/images/ico-empty-search.svg';
import Link from 'next/link';
import { _BRAND_LINK_ } from '@constants/url_page';

// TODO: url to brands product list

const BrandContent = (props: any) => {
  return (
    <div className="mt-8">
      {props?.dataBrands?.length > 0 ? (
        <div className="mt-8">
          <div className="border-gray-30 flex justify-between border-b">
            {props?.dataAlphabet.map((item: string, index: number) => {
              return (
                <div
                  key={index}
                  className={`${
                    props.dataSelectedLetter.toLowerCase() ===
                    item.toLowerCase()
                      ? 'text-teal-primary border-teal-primary'
                      : 'border-transparent'
                  } hover:border-teal-primary hover:text-teal-primary cursor-pointer border-b-2 px-2 pb-1.5`}
                  onClick={() => props.setDataByAlphabet(item)}
                >
                  {item}
                </div>
              );
            })}
          </div>
          <div className="mt-4 grid grid-cols-4 gap-4">
            {props?.dataBrands.map((item: any) => {
              return (
                <div key={item.code}>
                  <Link href={`${_BRAND_LINK_}/${item?.name}`}>
                    {/* <span
                      dangerouslySetInnerHTML={{
                        __html: toBold(item.name),
                      }}
                    ></span> */}
                    <span>{item.name}</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="py-20">
          <img src={emptyImg.src} alt="" className="mx-auto w-[142px]" />
          <div className="mx-auto mt-2.5 w-full max-w-[329px] text-center text-sm tracking-wider">
            Sorry we can’t find the brand you’re looking for. Explore more
            exciting brands here
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandContent;
