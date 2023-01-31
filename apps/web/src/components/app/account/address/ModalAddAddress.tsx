import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import Maps from '@assets/images/add-maps.jpg';
import { useAddressListMutateAdd } from '@hooks/useAddressList/MutateAdd';
import { SelectCustom } from '@components/app/account/address';

type TModalAddAddress = {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
  openModalMapFunc: () => void;
  dataAddressCurrent: any;
  setDataAddressCurrent: any;
  dataProvince: any;
  dataCity: any;
  dataDistrict: any;
  dataSubDistrict: any;
  dataProvinceCurrent: any;
  setDataProvinceCurrent: any;
  dataCityCurrent: any;
  setDataCityCurrent: any;
  dataDistrictCurrent: any;
  setDataDistrictCurrent: any;
  dataSubDistrictCurrent: any;
  setDataSubDistrictCurrent: any;
  defaultLatLng: any;
  getDataDistrictSubDistrict: (params: string, item: any) => void;
  setLoadingPage: any;
  refetchAddressList: any;
};
/**
 * ModalAddAddress component <ModalAddAddress component on the address page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TModalAddAddress}
 * {
 *  isModalOpen: boolean | undefined; (for open modal add address)
    closeModal: () => void; (close modal add address)
    openModalMapFunc: () => void; (fn for open modal map)
    dataAddressCurrent: any; (data address current for payload add address)
    setDataAddressCurrent: any; (set data address current for payload add address)
    dataProvince: any; (data province for data select province)
    dataCity: any; (data city for data select city)
    dataDistrict: any; (data district for data select district)
    dataSubDistrict: any; (data subdistrict for data select subdistrict)
    dataProvinceCurrent: any; (data province current for current province)
    setDataProvinceCurrent: any; (set data province current for current province)
    dataCityCurrent: any; (data city current for current city)
    setDataCityCurrent: any; (set data city current for current city)
    dataDistrictCurrent: any; (data district current for current district)
    setDataDistrictCurrent: any; (set data district current for current district)
    dataSubDistrictCurrent: any; (data subdistrict current for current subdistrict)
    setDataSubDistrictCurrent: any; (set data subdistrict current for current subdistrict)
    defaultLatLng: any; (get default lat lang)
    getDataDistrictSubDistrict: (params: string, item: any) => void; (function for update data city,district and sub district)
    setLoadingPage: any; (loading view)
    refetchAddressList: any; (refetch data address list)
 * }
 * @returns {React.ReactElement}
 */

// TODO: show google maps preview
// TODO: validate error
// FIXME: props any

const ModalAddAddress = ({
  isModalOpen,
  closeModal,
  openModalMapFunc,
  dataAddressCurrent,
  setDataAddressCurrent,
  dataProvince,
  dataCity,
  dataDistrict,
  dataSubDistrict,
  dataProvinceCurrent,
  setDataProvinceCurrent,
  dataCityCurrent,
  setDataCityCurrent,
  dataDistrictCurrent,
  setDataDistrictCurrent,
  dataSubDistrictCurrent,
  setDataSubDistrictCurrent,
  defaultLatLng,
  getDataDistrictSubDistrict,
  setLoadingPage,
  refetchAddressList,
}: TModalAddAddress) => {
  const [isSaveAllowed, setIsSaveAllowed] = useState<boolean>(false);
  const { mutate } = useAddressListMutateAdd();
  const addAddress = () => {
    setLoadingPage(true);
    const defaultLatLngParse = JSON.parse(JSON.stringify(defaultLatLng));
    isSaveAllowed &&
      (dataAddressCurrent = {
        ...dataAddressCurrent,
        primary: false,
        latitude: defaultLatLngParse.lat,
        longitude: defaultLatLngParse.lng,
      }),
      mutate([dataAddressCurrent], {
        onSuccess: () => {
          refetchAddressList();
          setLoadingPage(false);
          closeModal();
        },
      });
  };

  const changeDataAddressCurrent = (e: any, key: string) => {
    setDataAddressCurrent({
      ...dataAddressCurrent,
      [key]: e,
    });
  };

  const validatePhoneNumber = (e: any) => {
    const ALLOWED_CHARS_REGEXP = /[0-9]+/;
    if (!ALLOWED_CHARS_REGEXP.test(e.key)) {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const validateSave = () => {
      const filterObj = Object.entries(dataAddressCurrent).every(
        (item: any) => {
          return item[1] !== '';
        }
      );
      setIsSaveAllowed(filterObj);
    };
    validateSave();
  }, [dataAddressCurrent]);

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
                  <div className="cursor-pointer" onClick={openModalMapFunc}>
                    <Image src={Maps} width={494} height={146} alt="maps" />
                  </div>
                  <div>
                    <label htmlFor="name" className="space-y-1">
                      <span className="text-xs tracking-wider">
                        Address Name
                      </span>
                      <input
                        type="text"
                        className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                        id="name"
                        placeholder="Example: Home"
                        onChange={(e) =>
                          changeDataAddressCurrent(e.target.value, 'name')
                        }
                        value={dataAddressCurrent.name}
                      />
                    </label>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label htmlFor="recipient" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Recipient’s Name
                        </span>
                        <input
                          type="text"
                          className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                          id="recipient"
                          placeholder="Enter recipient’s name"
                          onChange={(e) =>
                            changeDataAddressCurrent(
                              e.target.value,
                              'recipient'
                            )
                          }
                          value={dataAddressCurrent.recipient}
                        />
                      </label>
                    </div>
                    <div className="flex-1">
                      <label htmlFor="phone" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Mobile Number
                        </span>
                        <input
                          type="text"
                          className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                          id="phone"
                          placeholder="Example: 081012345678"
                          onKeyPress={(e) => validatePhoneNumber(e)}
                          onChange={(e) =>
                            changeDataAddressCurrent(e.target.value, 'phone')
                          }
                          value={dataAddressCurrent.phone}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label htmlFor="province" className="space-y-1">
                        <span className="text-xs tracking-wider">Province</span>
                        {dataAddressCurrent.province !== '' ? (
                          <div
                            className={`${
                              dataAddressCurrent.province === ''
                                ? ''
                                : 'bg-gray-light'
                            } border-american-silver relative flex h-[50px] w-full cursor-default items-center rounded border bg-white px-2.5 py-1`}
                          >
                            <span
                              className={`${
                                dataAddressCurrent.province === ''
                                  ? 'text-black-lighter'
                                  : ''
                              } text-sm`}
                            >
                              {`${
                                dataAddressCurrent.province === ''
                                  ? 'Select province'
                                  : dataAddressCurrent.province
                              }`}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <i className="ico-arrow-down-black " />
                            </span>
                          </div>
                        ) : (
                          <SelectCustom
                            dataSelect={dataProvince}
                            dataCurrent={dataProvinceCurrent}
                            setDataCurrent={setDataProvinceCurrent}
                            keyObject="province"
                            getDataDistrictSubDistrict={
                              getDataDistrictSubDistrict
                            }
                          />
                        )}
                      </label>
                    </div>
                    <div className="flex-1">
                      <label htmlFor="city" className="space-y-1">
                        <span className="text-xs tracking-wider">City</span>
                        <SelectCustom
                          dataSelect={dataCity}
                          dataCurrent={dataCityCurrent}
                          setDataCurrent={setDataCityCurrent}
                          keyObject="city"
                          getDataDistrictSubDistrict={
                            getDataDistrictSubDistrict
                          }
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label htmlFor="district" className="space-y-1">
                        <span className="text-xs tracking-wider">District</span>
                        <SelectCustom
                          dataSelect={dataDistrict}
                          dataCurrent={dataDistrictCurrent}
                          setDataCurrent={setDataDistrictCurrent}
                          keyObject="district"
                          getDataDistrictSubDistrict={
                            getDataDistrictSubDistrict
                          }
                        />
                      </label>
                    </div>
                    <div className="flex-1">
                      <label htmlFor="subdistrict" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Subdistrict
                        </span>
                        <SelectCustom
                          dataSelect={dataSubDistrict}
                          dataCurrent={dataSubDistrictCurrent}
                          setDataCurrent={setDataSubDistrictCurrent}
                          keyObject="subdistrict"
                          getDataDistrictSubDistrict={
                            getDataDistrictSubDistrict
                          }
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label htmlFor="postal_code" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Postal Code
                        </span>
                        <input
                          type="text"
                          className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                          id="postal_code"
                          placeholder="Example: 12790"
                          onKeyPress={(e) => validatePhoneNumber(e)}
                          onChange={(e) =>
                            changeDataAddressCurrent(
                              e.target.value,
                              'postal_code'
                            )
                          }
                          value={dataAddressCurrent.postal_code}
                        />
                      </label>
                    </div>
                    <div className="flex-1"></div>
                  </div>
                  <div>
                    <label htmlFor="address">
                      <span className="text-xs tracking-wider">
                        Address Details
                      </span>
                      <textarea
                        id="address"
                        className="border-american-silver h-[70px] w-full rounded border bg-white py-3.5 px-3.5 text-sm text-sm focus:outline-none"
                        placeholder="Enter your full address with tower/house number and other delivery information (e.g Unit A18 or Drop at Front Desk)"
                        onChange={(e) =>
                          changeDataAddressCurrent(e.target.value, 'address')
                        }
                        value={dataAddressCurrent.address}
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
                  <div
                    className={`${
                      isSaveAllowed
                        ? 'bg-pink-primary cursor-pointer'
                        : 'bg-gray-light cursor-none'
                    } flex w-[206px]  justify-center rounded py-3 text-sm font-semibold tracking-wide text-white`}
                    onClick={addAddress}
                  >
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
