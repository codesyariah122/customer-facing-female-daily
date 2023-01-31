import React from 'react';
import ModalBone from './ModalBone';

const ModalUnderMaintenance = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) => {
  return (
    <ModalBone
      width={488}
      imageAsset="under-maintenance.svg"
      title="It's just a grooming thing"
      desc="We're under maintenance to serve you better. Please come back again!"
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    />
  );
};

export default ModalUnderMaintenance;
