'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import {
  ModalAddAddress,
  ModalEditAddress,
  ModalRemove,
  Toolbar,
  Menu,
  ModalMap,
  ModalMapEdit,
} from '@components/app/account/address';
import emptyImg from '@assets/images/ico-empty-address.svg';
import { useAddressList } from '@hooks/useAddressList';
import { useAddressListMutate } from '@hooks/useAddressList/Mutate';
import { FDLoading } from '@components/app/commons';
import { useAddressListDelete } from '@hooks/useAddressList/MutateDelete';
import {
  useLoadScript,
  Autocomplete,
  GoogleMap,
  MarkerF,
} from '@react-google-maps/api';
import { DISTRICT_URL, GOOGLE_MAP_FD_KEY } from '@constants/env';

/**
 * Address component <Address component on the address page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */

// FIXME: props any

const Address = () => {
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

  // for open modal add address
  const closeModal = () => {
    setOpenModal(false);
  };

  const openModalFunc = () => {
    setOpenModal(true);
  };
  // ---

  // state loading page
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  // ---

  // fetch query data address list
  const [dataAddressState, setDataAddressState] = useState<any>([]);
  const {
    data: dataAddress,
    isLoading: isLoadingAddress,
    refetch: refetchAddressList,
  } = useAddressList();
  useEffect(() => {
    setDataAddressState(dataAddress);
  }, [dataAddress]);
  // ---

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
        setDataSubDistrictCurrent({}),
        setDataAddressCurrent({
          ...dataAddressCurrent,
          [params]: item.name,
          subdistrict: '',
          area_code: '',
        }));
    } else if (params === 'subdistrict') {
      // reset data subdistrict
      item &&
        setDataAddressCurrent({
          ...dataAddressCurrent,
          [params]: item.name,
          area_code: item.id,
        });
    }
  };
  // ---

  // default lat lang
  const [defaultLatLng, setDefaultLatLng] = useState<any>({
    lat: -6.1753924,
    lng: 106.8271528,
  });

  return (
    <div>
      <main className="container mx-auto mt-8 xl:max-w-screen-xl">
        <div className="flex">
          <Menu />
          <div className="w-3/4 pl-8">
            <div className="">
              <h1 className="text-22 font-semibold tracking-wider">
                MY ADDRESSES
              </h1>
              <div className="border-gray-light mt-5 rounded-2xl border py-7">
                <div className="px-5">
                  <Toolbar
                    openModalFunc={openModalFunc}
                    setDataAddressState={setDataAddressState}
                    dataAddressState={dataAddressState}
                    dataAddress={dataAddress}
                  />
                </div>
                <div className="mt-7 border-t px-5">
                  {isLoadingAddress ? (
                    <div>Loading</div>
                  ) : dataAddressState?.length > 0 ? (
                    <div className="mt-5">
                      <List
                        dataAddress={dataAddressState}
                        refetchAddressList={refetchAddressList}
                        setLoadingPage={setLoadingPage}
                        isLoaded={isLoaded}
                      />
                    </div>
                  ) : (
                    <div>
                      <Empty />
                    </div>
                  )}
                </div>
              </div>
            </div>
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
          </div>
        </div>
        {loadingPage && <FDLoading />}
      </main>
    </div>
  );
};

/**
 * List component <List component on the address page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TList}
 * {
 *  dataAddress: any; (get data address list)
    refetchAddressList: any; (refetch action on react query address list)
    setLoadingPage: any; (for loading show)
    isLoaded: any; (isloaded, callback from google maps)
 * }
 * @returns {React.ReactElement}
 */

type TList = {
  dataAddress: any;
  refetchAddressList: any;
  setLoadingPage: any;
  isLoaded: any;
};

const List = ({
  dataAddress,
  refetchAddressList,
  setLoadingPage,
  isLoaded,
}: TList) => {
  // for open modal remove
  const [codeCurrent, setCodeCurrent] = useState<string>('');
  const [openModalRemove, setOpenModalRemove] = useState<boolean | undefined>(
    false
  );
  const closeModalRemove = () => {
    setOpenModalRemove(false);
  };

  const openModalRemoveFunc = (code: string) => {
    setCodeCurrent(code);
    setOpenModalRemove(true);
  };
  // ---

  // for open modal edit
  const [dataCurrent, setDataCurrent] = useState<any>();
  const [openModalEdit, setOpenModalEdit] = useState<boolean | undefined>(
    false
  );
  const closeModalEdit = () => {
    setOpenModalEdit(false);
  };

  const openModalEditFunc = (data: any, index: number) => {
    setDataCurrent({ ...data, primary: index === 0 });
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

  // mutate DELETE address
  const { mutate: deleteAddress } = useAddressListDelete();
  // ---

  // fn delete address
  const deleteAddressFn = () => {
    setLoadingPage(true);
    const params = [
      {
        code: codeCurrent,
      },
    ];
    deleteAddress(params, {
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
  // ---

  return (
    <div className="space-y-6">
      {dataAddress?.map((item: any, index: number) => {
        return (
          <div
            key={item.code}
            className={`${
              index === 0 ? 'border-teal-primary' : ''
            } rounded-2xl border py-5 px-3.5 shadow`}
          >
            <div
              className={`${
                index === 0 ? 'justify-start' : 'justify-between'
              } relative flex`}
            >
              <strong className="mr-2 text-sm font-medium">{item.name}</strong>
              {index === 0 && (
                <>
                  <span className="bg-teal-primary rounded py-1 px-2.5 text-sm font-semibold text-white">
                    Primary
                  </span>
                  <i className="ico-address-active absolute right-0 top-0"></i>
                </>
              )}
              {index !== 0 && (
                <span
                  className="bg-pink-primary cursor-pointer rounded py-1 px-2.5 text-sm font-semibold text-white"
                  onClick={() => setAsPrimaryFn(item)}
                >
                  Set as Primary
                </span>
              )}
            </div>
            <div>
              <span className="font-semibold">{item.recipient}</span>
            </div>
            <div>
              <span className="text-black-light">{item.address}</span>
            </div>
            <div className="text-black-light text-sm">{item.phone}</div>
            <div className="flex justify-end">
              <div className="flex items-center space-x-5">
                <span
                  className="text-black-light cursor-pointer text-sm font-semibold"
                  onClick={() => openModalRemoveFunc(item.code)}
                >
                  Delete Address
                </span>
                <span
                  className="text-pink-primary cursor-pointer text-xs font-semibold tracking-wider"
                  onClick={() => openModalEditFunc(item, index)}
                >
                  Edit
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <ModalRemove
        isModalOpen={openModalRemove}
        closeModal={closeModalRemove}
        deleteAddressFn={deleteAddressFn}
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
    </div>
  );
};

/**
 * Empty component <Empty component on the address page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */
const Empty = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20">
        <Image
          src={emptyImg}
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
