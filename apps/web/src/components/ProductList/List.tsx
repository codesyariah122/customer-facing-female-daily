import { useState } from 'react';
import Pagination from '../Global/Pagination';
import Toolbar from '../Global/Toolbar/Toolbar';
import GridView from './GridView';
import ListView from './ListView';
import ModalProductVariant from './ModalProductVariant';
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
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default List;
