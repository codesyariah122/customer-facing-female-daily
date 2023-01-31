import React from 'react';
import ModalBone from './ModalBone';

const ModalSomethingWrong = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) => {
  return (
    <ModalBone
      width={488}
      imageAsset="something-wrong.svg"
      title="Oops! Telah terjadi kesalahan"
      desc="Telah terjadi kesalahan dan tim kami sedang memperbaikinya. Silahkan coba beberapa saat lagi"
      isModalOpen={isModalOpen}
      closeModal={closeModal}
    />
  );
};

export default ModalSomethingWrong;
