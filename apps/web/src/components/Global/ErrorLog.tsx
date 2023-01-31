import React from 'react';
import FailPageBone from './FailPageBone';
import ImageErrorLog from '@assets/images/error-log.svg';
/**
 * Error Log Page Component
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
const ErrorLog = ({
  errorNumber,
}: {
  errorNumber: string;
}): React.ReactElement => {
  return (
    <FailPageBone
      imageAsset={ImageErrorLog}
      title="Oops! Telah terjadi kesalahan"
      description={[
        'Telah terjadi kesalahan dan tim kami sedang memperbaikinya.',
        'Silahkan coba beberapa saat lagi',
      ]}
      errorNumber={errorNumber}
    />
  );
};

export default ErrorLog;
