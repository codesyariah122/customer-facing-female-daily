/**
 * Product recommendation component
 */
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { currencyFormat } from '@utils/commons/currencyHelper';
import { v4 as uuidv4 } from 'uuid';

type Recommendations = {
  code: string;
  name: string;
  image: string;
  finalPrice: number;
  originalPrice?: number;
  discPercentage?: number;
  isPromo: boolean;
  rating?: number;
  sold?: number;
  favorites: number;
  productUrl: string;
};

type DataComponent = {
  title?: string;
  url?: string;
  recommendations?: any[];
};

const ProductRecommedation = (props: DataComponent) => {
  const url = props.url ? props.url : '/';
  /**
   * array ro rating
   */
  const rates = [1, 2, 3, 4, 5];

  const router = useRouter();

  const handleGoToDetail = (e: any, path: string) => {
    router.push(path);
  };

  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="mb-8 flex items-center justify-between">
        <div className="text-22 font-semibold">{props.title}</div>
        {/* <Link href={url}>
          <span className="text-pink-primary cursor-pointer font-semibold">
            See all
          </span>
        </Link> */}
      </div>
      <div className="relative mt-5 flex w-full">
        <Swiper
          slidesPerView={'auto'}
          spaceBetween={18}
          navigation={{
            prevEl: '.prev',
            nextEl: '.next',
          }}
          modules={[Navigation]}
          className="relative"
          key={uuidv4()}
        >
          {props.recommendations?.map((item) => {
            return (
              <SwiperSlide className="!w-[190px]" key={uuidv4()}>
                <div className="rounded bg-white p-2 shadow-md">
                  <div className="relative">
                    {item.isPromo ? (
                      <div className="absolute left-0 -top-[8px]">
                        <i className="ico-discount-label"></i>
                        <span className="absolute top-[8px] left-[11px] text-sm font-semibold">
                          {item.discPercentage}%
                        </span>
                      </div>
                    ) : null}
                    <div className="absolute right-0 top-0">
                      <i className="ico-wishlist"></i>
                    </div>
                    <img
                      onClick={(e) => handleGoToDetail(e, item.productUrl)}
                      src={item.image}
                      className="w-full"
                      alt=""
                    />
                    <div className="bg-star-rating absolute bottom-0 left-0 inline-flex items-center rounded-tr-lg py-[1px] px-[4px]">
                      <i className="ico-star"></i>
                      <span className="text-gray-20 ml-1 mr-1 text-xs">
                        {item.rating}
                      </span>
                      <i className="ico-trusted-fd"></i>
                    </div>
                  </div>
                  <div
                    onClick={(e) => handleGoToDetail(e, item.productUrl)}
                    className="text-black-olive line-clamp-2 mt-1 h-12 tracking-wider"
                  >
                    {item.name}
                  </div>
                  <div className="mt-1 flex flex-col">
                    <span className="font-semibold">
                      {currencyFormat(item.finalPrice)}
                    </span>
                    {item.isPromo ? (
                      <span className="text-black-light text-sm tracking-wider line-through">
                        {currencyFormat(item.originalPrice)}
                      </span>
                    ) : null}
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="flex gap-x-1" key={uuidv4()}>
                      {rates.map((rate) =>
                        rate <= Math.floor(item.rating) ? (
                          <i key={uuidv4()} className="ico-star-pink"></i>
                        ) : (
                          <i key={uuidv4()} className="ico-star-grey"></i>
                        )
                      )}
                    </div>
                    <div className="text-gray-20 ml-3 text-xs tracking-wider">
                      {item.sold}
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="border-platinum rounded border p-2 text-center text-xs font-semibold">
                      + Add to Cart
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="prev absolute top-1/2 -left-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
          <i className="ico-arrow-left-pink"></i>
        </div>
        <div className="next absolute top-1/2 -right-5 z-10 flex h-10 w-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white shadow-md">
          <i className="ico-arrow-right-pink"></i>
        </div>
      </div>
    </div>
  );
};

export default ProductRecommedation;
