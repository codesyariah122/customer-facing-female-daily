import { useState } from 'react';
import CardProduct from '../../../../ProductList/CardProduct';
import ModalProductVariant from '../../../../ProductList/ModalProductVariant';

interface IList {
  code: string;
}

interface IProductListProps {
  data: IList[];
}

const ProductList: React.FC<IProductListProps> = ({
  data,
}: IProductListProps) => {
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);
  const [product, setProduct] = useState<any>({});

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = (payload: any) => {
    setProduct(payload);
    setOpenModal(true);
  };

  return (
    <div>
      <div className="grid grid-cols-6 gap-4">
        {(data || []).map((item, index) => {
          return (
            <CardProduct
              key={index}
              openModalFunc={openModalFunc}
              data={item}
            />
          );
        })}
      </div>
      <ModalProductVariant
        isModalOpen={openModal}
        closeModal={closeModal}
        data={product}
      />
    </div>
  );
};

export default ProductList;
