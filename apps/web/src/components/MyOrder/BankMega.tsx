import { useState } from 'react';
import Mega from '../../assets/images/bank-mega.svg';
import Image from 'next/image';
import ModalHowToPay from './ModalHowToPay';
interface bankMegaProps {
  va_number: string;
  total_payment: number;
  payment_method_name: string;
}

const BankMega = ({
  va_number = '',
  total_payment = 0,
  payment_method_name = 'unknown',
}: bankMegaProps) => {
  const [Modal, setModal] = useState(false);
  return (
    <div className="flex justify-between border-b p-4 ">
      <ModalHowToPay
        appear={Modal}
        onClose={() => {
          setModal(false);
        }}
      />
      <div className="flex space-x-2 py-4">
        <Image src={Mega} width={130} height={130} alt="barcode" />
        <div className="flex flex-col justify-between space-y-2 leading-snug">
          <div>
            <span className="text-sm text-gray-500">{payment_method_name}</span>
            {va_number && (
              <div className="flex justify-between ">
                {va_number}
                <button
                  onClick={() => navigator.clipboard.writeText(va_number)}
                  className="text-pink-primary text-sm font-semibold outline-none"
                >
                  Copy Number
                </button>
              </div>
            )}
          </div>
          <div>
            <div className="flex">
              <span>Total Payment</span>
              <span className="mx-2 font-semibold">
                Rp.{Intl.NumberFormat('id-ID').format(total_payment)}
              </span>
            </div>

            <button
              onClick={() => {
                setModal(true);
              }}
              className="font-semibold"
            >
              How to Pay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankMega;
