import { useState } from 'react';
import CardProduct from '../../ProductList/CardProduct';
import ModalProductVariant from '../../ProductList/ModalProductVariant';

const ProductList = () => {
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        {[...Array(18)].map((item, index) => {
          return (
            <CardProduct
              key={index}
              openModalFunc={openModalFunc}
              data={undefined}
            />
          );
        })}
      </div>
      <ModalProductVariant
        isModalOpen={openModal}
        closeModal={closeModal}
        data={undefined}
      />
    </div>
  );
};

export default ProductList;
