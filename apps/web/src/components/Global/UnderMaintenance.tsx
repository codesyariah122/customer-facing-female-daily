import React from 'react';
import FailPageBone from './FailPageBone';
import ImageUnderMaintenance from '@assets/images/under-maintenance.svg';
/**
 * Under Maintenance Page Component
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
const UnderMaintenance = (): React.ReactElement => {
  return (
    <FailPageBone
      imageAsset={ImageUnderMaintenance}
      title="It's just a grooming thing"
      description={[
        "We're under maintenance to serve you better",
        'Please come back again!',
      ]}
    />
  );
};

export default UnderMaintenance;
