import Image from 'next/image';
import { useEffect, useState } from 'react';
import ModalRemove from './ModalRemove';
import ModalSetDefault from './ModalSetDefault';
import MenuAccount from '../MyAccount/Menu';
import ToggleInput from '../Global/ToggleInput';
import IcoArrowDownBlack from '@assets/images/ico-arrow-down-black.svg';
import IcoVisa from '@assets/images/ico-visa.svg';
import IcoTrash from '@assets/images/ico-trash.svg';
import IcoEmptyCreditDebitCard from '@assets/images/ico-empty-credit-debit-card.svg';
const DataListCards = [
  {
    id: 1,
    cardNumber: '**** **** **** 5168',
    active: true,
  },
  {
    id: 2,
    cardNumber: '**** **** **** 2221',
    active: false,
  },
];

const DebitAndCreditCard = () => {
  const [showModalRemove, setModalRemove] = useState<boolean | undefined>(
    false
  );
  const [showModalSetDefault, setModalSetDefault] = useState<
    boolean | undefined
  >(false);
  const openModalDelete = () => {
    setModalRemove(true);
  };
  const closeModalRemove = () => {
    setModalRemove(false);
  };
  const openModalSetDefaultFunc = () => {
    setModalSetDefault(true);
  };
  const closeModalSetDefaultFunc = () => {
    setModalSetDefault(false);
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
                DEBIT & CREDIT CARD
              </h1>
              <div className="border-gray-light h-98 mt-5 rounded-2xl border p-10">
                <div>
                  <ListCard
                    openModalDelete={openModalDelete}
                    openModalSetDefault={openModalSetDefaultFunc}
                  />
                </div>
                <div>
                  <Empty />
                </div>
              </div>
            </div>
          </div>
          <ModalRemove
            isModalOpen={showModalRemove}
            closeModal={closeModalRemove}
          />
          <ModalSetDefault
            isModalOpen={showModalSetDefault}
            closeModal={closeModalSetDefaultFunc}
          />
        </div>
      </main>
    </div>
  );
};

const ListCard = ({
  openModalDelete,
  openModalSetDefault,
}: {
  openModalDelete: () => void;
  openModalSetDefault: () => void;
}) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-22 font-semibold">Make easy and secure payments</h1>
        <h3>
          Manage your cards so you can complete your future payments faster and
          safely.
        </h3>
      </div>
      <div>
        <details className="group duration-300">
          <summary className="flex cursor-pointer items-center justify-between border-b-2 pb-6">
            <h2 className="font-semibold">My Saved Cards</h2>
            <Image
              src={IcoArrowDownBlack}
              width={12}
              height={6}
              alt="Card Logo"
              className="rotate-0 transition-all duration-300 group-open:rotate-180"
            />
          </summary>
          <div className="mt-6 grid grid-cols-2 gap-8">
            {DataListCards.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-gray-10 flex h-36 flex-col justify-between rounded-2xl py-4 px-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{item.cardNumber}</span>
                    <div>
                      <Image
                        src={IcoVisa}
                        width={48}
                        height={48}
                        alt="Card Logo"
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div
                      className="text-black-lighter flex cursor-pointer items-center gap-2 text-xs font-semibold"
                      onClick={openModalDelete}
                    >
                      <Image
                        src={IcoTrash}
                        width={13.8}
                        height={15.1}
                        alt="Delete Card"
                      />
                      <span>Delete</span>
                    </div>
                    <div>
                      <ToggleInput
                        label={'Set as Default'}
                        clickToggle={openModalSetDefault}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </details>
      </div>
    </div>
  );
};
const Empty = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20">
        <Image
          src={IcoEmptyCreditDebitCard}
          width={173}
          height={173}
          alt="Empty Card List"
          className="mx-auto"
        />
        <p className="mt-5 flex flex-col text-center tracking-wider">
          <span className="text-lg font-semibold">
            You haven’t saved any cards
          </span>
          <span>
            Enjoy faster & convenient transactions by <br />
            saving your card details.
          </span>
        </p>
      </div>
    </div>
  );
};

export default DebitAndCreditCard;
