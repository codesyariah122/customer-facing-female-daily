import React from 'react';
import FailPageBone from './FailPageBone';
import ImageComingSoon from '@assets/images/coming-soon.svg';

/**
 * Coming soon page component
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
const ComingSoon = (): React.ReactElement => {
  return (
    <FailPageBone
      imageAsset={ImageComingSoon}
      title="Stay tuned!"
      description={[
        'We are working hard to make this',
        'feature up and running soon',
      ]}
    />
  );
};

export default ComingSoon;
