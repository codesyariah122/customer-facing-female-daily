'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  _DEFAULT_NO_IMAGE_,
  _DEFAULT_PLACEHOLDER_IMAGE_,
} from '@constants/staticAssets';
import { _BRAND_LINK_ } from '@constants/url_page';

// TODO: url to brands product list

const BannerBrands = (props: any) => {
  const [dataBannerFix, setDataBannerFix] = useState<any>([]);
  const [srcBrands, setSrcBrands] = useState<string>(_DEFAULT_NO_IMAGE_);

  useEffect(() => {
    const filterBanner = () => {
      const dataFilter =
        props.dataBannerBrand.brandPageBrandSet[0].brands.filter(
          (element: any) => element.featuredBanner !== null
        );
      setDataBannerFix(dataFilter.slice(0, 3));
    };
    filterBanner();
  }, [props.dataBannerBrand.brandPageBrandSet]);
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="grid grid-cols-3 gap-5">
        {dataBannerFix?.map((banner: any) => {
          return (
            <div key={banner?.code}>
              <Link href={`${_BRAND_LINK_}/${banner?.name}`}>
                <Image
                  src={banner?.featuredBanner?.url || srcBrands}
                  placeholder="blur"
                  blurDataURL={_DEFAULT_PLACEHOLDER_IMAGE_}
                  onError={() => setSrcBrands(_DEFAULT_NO_IMAGE_)}
                  width={410}
                  height={179}
                  alt={banner.name || 'no-image'}
                  className="h-[179px] w-full overflow-hidden rounded-lg object-cover shadow-md"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerBrands;
