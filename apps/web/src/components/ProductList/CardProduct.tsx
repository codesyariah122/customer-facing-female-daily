import { useState, useEffect } from 'react';
import Image from 'next/image';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

interface IAttribute {
  kind: string;
  name: string;
  value: string;
  variance: boolean;
}

const CardProduct = ({
  isFlashSale = false,
  isProductMatch = false,
  openModalFunc,
  data,
}: {
  isFlashSale?: boolean;
  isProductMatch?: boolean;
  openModalFunc: (payload: any) => void;
  data: any;
}) => {
  const [discount, setDiscount] = useState<number>(0);
  // let variances: any[] = []

  useEffect(() => {
    if (data?.flashSale) {
      setDiscount(
        (data?.finalPrice.setoko - data?.finalPrice.promo) /
          data?.finalPrice.setoko
      );
    }
    // for (const attr of data.attributes) {
    //   for (const [i, child] of data.children.entries()) {
    //     if (child.attributes.some((attrChild: IAttribute) => attrChild.value === attr.value)) {
    //       variances.push({
    //        ...attr,
    //        value: JSON.parse(attr.value),
    //        childrenInformation: {
    //         index: i
    //        }
    //       })
    //     }
    //   }
    // }
    // console.log('variants', variances)
  }, [data]);

  return (
    <div>
      <div className="hover:border-teal-primary h-[364px] cursor-pointer rounded border border-transparent bg-white pb-3 shadow-md">
        <div className="relative">
          {data?.flashSale ? (
            <div className="absolute left-3 top-0">
              <i className="ico-discount-label"></i>
              <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                {discount}%
              </span>
            </div>
          ) : null}
          <div>
            <div className="absolute right-1 top-1 cursor-pointer rounded-full bg-white shadow-[0px_1px_2px_rgba(0,0,0,0.06)]">
              <i className="ico-love"></i>
            </div>
          </div>
          {/* <div className="absolute right-3 top-3 cursor-pointer">
            <i className="ico-award-female-daily"></i>
          </div> */}
          <div className="h-[174px]">
            <Image
              src={data?.medias?.[0]?.url ?? _DEFAULT_NO_IMAGE_}
              alt={data?.name || 'no-image'}
              width={174}
              height={174}
              className="cursor-pinter max-h-[174px] w-full rounded-t"
            />
          </div>
          {/* <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
            <i className="ico-star"></i>
            <span className="text-gray-20 ml-1 mr-1 text-sm">{data?.ratingAverage}</span>
            <i className="ico-trusted-fd"></i>
          </div> */}
        </div>
        <div className="mt-2 pr-3 pl-4">
          <h3 className="line-clamp-2 text-base font-normal leading-6 text-gray-800">
            {data?.name}
          </h3>
        </div>
        {/* <strong className="text-black-olive line-clamp-1 mt-2 h-[18px] px-2 text-xs font-normal tracking-wider">
          {data?.brand.name}
        </strong> */}
        <div className="mt-2 pr-3 pl-4">
          <div className="text-base font-semibold leading-4 tracking-wider text-black">
            Rp
            {new Intl.NumberFormat('id-ID').format(
              data?.finalPrice?.promo ?? 0
            )}
          </div>
          {data?.flashSale ? (
            <div className="mt-1 text-sm font-normal leading-4 text-[#6C6D6D] line-through">
              Rp
              {new Intl.NumberFormat('id-ID').format(
                data?.finalPrice?.setoko ?? 0
              )}
            </div>
          ) : null}
        </div>
        <div className="mt-2 flex items-center pl-3">
          {[...Array(5)].map((star, index) => {
            return (
              <svg
                key={index}
                aria-hidden="true"
                className={`h-5 w-5 ${
                  Math.floor(data?.ratingAverage) >= index + 1
                    ? 'text-[#DB284E]'
                    : 'text-[#DADADA] dark:text-gray-500'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>First star</title>
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            );
          })}
        </div>
        {!isFlashSale && !isProductMatch && (
          <div className="mt-5 px-3">
            <div
              className="border-platinum cursor-pointer rounded border p-2 text-center text-xs font-semibold"
              onClick={() => openModalFunc(data)}
            >
              <span>+ Add to Cart</span>
            </div>
          </div>
        )}
        {isFlashSale && (
          <div className="mt-2.5 flex w-full flex-col px-2">
            <span className="bg-seashell text-10 text-venetian-red w-full rounded-lg text-center font-semibold">
              Few stocks left. Order now.
            </span>
            <span className="bg-honeydew text-10 text-success-dark w-full rounded-lg text-center font-semibold">
              Product Available
            </span>
          </div>
        )}
        {isProductMatch && (
          <div className="mt-2.5 px-2">
            <div className="line-clamp-1 relative flex items-center pl-5">
              <i className="ico-union !absolute top-0.5 left-0"></i>
              <span className="text-aurometalsaurus text-xs tracking-wider">
                <strong className="font-semibold">For:</strong> Acne Prone,
                Anti-aasdasd
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardProduct;
