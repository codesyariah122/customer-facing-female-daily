import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import { SelectCustomEdit } from '@components/app/account/address';
import Maps from '@assets/images/add-maps.jpg';
import { DISTRICT_URL } from '@constants/env';
import { useAddressListMutate } from '@hooks/useAddressList/Mutate';

type TModalEditAddress = {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
  dataCurrent: any;
  openModalMapEditFunc: any;
  setDataCurrent: any;
  setLoadingPage: any;
  refetchAddressList: any;
  dataUseThisLoc: any;
  setDataUseThisLoc: any;
};
/**
 * ModalEditAddress component <ModalEditAddress component on the address page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TModalEditAddress}
 * {
 *  isModalOpen (state for open modal)
 *  closeModal (function for close modal)
 * }
 * @returns {React.ReactElement}
 */

const ModalEditAddress = ({
  isModalOpen,
  closeModal,
  dataCurrent,
  openModalMapEditFunc,
  setDataCurrent,
  setLoadingPage,
  refetchAddressList,
  dataUseThisLoc,
  setDataUseThisLoc,
}: TModalEditAddress) => {
  // const [paramCurrent, setParamCurrent] = useState<any>(dataCurrent);
  const [dataProvince, setDataProvince] = useState<any>([]);
  const [dataProvinceCurr, setDataProvinceCurr] = useState<any>({});
  const [dataCity, setDataCity] = useState<any>([]);
  const [dataCityCurr, setDataCityCurr] = useState<any>({});
  const [dataDistrict, setDataDistrict] = useState<any>([]);
  const [dataDistrictCurr, setDataDistrictCurr] = useState<any>({});
  const [dataSubDistrict, setDataSubDistrict] = useState<any>([]);
  const [dataSubDistrictCurr, setDataSubDistrictCurr] = useState<any>({});

  // useEffect for trigger function for first open modal edit address, for getProvince,get city, get district, get subdistrict
  useEffect(() => {
    const getProvince = async () => {
      await fetch(`${DISTRICT_URL}/provinces.json`)
        .then((response) => response.json())
        .then((data) => {
          setDataProvince(data);
          const result = data.find((item: any) =>
            item.name
              .toLowerCase()
              .includes(dataCurrent?.province.toLowerCase())
          );
          setDataProvinceCurr(result);
          getCity(result.id);
        });
    };
    const getCity = async (id: number) => {
      await fetch(`${DISTRICT_URL}/regencies/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setDataCity(data);
          const result = data.find((item: any) =>
            dataCurrent?.city !== ''
              ? item.name
                  .toLowerCase()
                  .includes(dataCurrent?.city.toLowerCase())
              : {}
          );
          setDataCityCurr(result);
          getDistrict(result.id);
        });
    };
    const getDistrict = async (id: number) => {
      await fetch(`${DISTRICT_URL}/districts/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setDataDistrict(data);
          const result = data.find((item: any) =>
            dataCurrent?.district !== ''
              ? item.name
                  .toLowerCase()
                  .includes(dataCurrent?.district?.toLowerCase())
              : {}
          );
          setDataDistrictCurr(result);
          getSubDistrict(result.id);
        });
    };
    const getSubDistrict = async (id: number) => {
      await fetch(`${DISTRICT_URL}/villages/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setDataSubDistrict(data);
          const result = data.find((item: any) =>
            dataCurrent?.subdistrict !== ''
              ? item.name
                  .toLowerCase()
                  .includes(dataCurrent?.subdistrict?.toLowerCase())
              : {}
          );
          setDataSubDistrictCurr(result);
        });
    };
    dataCurrent?.province !== undefined && isModalOpen && getProvince();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalOpen]);

  // useEffect for trigger function getProvince,get city, get district, get subdistrict
  useEffect(() => {
    // data current province, city,district,subdistrict
    setDataProvinceCurr({});
    setDataCityCurr({});
    setDataDistrictCurr({});
    setDataSubDistrictCurr({});
    // ---
    const getProvince = async () => {
      await fetch(`${DISTRICT_URL}/provinces.json`)
        .then((response) => response.json())
        .then((data) => {
          setDataProvince(data);
          const result = data.find((item: any) =>
            item.name
              .toLowerCase()
              .includes(dataCurrent?.province?.toLowerCase())
          );
          setDataProvinceCurr(result);
          dataCurrent?.city !== '' && getCity(result.id);
        });
    };
    const getCity = async (id: number) => {
      await fetch(`${DISTRICT_URL}/regencies/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setDataCity(data);
          const result = data.find((item: any) =>
            dataCurrent?.city !== ''
              ? item.name
                  .toLowerCase()
                  .includes(dataCurrent?.city?.toLowerCase())
              : {}
          );
          setDataCityCurr(result);
          dataCurrent?.district !== '' && getDistrict(result.id);
        });
    };
    const getDistrict = async (id: number) => {
      await fetch(`${DISTRICT_URL}/districts/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setDataDistrict(data);
          const result = data.find((item: any) =>
            dataCurrent?.district !== ''
              ? item.name
                  .toLowerCase()
                  .includes(dataCurrent?.district?.toLowerCase())
              : {}
          );
          setDataDistrictCurr(result);
          dataCurrent?.subdistrict !== '' && getSubDistrict(result.id);
        });
    };
    const getSubDistrict = async (id: number) => {
      await fetch(`${DISTRICT_URL}/villages/${id}.json`)
        .then((response) => response.json())
        .then((data) => {
          setDataSubDistrict(data);
          const result = data.find((item: any) =>
            dataCurrent?.subdistrict !== ''
              ? item.name
                  .toLowerCase()
                  .includes(dataCurrent?.subdistrict?.toLowerCase())
              : {}
          );
          setDataSubDistrictCurr(result);
        });
    };
    dataCurrent?.province !== undefined &&
      isModalOpen &&
      dataUseThisLoc &&
      getProvince();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataUseThisLoc]);

  const dataChangeFn = (data: any, key: string) => {
    dataCurrent = {
      ...dataCurrent,
      [key]: data,
    };
    setDataCurrent(dataCurrent);
  };

  // fn for get data district and subdistrict when city change
  const getDataDistrictSubDistrict = (params: string, item: any) => {
    if (params === 'city') {
      const getDistrict = async () => {
        await fetch(`${DISTRICT_URL}/districts/${item.id}.json`)
          .then((response) => response.json())
          .then((data) => {
            setDataDistrict(data);
          });
      };
      // reset data district subdistrict
      item &&
        (getDistrict(),
        setDataDistrictCurr({}),
        setDataSubDistrictCurr({}),
        setDataSubDistrict([])),
        setDataCurrent({
          ...dataCurrent,
          [params]: item.name,
          district: '',
          subdistrict: '',
          area_code: '',
        });
    } else if (params === 'district') {
      const getSubDistrict = async () => {
        await fetch(`${DISTRICT_URL}/villages/${item.id}.json`)
          .then((response) => response.json())
          .then((data) => {
            setDataSubDistrict(data);
          });
      };
      // reset data subdistrict
      item &&
        (getSubDistrict(),
        setDataSubDistrictCurr({}),
        setDataCurrent({
          ...dataCurrent,
          [params]: item.name,
          subdistrict: '',
          area_code: '',
        }));
    } else if (params === 'subdistrict') {
      // reset data subdistrict
      item &&
        setDataCurrent({
          ...dataCurrent,
          [params]: item.name,
          area_code: item.id,
        });
    }
  };
  // ---

  // mutate update address
  const { mutate: updateAddress } = useAddressListMutate();
  // ---

  // save edit address
  const editAddress = () => {
    setLoadingPage(true);
    const params = [
      {
        ...dataCurrent,
      },
    ];
    updateAddress(params, {
      onSuccess() {
        closeModal();
        refetchAddressList();
        setLoadingPage(false);
      },
    });
  };
  // ---

  // openModalMap
  const openModalMap = () => {
    openModalMapEditFunc();
    setDataUseThisLoc(false);
  };
  // ---

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
                  <span>EDIT ADDRESS</span>
                  <i
                    className="ico-close-circle absolute top-5 right-0 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-5 space-y-3.5">
                  <div onClick={openModalMap}>
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
                        onChange={(e) => dataChangeFn(e.target.value, 'name')}
                        value={dataCurrent?.name}
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
                          onChange={(e) =>
                            dataChangeFn(e.target.value, 'recipient')
                          }
                          value={dataCurrent?.recipient}
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
                          onChange={(e) =>
                            dataChangeFn(e.target.value, 'phone')
                          }
                          value={dataCurrent?.phone}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">Province</span>
                        {dataCurrent?.province !== '' && (
                          <div
                            className={`${
                              dataCurrent?.province === ''
                                ? ''
                                : 'bg-gray-light'
                            } border-american-silver relative flex h-[50px] w-full cursor-default items-center rounded border bg-white px-2.5 py-1`}
                          >
                            <span
                              className={`${
                                dataCurrent?.province === ''
                                  ? 'text-black-lighter'
                                  : ''
                              } text-sm`}
                            >
                              {`${
                                dataCurrent?.province === ''
                                  ? 'Select province'
                                  : dataCurrent?.province
                              }`}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                              <i className="ico-arrow-down-black " />
                            </span>
                          </div>
                        )}
                      </label>
                    </div>
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">City</span>
                        <SelectCustomEdit
                          dataSelect={dataCity}
                          dataCurrent={dataCityCurr}
                          setDataCurrent={setDataCityCurr}
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
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">District</span>
                        <SelectCustomEdit
                          dataSelect={dataDistrict}
                          dataCurrent={dataDistrictCurr}
                          setDataCurrent={setDataDistrictCurr}
                          keyObject="district"
                          getDataDistrictSubDistrict={
                            getDataDistrictSubDistrict
                          }
                        />
                      </label>
                    </div>
                    <div className="flex-1">
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Subdistrict
                        </span>
                        <SelectCustomEdit
                          dataSelect={dataSubDistrict}
                          dataCurrent={dataSubDistrictCurr}
                          setDataCurrent={setDataSubDistrictCurr}
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
                      <label htmlFor="addressname" className="space-y-1">
                        <span className="text-xs tracking-wider">
                          Postal Code
                        </span>
                        <input
                          type="text"
                          className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm focus:outline-none"
                          id="addressname"
                          placeholder="Example: 12790"
                          onChange={(e) =>
                            dataChangeFn(e.target.value, 'postal_code')
                          }
                          value={dataCurrent?.postal_code}
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
                        onChange={(e) =>
                          dataChangeFn(e.target.value, 'address')
                        }
                        value={dataCurrent?.address}
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
                    className="bg-pink-primary flex w-[206px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white"
                    onClick={editAddress}
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

export default ModalEditAddress;
