import Image from 'next/image';
import { useEffect, useState } from 'react';
import IcoArrowDownBlack from '@assets/images/ico-arrow-down-black.svg';
import IcoVisa from '@assets/images/ico-visa.svg';
import IcoMaster from '@assets/images/ico-master-card.svg';
import IcoTrash from '@assets/images/ico-trash.svg';
import IcoEmptyCreditDebitCard from '@assets/images/ico-empty-credit-debit-card.svg';
import {
  Menu,
  ModalRemove,
  ModalSetDefault,
} from '@components/app/account/payment';
import ToggleInput from '@components/Global/ToggleInput';

// const DataListCards = [
//   {
//     id: 1,
//     cardNumber: '**** **** **** 5168',
//     active: true,
//   },
//   {
//     id: 2,
//     cardNumber: '**** **** **** 2221',
//     active: false,
//   },
// ];

type CustomerPayment = {
  paymentData: any;
  handleDeleteCard: Function;
};

const DebitAndCreditCard = ({
  paymentData,
  handleDeleteCard,
}: CustomerPayment) => {
  const [showModalRemove, setModalRemove] = useState<boolean | undefined>(
    false
  );
  const [showModalSetDefault, setModalSetDefault] = useState<
    boolean | undefined
  >(false);
  const [selected, setSelected] = useState<string>();
  const openModalDelete = (e: any, code: string) => {
    setModalRemove(true);
    setSelected(code);
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
          <Menu />
          <div className="w-3/4 pl-8">
            <div className="">
              <h1 className="text-22 font-semibold tracking-wider">
                DEBIT & CREDIT CARD
              </h1>
              <div className="border-gray-light h-98 mt-5 rounded-2xl border p-10">
                {paymentData?.length ? (
                  <div>
                    <div className="space-y-6">
                      <div>
                        <h1 className="text-22 font-semibold">
                          Make easy and secure payments
                        </h1>
                        <h3>
                          Manage your cards so you can complete your future
                          payments faster and safely.
                        </h3>
                      </div>
                      <div>
                        <details open={true} className="group duration-300">
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
                            {paymentData?.map((item: any, index: number) => {
                              return (
                                <div
                                  key={index}
                                  className="bg-gray-10 flex h-36 flex-col justify-between rounded-2xl py-4 px-6"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="font-semibold">
                                      **** **** **** {item.number}
                                    </span>
                                    <div>
                                      {item.card_network === 'visa' ? (
                                        <Image
                                          src={IcoVisa}
                                          width={48}
                                          height={48}
                                          alt="Card Logo"
                                          className="mx-auto"
                                        />
                                      ) : (
                                        <Image
                                          src={IcoMaster}
                                          width={48}
                                          height={48}
                                          alt="Card Logo"
                                          className="mx-auto"
                                        />
                                      )}
                                    </div>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <div
                                      className="text-black-lighter flex cursor-pointer items-center gap-2 text-xs font-semibold"
                                      onClick={(e) =>
                                        openModalDelete(e, item.code)
                                      }
                                    >
                                      <Image
                                        src={IcoTrash}
                                        width={13.8}
                                        height={15.1}
                                        alt="Delete Card"
                                      />
                                      <span>Delete</span>
                                    </div>
                                    {/* <div>
                                      <ToggleInput
                                        label={'Set as Default'}
                                        clickToggle={openModalSetDefaultFunc}
                                      />
                                    </div> */}
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </details>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <Empty />
                  </div>
                )}
              </div>
            </div>
          </div>
          <ModalRemove
            isModalOpen={showModalRemove}
            closeModal={closeModalRemove}
            handleDeleteCard={handleDeleteCard}
            card={selected}
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
