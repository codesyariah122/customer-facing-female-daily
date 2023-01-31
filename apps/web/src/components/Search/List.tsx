import { useState } from 'react';
import Pagination from '../Global/Pagination';
import Toolbar from '../Global/Toolbar/Toolbar';
import GridView from '../ProductList/GridView';
import ListView from '../ProductList/ListView';
import ModalProductVariant from '../ProductList/ModalProductVariant';
import Related from './Related';
const List = () => {
  const [layoutView, setLayoutView] = useState<Boolean>(true);
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);

  const handlePropsLayout = (value: Boolean): void => {
    setLayoutView(value);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = () => {
    setOpenModal(true);
  };
  return (
    <div className="flex-1">
      <div className="flex flex-col">
        <Toolbar valueLayout={layoutView} clickFunc={handlePropsLayout} />
        {layoutView ? <GridView openModalFunc={openModalFunc} /> : <ListView />}
        <ModalProductVariant
          isModalOpen={openModal}
          closeModal={closeModal}
          data={undefined}
        />
        <div className="mt-10">
          <Related />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default List;
