import React from 'react';
import FailPageBone from './FailPageBone';
import ImageEmptyHere from '@assets/images/empty-here.svg';
/**
 * Empty here page Component
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
const EmptyHere = (): React.ReactElement => {
  return (
    <FailPageBone
      imageAsset={ImageEmptyHere}
      title="Oh no!"
      description={["It's empty here."]}
    />
  );
};

export default EmptyHere;
