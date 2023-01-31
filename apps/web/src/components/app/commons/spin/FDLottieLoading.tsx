'use client';
import React, { useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import FDLottieJson from '@assets/lottiefiles/femaledaily-loading.json';

// default type
interface IFDLoadingProps {
  children: React.ReactNode;
}

/**
 * <FDLottieLoading>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @param children wrapped other react component to display load state
 * @returns {React.ReactElement}
 */

function FDLottieLoading({ children }: IFDLoadingProps): React.ReactElement {
  const lottieRef = useRef(null);
  return (
    <div className="max-w-screen relative flex max-h-screen flex-col overflow-hidden bg-white">
      {children}
      <div className="absolute z-10 flex h-full w-full items-start justify-center bg-neutral-100 bg-opacity-60 pt-20">
        <div className="flex items-center">
          <div className="h-[80px] w-[80px] rounded-xl border bg-white p-1 shadow-lg">
            <Player
              ref={lottieRef}
              autoplay={true}
              loop={true}
              src={FDLottieJson}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FDLottieLoading;
