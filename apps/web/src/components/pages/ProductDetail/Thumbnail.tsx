/**
 * Thumbnail image component
 */

import { useState, useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProductImage } from '@utils/pages/productDetail/productDetailType';
import PlaceholderImg from '@assets/images/placeholder-image.svg';
import { isURL } from '@utils/helpers/url';
import { IProductAward } from '@graphql-ctcd/codegen';

type DataAttribute = {
  images?: ProductImage[];
  mainImage: ProductImage;
  award?: IProductAward;
};

/**
 * Product detail thumbnail component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {images} props <array images>
 * @returns {React.ReactElement}
 */
const Thumbnail = (props: DataAttribute) => {
  /**
   * State main product image
   * PlaceholderImg.src
   */
  const [mainProductImage, setMainProductImage] = useState<any>(
    PlaceholderImg.src
  );
  useEffect(() => {
    if (isURL(props.mainImage?.url)) {
      setMainProductImage(props.mainImage?.url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainProductImage]);

  /**
   * select product image
   * @param {e} <event>
   * @param {img} string <image url data>
   * @return {void}
   */
  const selectImage = (e: any, img: string): void => {
    setMainProductImage(img);
  };

  return (
    <div className="mt-12 sm:w-full xl:mt-0 xl:w-[400px]">
      <div className="relative pb-4">
        {props.award ? (
          <i className="ico-award absolute right-2 top-2 z-50 h-[58px] w-[60px] bg-cover"></i>
        ) : null}
        <img className="w-full" alt="main-image" src={mainProductImage} />
      </div>
      {props.images && props.images.length > 1 ? (
        <div className="flex flex-wrap">
          {props.images?.map((img, i) => {
            return (
              <div
                onClick={(e) => selectImage(e, img.url)}
                className="mr-4 mt-4 flex  !w-[57px] flex-wrap"
                key={img.url}
              >
                {props.award ? (
                  <img
                    className="!h-[57px] rounded bg-white drop-shadow-md"
                    src={img.url}
                    alt={img.filename}
                  />
                ) : null}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Thumbnail;
