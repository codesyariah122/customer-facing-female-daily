import React, { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { AddressInfo } from './addressInfo';
import { GetCustomerAddresses } from '@utils/app/checkout/index';
import ModalUnderMaintenance from '@components/Global/ModalUnderMaintenance';
import {
  useLoadScript,
  Autocomplete,
  GoogleMap,
  MarkerF,
} from '@react-google-maps/api';
import { DISTRICT_URL, GOOGLE_MAP_FD_KEY } from '@constants/env';
import { useAddressList } from '@hooks/useAddressList';
import {
  ModalMap,
  ModalAddAddress,
  ModalEditAddress,
  ModalMapEdit,
} from '@components/app/account/address';
import { useAddressListMutate } from '@hooks/useAddressList/Mutate';

/**
 * IModalGetAddressProps interface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface IModalGetAddressProps {
  datasource?: any[];
  selectedAddress?: any;
  merchantCode?: string;
  isModalOpen?: boolean;
  closeModal: (e?: any, merchantCode?: string) => void;
  selectAddressAction: (
    event: React.FormEvent<HTMLDivElement>,
    address: any,
    merchantCode: string
  ) => void;
  changePrimaryAddress: (
    event: React.FormEvent<HTMLDivElement>,
    address: any
  ) => void;
}

/**
 * ModalGetAddress component <show popup customer address list>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
export function ModalGetAddress(
  props: IModalGetAddressProps
): React.ReactElement {
  const [modalMaintain, setModalMaintain] = useState(false);

  const closeModalMaintain = () => {
    setModalMaintain(false);
  };

  const openModalMaintain = () => {
    setModalMaintain(true);
  };

  const [searchInput, setSearchInput] = useState('');

  const inputSearch = (e: any) => {
    setSearchInput(e.target.value);
  };

  const [addressList, setAddressList] = useState<any>([]);
  const [primaryCode, setPrimaryCode] = useState<any>([]);

  useEffect(() => {
    if (props.datasource) {
      setPrimaryCode(props.datasource[0]?.code);
      const datas = props.datasource.filter((address) => {
        return address.name.includes(searchInput);
      });
      setAddressList(datas);
    }
  }, [props.datasource, searchInput]);

  const [openModal, setOpenModal] = useState<boolean | undefined>(false);
  const [dataAddressCurrent, setDataAddressCurrent] = useState<any>({
    name: '',
    recipient: '',
    phone: '',
    province: '',
    city: '',
    district: '',
    subdistrict: '',
    postal_code: '',
    address: '',
  });
  const [dataProvince, setDataProvince] = useState<any>([]);
  const [dataProvinceCurrent, setDataProvinceCurrent] = useState<any>({});
  const [dataCity, setDataCity] = useState<any>([]);
  const [dataCityCurrent, setDataCityCurrent] = useState<any>({});
  const [dataDistrict, setDataDistrict] = useState<any>([]);
  const [dataDistrictCurrent, setDataDistrictCurrent] = useState<any>({});
  const [dataSubDistrict, setDataSubDistrict] = useState<any>([]);
  const [dataSubDistrictCurrent, setDataSubDistrictCurrent] = useState<any>({});

  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = () => {
    setOpenModal(true);
  };

  // state loading page
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  // ---

  // fetch query data address list
  const {
    data: dataAddress,
    isLoading: isLoadingAddress,
    refetch: refetchAddress,
  } = useAddressList();
  // ---

  const refetchAddressList = () => {
    refetchAddress();
  };

  // for open modal map
  const [openModalMap, setOpenModalMap] = useState<boolean | undefined>(false);
  const closeModalMap = () => {
    setOpenModalMap(false);
  };

  const openModalMapFunc = () => {
    setOpenModalMap(true);
  };
  // ---

  // LOAD GOOGLE MAPS
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_FD_KEY,
    libraries: ['places'],
  });
  // ---

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
        setDataDistrictCurrent({}),
        setDataSubDistrictCurrent({}),
        setDataSubDistrict([])),
        setDataAddressCurrent({
          ...dataAddressCurrent,
          [params]: item.name,
          district: '',
          subdistrict: '',
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
        setDataSubDistrictCurrent({}),
        setDataAddressCurrent({
          ...dataAddressCurrent,
          [params]: item.name,
          subdistrict: '',
        }));
    } else if (params === 'subdistrict') {
      // reset data subdistrict
      item &&
        setDataAddressCurrent({
          ...dataAddressCurrent,
          [params]: item.name,
        });
    }
  };
  // ---

  // default lat lang
  const [defaultLatLng, setDefaultLatLng] = useState<any>({
    lat: -6.1753924,
    lng: 106.8271528,
  });

  // for open modal edit
  const [dataCurrent, setDataCurrent] = useState<any>();
  const [openModalEdit, setOpenModalEdit] = useState<boolean | undefined>(
    false
  );
  const closeModalEdit = () => {
    setOpenModalEdit(false);
  };

  const openModalEditFunc = (data: any, index: number) => {
    setDataCurrent({ ...data, primary: primaryCode == data.code });
    setOpenModalEdit(true);
  };
  // ---

  // mutate update address
  const { mutate: updateAddress } = useAddressListMutate();
  // ---

  // fn for set address as primary
  const setAsPrimaryFn = (data: any) => {
    setLoadingPage(true);
    const params = [
      {
        ...data,
        primary: true,
      },
    ];
    updateAddress(params, {
      onSuccess() {
        refetchAddressList();
        setLoadingPage(false);
      },
    });
  };
  // ---

  // for open modal map edit
  const [openModalMapEdit, setOpenModalMapEdit] = useState<boolean | undefined>(
    false
  );
  const closeModalMapEdit = () => {
    setOpenModalMapEdit(false);
  };

  const openModalMapEditFunc = (code: string) => {
    setOpenModalMapEdit(true);
  };
  // ---

  // fn use this location on modal map
  const [dataUseThisLoc, setDataUseThisLoc] = useState<boolean>(false);
  const useThisLoc = (params: any, marker: any) => {
    const newMarker = JSON.parse(JSON.stringify(marker));
    const newDataCurrent = {
      ...params,
      latitude: newMarker.lat,
      longitude: newMarker.lng,
    };
    setDataCurrent(newDataCurrent);
    setDataUseThisLoc(true);
  };

  return (
    <>
      <Transition appear show={props.isModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => props.closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25"></div>
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
                <Dialog.Panel className="max-w-[498px] transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-8 text-center">
                    <div className="mt-6">
                      <div className="w-full">
                        <div className="flex justify-center">
                          <div className="font-lg pb-8 font-semibold">
                            MY ADDRESSES
                          </div>
                          <div
                            onClick={() => props.closeModal()}
                            className="full-rounded justify-right absolute top-[20px] right-[20px] flex cursor-pointer text-sm font-semibold tracking-wide"
                          >
                            <i className="ico-close-circle"></i>
                          </div>
                        </div>
                        <div className="relative">
                          <span className="absolute left-9 top-3">
                            <i className="ico-search-checkout" />
                          </span>
                          <input
                            type="text"
                            value={searchInput}
                            onInput={(e) => inputSearch(e)}
                            className="bg-whte border-gray-light mx-4 h-[40px] w-[450px] rounded-lg border pl-8 text-sm focus:outline-none "
                            placeholder="Search addresses"
                          />
                        </div>
                        <div
                          onClick={openModalFunc}
                          className="align-center mx-8 my-4 flex h-[66px] cursor-pointer place-content-center items-center justify-center border border-dashed text-sm text-sm text-gray-500	"
                        >
                          <span>+ Add New Address</span>
                        </div>
                        <div className="space-y-3">
                          {addressList?.map((value: any, addressIndex: any) => (
                            <div key={addressIndex}>
                              <div
                                className={`${
                                  props.selectedAddress.code == value.code
                                    ? 'border-teal-500'
                                    : 'border-grey-500'
                                } relative mx-8 rounded-xl border-2 p-2`}
                              >
                                <div className="text-xs">
                                  <div className="px-2 text-left">
                                    <div>
                                      <AddressInfo
                                        isPrimary={primaryCode == value.code}
                                        addressTitle={value.name}
                                        addressCustomerName={value.recipient}
                                        addressCustomerDetail={value.address}
                                        addressCustomerPhone={value.phone}
                                      />
                                    </div>
                                    <div className="flex justify-between">
                                      <div className="flex items-center">
                                        <div
                                          onClick={() =>
                                            openModalEditFunc(
                                              value,
                                              addressIndex
                                            )
                                          }
                                          className="mr-2 cursor-pointer font-semibold text-teal-600"
                                        >
                                          Edit
                                        </div>
                                        {primaryCode != value.code ? (
                                          <div className="border-l-2">
                                            <div
                                              onClick={(e) =>
                                                props.changePrimaryAddress(
                                                  e,
                                                  value
                                                )
                                              }
                                              className="mx-2 cursor-pointer font-semibold text-teal-600"
                                            >
                                              Set as Primary
                                            </div>
                                          </div>
                                        ) : (
                                          ''
                                        )}
                                      </div>
                                      {props.selectedAddress.code !=
                                        value.code && (
                                        <div
                                          onClick={(e) =>
                                            props.selectAddressAction(
                                              e,
                                              value,
                                              props.merchantCode
                                                ? props.merchantCode
                                                : ''
                                            )
                                          }
                                          className="bg-pink-primary h-fit cursor-pointer rounded p-2 text-center text-xs font-semibold tracking-wide text-white"
                                        >
                                          Select Address
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                {props.selectedAddress.code == value.code ? (
                                  <i className="ico-verified-green absolute right-2 top-1"></i>
                                ) : (
                                  ''
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
          <ModalUnderMaintenance
            isModalOpen={modalMaintain}
            closeModal={closeModalMaintain}
          />

          <ModalAddAddress
            isModalOpen={openModal}
            closeModal={closeModal}
            openModalMapFunc={openModalMapFunc}
            dataAddressCurrent={dataAddressCurrent}
            setDataAddressCurrent={setDataAddressCurrent}
            dataProvince={dataProvince}
            dataCity={dataCity}
            dataDistrict={dataDistrict}
            dataSubDistrict={dataSubDistrict}
            dataProvinceCurrent={dataProvinceCurrent}
            setDataProvinceCurrent={setDataProvinceCurrent}
            dataCityCurrent={dataCityCurrent}
            setDataCityCurrent={setDataCityCurrent}
            dataDistrictCurrent={dataDistrictCurrent}
            setDataDistrictCurrent={setDataDistrictCurrent}
            dataSubDistrictCurrent={dataSubDistrictCurrent}
            setDataSubDistrictCurrent={setDataSubDistrictCurrent}
            defaultLatLng={defaultLatLng}
            getDataDistrictSubDistrict={getDataDistrictSubDistrict}
            setLoadingPage={setLoadingPage}
            refetchAddressList={refetchAddressList}
          />
          <ModalMap
            isModalOpen={openModalMap}
            closeModal={closeModalMap}
            dataAddressCurrent={dataAddressCurrent}
            setDataAddressCurrent={setDataAddressCurrent}
            isLoaded={isLoaded}
            Autocomplete={Autocomplete}
            GoogleMap={GoogleMap}
            MarkerF={MarkerF}
            setDataProvince={setDataProvince}
            setDataCity={setDataCity}
            setDataDistrict={setDataDistrict}
            setDataSubDistrict={setDataSubDistrict}
            setDataProvinceCurrent={setDataProvinceCurrent}
            setDataCityCurrent={setDataCityCurrent}
            setDataDistrictCurrent={setDataDistrictCurrent}
            setDataSubDistrictCurrent={setDataSubDistrictCurrent}
            defaultLatLng={defaultLatLng}
            setDefaultLatLng={setDefaultLatLng}
            setLoadingPage={setLoadingPage}
          />

          <ModalEditAddress
            isModalOpen={openModalEdit}
            closeModal={closeModalEdit}
            dataCurrent={dataCurrent}
            openModalMapEditFunc={openModalMapEditFunc}
            setDataCurrent={setDataCurrent}
            setLoadingPage={setLoadingPage}
            refetchAddressList={refetchAddressList}
            dataUseThisLoc={dataUseThisLoc}
            setDataUseThisLoc={setDataUseThisLoc}
          />
          <ModalMapEdit
            isModalOpen={openModalMapEdit}
            closeModal={closeModalMapEdit}
            dataCurrent={dataCurrent}
            isLoaded={isLoaded}
            Autocomplete={Autocomplete}
            GoogleMap={GoogleMap}
            MarkerF={MarkerF}
            setLoadingPage={setLoadingPage}
            useThisLoc={useThisLoc}
          />
        </Dialog>
      </Transition>
    </>
  );
}

export function ModalGetCoupon(): React.ReactElement {
  return <></>;
}
