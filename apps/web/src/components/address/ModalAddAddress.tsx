import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useState } from 'react';
import Select from './Select';
import Maps from '../../assets/images/add-maps.jpg';

const dataSelect = [
  {
    id: 1,
    name: 'All',
    label: 'All',
  },
  {
    id: 2,
    name: 'Face',
    label: 'Face',
  },
  {
    id: 3,
    name: 'Foundation',
    label: 'Foundation',
  },
];

const ModalAddAddress = ({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
}) => {
  const [addressName, setAddressName] = useState<string>('');
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="py-5s w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white px-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative px-5 pt-10 text-center text-lg font-semibold"
                >
                  <span>ADD NEW ADDRESS</span>
                  <i
                    className="ico-close-circle absolute top-5 right-0 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-5 space-y-3.5">
                  <div>
                    <Image src={Maps} width={494} height={146} alt="maps" />
                  </div>
                  <div>
                    <label htmlFor="addressname" className="space-y-1">
                      <span className="text-xs tracking-wider">
                        Address Name
                      </span>
                      <input
                        type="text"
                        className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                        id="addressname"
                        placeholder="Example: Home"
                        onChange={(e) => setAddressName(e.target.value)}
                        value={addressName}
                      />
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Recipient’s Name
                        </span>
                        <input
                          type="text"
                          className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                          id="addressname"
                          placeholder="Enter recipient’s name"
                          onChange={(e) => setAddressName(e.target.value)}
                          value={addressName}
                        />
                      </label>
                    </div>
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Mobile Number
                        </span>
                        <input
                          type="text"
                          className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                          id="addressname"
                          placeholder="Example: 081012345678"
                          onChange={(e) => setAddressName(e.target.value)}
                          value={addressName}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">Province</span>
                        <Select dataSelect={dataSelect} />
                      </label>
                    </div>
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">City</span>
                        <Select dataSelect={dataSelect} />
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">District</span>
                        <Select dataSelect={dataSelect} />
                      </label>
                    </div>
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Subdistrict
                        </span>
                        <Select dataSelect={dataSelect} />
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Postal Code
                        </span>
                        <input
                          type="text"
                          className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                          id="addressname"
                          placeholder="Example: 12790"
                          onChange={(e) => setAddressName(e.target.value)}
                          value={addressName}
                        />
                      </label>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                  <div>
                    <label htmlFor="addressDetails">
                      <span className="text-xs tracking-wider">
                        Address Details
                      </span>
                      <textarea
                        id="addressDetails"
                        className="border-american-silver h-[70px] w-full rounded border bg-white py-3.5 px-3.5 text-sm text-sm focus:outline-none"
                        placeholder="Enter your full address with tower/house number and other delivery information (e.g Unit A18 or Drop at Front Desk)"
                        value={addressName}
                        onChange={(e) => setAddressName(e.target.value)}
                      />
                    </label>
                    <p className="mt-1 text-xs tracking-wider">
                      Enter your full address with tower/house number and other
                      delivery information (e.g Unit A18 or Drop at Front Desk)
                    </p>
                  </div>
                </div>
                <div className="mb-7 mt-10 flex justify-center space-x-5">
                  <div
                    className="border-pink-primary text-pink-primary flex w-[206px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide"
                    onClick={closeModal}
                  >
                    <span>Cancel</span>
                  </div>
                  <div className="bg-pink-primary flex w-[206px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white">
                    <span>Save</span>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ModalAddAddress;
