import React from 'react';
import FailPageBone from './FailPageBone';
import ImageServerError from '@assets/images/server-error.svg';
/**
 * Server Error Component
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
const ServerError = ({
  buttonretry,
}: {
  buttonretry: () => void;
}): React.ReactElement => {
  return (
    <FailPageBone
      imageAsset={ImageServerError}
      title="Oops, gagal memuat halaman"
      description={[
        'Koneksi terputus atau tidak dapat tersambung ke internet.',
        'koneksimu dan coba beberapa saat lagi ya',
      ]}
      button="Retry"
      buttonClick={buttonretry}
    />
  );
};

export default ServerError;
