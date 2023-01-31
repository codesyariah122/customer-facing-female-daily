import Image from 'next/image';
import React from 'react';
import clsx from 'clsx';
import TLFrameIcon from '@assets/images/frame-icon/top-left-frame-icon.svg';
import TRFrameIcon from '@assets/images/frame-icon/top-right-frame-icon.svg';
import BtnLeftFrameIcon from '@assets/images/frame-icon/bottom-left-frame-icon.svg';

/**
 * Component for Making Fail Page Component
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

const FailPageBone = ({
  imageAsset,
  title,
  contentWidth,
  description,
  errorNumber,
  button,
  buttonClick,
  isBackgroundSet = false, // default value, since this global fail bone
}: {
  imageAsset: string;
  title: string | undefined;
  contentWidth?: number | undefined;
  description?: string[] | undefined;
  errorNumber?: string;
  button?: string;
  buttonClick?: () => void;
  isBackgroundSet?: boolean;
}): React.ReactElement => {
  const defaultImage = '/assets/images/default-image-placeholder.png';
  const FImageAsset = imageAsset || defaultImage;
  return (
    <div className={clsx('relative', { 'py-20': !isBackgroundSet })}>
      <Image
        className="mx-auto object-cover"
        src={FImageAsset}
        alt="Icon"
        width={372}
        height={372}
      />
      <div
        className={clsx({ 'mx-auto max-w-[383px] space-y-6': contentWidth })}
      >
        <h2 className="text-center text-2xl font-semibold">{title}</h2>
        <div className="text-black-light text-center text-lg">
          {description?.map((desc, index) => {
            return <p key={index}>{desc}</p>;
          })}
          {errorNumber && (
            <div className="mt-2 text-center text-sm">
              <p>Error log number : {errorNumber}</p>
            </div>
          )}
          {button && (
            <div className="mt-11 text-center">
              <div
                className="bg-pink-primary mx-auto w-[241px] cursor-pointer rounded py-4"
                onClick={buttonClick}
              >
                <span className="font-semibold text-white">{button}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {!isBackgroundSet && (
        <>
          <Image
            className="absolute top-0 left-0"
            src={TLFrameIcon}
            alt="TLFrameIcon"
          />
          <Image className="absolute top-0 right-0" src={TRFrameIcon} alt="" />
          <Image
            className="absolute bottom-0 left-0"
            src={BtnLeftFrameIcon}
            alt=""
          />
        </>
      )}
    </div>
  );
};

export default FailPageBone;
