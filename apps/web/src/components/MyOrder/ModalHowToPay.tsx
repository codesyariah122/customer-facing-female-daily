import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
/**
 * @author UNIQ Fadilah<Uniq.Fadilah@ctcorpdigital.com>
 * @param props
 * @returns
 */
interface props {
  appear: boolean;
  onClose: () => void;
}

const msmile = [
  'Log in to M-Smile.',
  'Choose Pembayaran.',
  'Choose your payment account.',
  'In "Daftar Produk" menu, choose Virtual Account.',
  'In "No Pelanggan" menu, choose Input No Pelanggan.',
  'Enter Bank Mega Virtual Account Number shown during payment process.',
  'Choose Kirim.',
  'Follow verification steps by SMS to finish this process.',
];
const data = [
  'Insert your card and enter your PIN.',
  'Choose <strong>Transaksi Lainnya.</strong>',
  'Choose <strong>Pembayaran.<strong/>',
  'Choose <strong>Pembayaran Lainnya/VA.</strong>',
  'Enter the Virtual Account Number shown during your payment process.',
  'Continue with choosing <strong>Benar.</strong>',
];
const ModalHowToPay = (props: props) => {
  const { appear, onClose } = props;
  return (
    <Transition appear show={appear} as={React.Fragment}>
      <Dialog as="div" className="modal-register" onClose={onClose}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="backdrop" onClick={() => onClose()}></div>
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            style={{ maxHeight: '90%' }}
            className="modal-content  flex  w-[550px] flex-col  overflow-auto rounded-lg bg-white"
          >
            <div className="flex  justify-end p-4 outline-none">
              <button onClick={() => onClose()}>
                <i className="ico-cancle-solid" />
              </button>
            </div>
            <div className=" pb-6 leading-loose">
              <div className="px-10">
                <h1 className="text-2xl font-semibold">How to Pay</h1>
                <p className="font-bold">Pay with Bank Mega ATM</p>
              </div>
              <ol className="list-insid border-ghost-white2 flex list-decimal flex-col space-y-3 border-b-8 px-12 pt-4 pb-6 text-sm">
                {data.map((text: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: text }} />
                ))}
              </ol>

              <h1 className="mx-10 my-4 font-semibold">Pay with M-Smile</h1>
              <ol className="list-insid border-ghost-white2 flex list-decimal flex-col space-y-3  px-12 text-sm ">
                {msmile.map((text: string, i: number) => (
                  <li key={i}>{text}</li>
                ))}
              </ol>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default ModalHowToPay;
