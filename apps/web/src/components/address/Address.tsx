import Image from 'next/image';
import { useEffect, useState } from 'react';
import MenuAccount from '../MyAccount/Menu';
import ModalAddAddress from './ModalAddAddress';
import ModalEditAddress from './ModalEditAddress';
import ModalRemove from './ModalRemove';
import Toolbar from './Toolbar';
import IcoEmptyAddress from '@assets/images/ico-empty-address.svg';

const ListAddress = [
  {
    id: 1,
    name: 'John Doe',
    active: true,
  },
  {
    id: 2,
    name: 'John Doe',
    active: false,
  },
];

const Address = () => {
  const [openModal, setOpenModal] = useState<boolean | undefined>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean | undefined>(
    false
  );
  const [openModalRemove, setOpenModalRemove] = useState<boolean | undefined>(
    false
  );

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = () => {
    setOpenModal(true);
  };
  const closeModalEdit = () => {
    setOpenModalEdit(false);
  };

  const openModalEditFunc = () => {
    setOpenModalEdit(true);
  };
  const closeModalRemove = () => {
    setOpenModalRemove(false);
  };

  const openModalRemoveFunc = () => {
    setOpenModalRemove(true);
  };
  useEffect(() => {}, []);
  return (
    <div>
      <main className="container mx-auto mt-8 xl:max-w-screen-xl">
        <div className="flex">
          <MenuAccount />
          <div className="w-3/4 pl-8">
            <div className="">
              <h1 className="text-22 font-semibold tracking-wider">
                MY ADDRESSES
              </h1>
              <div className="border-gray-light mt-5 rounded-2xl border py-7">
                <div className="px-5">
                  <Toolbar openModalFunc={openModalFunc} />
                </div>
                <div className="mt-7 border-t px-5">
                  <div className="mt-5">
                    <List
                      openModalEditFunc={openModalEditFunc}
                      openModalRemoveFunc={openModalRemoveFunc}
                    />
                  </div>
                  <div>
                    <Empty />
                  </div>
                </div>
              </div>
            </div>
            <ModalAddAddress isModalOpen={openModal} closeModal={closeModal} />
            <ModalEditAddress
              isModalOpen={openModalEdit}
              closeModal={closeModalEdit}
            />
            <ModalRemove
              isModalOpen={openModalRemove}
              closeModal={closeModalRemove}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

const List = ({
  openModalEditFunc,
  openModalRemoveFunc,
}: {
  openModalEditFunc: () => void;
  openModalRemoveFunc: () => void;
}) => {
  return (
    <div className="space-y-6">
      {ListAddress.map((item, index) => {
        return (
          <div
            key={index}
            className={`${
              item.active ? 'border-teal-primary' : ''
            } rounded-2xl border py-5 px-3.5 shadow`}
          >
            <div
              className={`${
                item.active ? 'justify-start' : 'justify-between'
              } relative flex`}
            >
              <strong className="mr-2 text-sm font-medium">
                Bank Mega Office
              </strong>
              {item.active && (
                <>
                  <span className="bg-teal-primary rounded py-1 px-2.5 text-sm font-semibold text-white">
                    Primary
                  </span>
                  <i className="ico-address-active absolute right-0 top-0"></i>
                </>
              )}
              {!item.active && (
                <span className="bg-pink-primary rounded py-1 px-2.5 text-sm font-semibold text-white">
                  Set as Primary
                </span>
              )}
            </div>
            <div>
              <span className="font-semibold">John Doe</span>
            </div>
            <div>
              <span className="text-black-light">
                Jalan Sisingamangaraja No. 12 RT001 / RW009, Kota Depok, Jawa
                Barat, Indonesia
              </span>
            </div>
            <div className="text-black-light text-sm">0812 8429 2493</div>
            <div className="flex justify-end">
              <div className="flex items-center space-x-5">
                <span
                  className="text-black-light cursor-pointer text-sm font-semibold"
                  onClick={openModalRemoveFunc}
                >
                  Delete Address
                </span>
                <span
                  className="text-pink-primary cursor-pointer text-xs font-semibold tracking-wider"
                  onClick={openModalEditFunc}
                >
                  Edit
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const Empty = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20">
        <Image
          src={IcoEmptyAddress}
          width={173}
          height={173}
          alt="empty wishlist"
          className="mx-auto"
        />
        <p className="mt-5 flex flex-col text-center tracking-wider">
          <span className="text-lg font-semibold">
            Save your delivery address
          </span>
          <span>
            Shopping is much faster and easier when <br />
            you have your address ready!
          </span>
        </p>
      </div>
    </div>
  );
};

export default Address;
