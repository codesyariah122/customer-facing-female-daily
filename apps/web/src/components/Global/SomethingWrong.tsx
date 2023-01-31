import React from 'react';
import FailPageBone from './FailPageBone';
import ImageSomethingWrong from '@assets/images/something-wrong.svg';

/**
 * TODO:
 * adjust this page, when i18n implemented
 */

/**
 * Something Wrong Page Component
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description Default unknown error page, when the app got mistaken logic
 * @returns {React.ReactElement}
 */

const SomethingWrong = ({
  button,
  buttonClick,
  description,
}: {
  button?: string;
  buttonClick?: () => void;
  description?: string[];
}): React.ReactElement => {
  const defaultDesc = [
    'Telah terjadi kesalahan dan tim kami sedang memperbaikinya.',
    'Silahkan coba beberapa saat lagi',
  ];
  const concatDesc = description
    ? defaultDesc.concat(description)
    : defaultDesc;
  return (
    <FailPageBone
      imageAsset={ImageSomethingWrong}
      title="Oops! Telah terjadi kesalahan"
      description={concatDesc}
      button={button}
      buttonClick={buttonClick}
    />
  );
};

export default SomethingWrong;
