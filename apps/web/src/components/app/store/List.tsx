'use client';
import { useState } from 'react';
import { FilterCategories, StoreInfo, Toolbar } from '@components/app/store';
import {
  GridView,
  ListView,
  ModalProductVariant,
  Pagination,
} from '@components/app/commons';

/**
 * List component <show List component on the store page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */

const List = () => {
  const [layoutView, setLayoutView] = useState<Boolean>(true);
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);

  const handlePropsLayout = (value: Boolean): void => {
    setLayoutView(value);
  };
  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFn = () => {
    setOpenModal(true);
  };

  return (
    <div className="flex-1">
      <div className="flex flex-col">
        <Toolbar valueLayout={layoutView} clickFn={handlePropsLayout} />
        {layoutView ? <GridView openModalFn={openModalFn} /> : <ListView />}
        <ModalProductVariant isModalOpen={openModal} closeModal={closeModal} />
        <div className="mt-10">
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default List;
