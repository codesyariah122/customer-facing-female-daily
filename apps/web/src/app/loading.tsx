'use client';
import React from 'react';
import {
  SkeletonFlashSales,
  SkeletonHeroSlider,
  SkeletonMiddleBanner,
  SkeletonShopByCategories,
} from '@components/app/commons';
import { FDLottieLoading } from '@components/app/commons';

/**
 * Loading file for homepage loading state
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 */

function Loading() {
  return (
    <FDLottieLoading>
      <div className="pt-4">
        <SkeletonHeroSlider />
      </div>
      <div className="pt-4">
        <SkeletonShopByCategories />
      </div>
      <div className="pt-4">
        <SkeletonFlashSales />
      </div>
      <div className="pt-4">
        <SkeletonMiddleBanner />
      </div>
    </FDLottieLoading>
  );
}

export default Loading;
