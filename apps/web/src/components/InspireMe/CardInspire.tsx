import Image from 'next/image';
import { useState } from 'react';
import ModalMoreLabel from './ModalMoreLabel';

const CardInspire = () => {
  const [showModalMoreLabel, setModalMoreLabel] = useState<boolean | undefined>(
    false
  );
  const openModalMoreLabel = () => {
    setModalMoreLabel(true);
  };
  const closeModalMoreLabel = () => {
    setModalMoreLabel(false);
  };
  return (
    <div className="overflow-hidden rounded-2xl shadow">
      <div>
        <Image
          src="https://media-fd-stg.setoko-test.com/images/b519d376-758d-4f27-b926-2e77b36900f6.jpg"
          width={302}
          height={137}
          alt="article"
          className="h-[137px] w-full object-cover"
        />
      </div>
      <div className="space-y-3.5 py-6 px-4">
        <strong className="font-semibold">Big Ideas for Small Spaces</strong>
        <p className="text-black-olive text-xs">
          Got a teeny room, an empty corner, or a bare wall? That’s a prime spot
          for a cozy nook or...
        </p>
        <div className="text-10 space-x-2">
          <span className="space-x-2">
            <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
              living
            </span>
            {/* 2 or more label */}
            <span className="text-black-olive bg-gray-light rounded-lg px-2 py-1">
              living
            </span>
            <span className="text-black-light border-r py-1 pr-2 underline decoration-current">
              <span className="cursor-pointer" onClick={openModalMoreLabel}>
                More
              </span>
            </span>
          </span>
          <span className="text-black-light space-x-2">
            <span>12 Feb 2021</span>
            <span>|</span>
            <span>2 min read</span>
          </span>
        </div>
      </div>

      <ModalMoreLabel
        isModalOpen={showModalMoreLabel}
        closeModal={closeModalMoreLabel}
      />
    </div>
  );
};

export default CardInspire;
