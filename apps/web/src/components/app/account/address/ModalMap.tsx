import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { DISTRICT_URL, GOOGLE_MAP_FD_KEY } from '@constants/env';

type TModalMap = {
  isModalOpen: boolean | undefined;
  closeModal: () => void;
  dataAddressCurrent: any;
  setDataAddressCurrent: any;
  isLoaded: any;
  Autocomplete: any;
  GoogleMap: any;
  MarkerF: any;
  setDataProvince: any;
  setDataCity: any;
  setDataDistrict: any;
  setDataSubDistrict: any;
  setDataProvinceCurrent: any;
  setDataCityCurrent: any;
  setDataDistrictCurrent: any;
  setDataSubDistrictCurrent: any;
  defaultLatLng: any;
  setDefaultLatLng: any;
  setLoadingPage: any;
};
/**
 * ModalAddAddress component <ModalAddAddress component on the address page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TModalMap}
 * {
 *  isModalOpen: boolean | undefined; (for open modal map)
    closeModal: () => void; (close modal map)
    dataAddressCurrent: any; (data address current for payload add address)
    setDataAddressCurrent: any; (set data address current for payload add address)
    isLoaded: any; (is loaded when google maps ready)
    Autocomplete: any; (component autocomplete for search suggestion)
    GoogleMap: any; (component googlemap for show map)
    MarkerF: any; (component for show marker)
    setDataProvince: any; (set data province for data select province)
    setDataCity: any; (set data city for data select city)
    setDataDistrict: any; (set data district for data select district)
    setDataSubDistrict: any; (set data subdistrict for data select subdistrict)
    setDataProvinceCurrent: any; (set data province current for current province)
    setDataCityCurrent: any; (set data city current for current city)
    setDataDistrictCurrent: any; (set data district current for current district)
    setDataSubDistrictCurrent: any; (set data subdistrict current for current subdistrict)
    defaultLatLng: any; (get default lat lang)
    setDefaultLatLng: any; (set default lat lang)
    setLoadingPage: any; (set loading show)
 * }
 * @returns {React.ReactElement}
 */

const ModalMap = ({
  isModalOpen,
  closeModal,
  dataAddressCurrent,
  setDataAddressCurrent,
  isLoaded,
  Autocomplete,
  GoogleMap,
  MarkerF,
  setDataProvince,
  setDataCity,
  setDataDistrict,
  setDataSubDistrict,
  setDataProvinceCurrent,
  setDataCityCurrent,
  setDataDistrictCurrent,
  setDataSubDistrictCurrent,
  defaultLatLng,
  setDefaultLatLng,
  setLoadingPage,
}: TModalMap) => {
  const [dataLoc, setDataLoc] = useState<any>({ label: '', address: '' });
  const [autocomplete, setAutocomplete] = useState<any>();

  // load place for autocomplete
  const onLoadPlace = (autocomplete: any) => {
    setAutocomplete(autocomplete);
  };
  const onPlaceChanged = async () => {
    if (autocomplete !== null) {
      const dataPlace = autocomplete?.getPlace();
      if (dataPlace) {
        const latLang = JSON.parse(JSON.stringify(dataPlace.geometry.location));
        const response = await handleSelect(latLang);
        await setDataMap(response?.['results'][0], dataPlace.geometry.location);
      }
    }
  };
  // ---

  // on click or ondrag get place detail
  const onClickMarker = async (marker: any) => {
    const latLang = JSON.parse(JSON.stringify(marker.latLng));
    const response = await handleSelect(latLang);
    await setDataMap(response?.['results'][0], marker.latLng);
  };
  // ---

  // fn for set data
  const setDataMap = async (response: any, marker: any) => {
    setLoadingPage(true);
    const longName = searchLongName(response);
    const postal_code = searchPostalCode(response);

    // data current province, city,district,subdistrict
    setDataProvinceCurrent({});
    setDataCityCurrent({});
    setDataDistrictCurrent({});
    setDataSubDistrictCurrent({});
    // ---

    // get data province
    let province = { id: 0, name: '' };
    province.name = searchProvince(response);
    province = await getProvince(province.name);
    // check if has province and call fn city
    let city = { id: 0, name: '' };
    if (province && province.id !== 0) {
      city.name = searchCity(response);
      city = await getCity(province.id, city.name);
    }
    // check if has city and call fn district
    let district = { id: 0, name: '' };
    if (city.id !== 0) {
      district.name = searchDistrict(response);
      district = await getDistrict(city.id, district.name);
    }

    // check if has district and call fn subdistrict
    let subdistrict = { id: 0, name: '' };
    if (district.id !== 0) {
      subdistrict.name = searchSubDistrict(response);
      subdistrict = await getSubDistrict(district.id, subdistrict.name);
    }

    const address = response?.['formatted_address'];
    setDataLoc({
      label: longName,
      address: address,
    });
    setDataAddressCurrent({
      ...dataAddressCurrent,
      address: address,
      postal_code: postal_code,
      province: province.name,
      city: city.name,
      district: district.name,
      subdistrict: subdistrict.name,
      area_code: subdistrict.id,
    });
    setDefaultLatLng(marker);
    setLoadingPage(false);
  };
  // ---

  // search long name
  const searchLongName = (response: any) => {
    const result = response.address_components.find((e: any) => {
      return (
        e.types.includes('route') ||
        e.types.includes('administrative_area_level_4')
      );
    });
    return result?.short_name || result?.long_name || '';
  };
  // ---
  // search postal code
  const searchPostalCode = (response: any) => {
    const result = response.address_components.find((e: any) => {
      return e.types.includes('postal_code') || '';
    });
    return result?.short_name || result?.long_name || '';
  };
  // ---
  // search province
  const searchProvince = (response: any) => {
    const result = response.address_components.find((e: any) => {
      return e.types.includes('administrative_area_level_1') || '';
    });
    return result?.short_name || result?.long_name || '';
  };
  const getProvince = async (value: string) => {
    value = normalizeText(value);
    let result;
    await fetch(`${DISTRICT_URL}/provinces.json`)
      .then((response) => response.json())
      .then((data) => {
        result = data;
        setDataProvince(data);
      });

    const dataResult = filterProvince(value, result);
    return dataResult;
  };
  const filterProvince = (value: string, data: any) => {
    const result = data.find((item: any) =>
      value !== '' ? item.name.toLowerCase().includes(value) : false
    );
    // set data province current for select manual on modaladdadress
    result ? setDataProvinceCurrent(result) : setDataProvinceCurrent({});
    // ---
    return result || false;
  };
  // ---
  // search city
  const searchCity = (response: any) => {
    const result = response.address_components.find((e: any) => {
      return e.types.includes('administrative_area_level_2') || '';
    });
    return result?.short_name || result?.long_name || '';
  };
  const getCity = async (id: number, city: string) => {
    city = normalizeText(city);
    let dataCurrent: any = [];
    await fetch(`${DISTRICT_URL}/regencies/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.find((e: any) =>
          e.name.toLowerCase().includes(city)
        );
        dataCurrent = filterData;
        setDataCity(data);
      });
    // set data city current for select manual on modaladdadress
    dataCurrent ? setDataCityCurrent(dataCurrent) : setDataCityCurrent({});
    // ---
    return dataCurrent
      ? { id: dataCurrent.id, name: dataCurrent.name }
      : { id: 0, name: '' };
  };
  // ---
  // search district
  const searchDistrict = (response: any) => {
    const result = response.address_components.find((e: any) => {
      return e.types.includes('administrative_area_level_3') || '';
    });
    return result?.short_name || result?.long_name || '';
  };
  const getDistrict = async (id: number, city: string) => {
    city = normalizeText(city);
    let dataCurrent: any = [];
    await fetch(`${DISTRICT_URL}/districts/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.find((e: any) =>
          e.name.toLowerCase().includes(city)
        );
        dataCurrent = filterData;
        setDataDistrict(data);
      });
    // set data district current for select manual on modaladdadress
    dataCurrent
      ? setDataDistrictCurrent(dataCurrent)
      : setDataDistrictCurrent({});
    // ---
    return dataCurrent
      ? { id: dataCurrent.id, name: dataCurrent.name }
      : { id: 0, name: '' };
  };
  // ---
  // search subdistrict
  const searchSubDistrict = (response: any) => {
    const result = response.address_components.find((e: any) => {
      return e.types.includes('administrative_area_level_4') || '';
    });
    return result?.short_name || result?.long_name || '';
  };
  const getSubDistrict = async (id: number, city: string) => {
    city = normalizeText(city);
    let dataCurrent: any = [];
    await fetch(`${DISTRICT_URL}/villages/${id}.json`)
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.find((e: any) =>
          e.name.toLowerCase().includes(city)
        );
        dataCurrent = filterData;
        setDataSubDistrict(data);
      });
    // set data district current for select manual on modaladdadress
    dataCurrent
      ? setDataSubDistrictCurrent(dataCurrent)
      : setDataSubDistrictCurrent({});
    // ---
    return dataCurrent
      ? { id: dataCurrent.id, name: dataCurrent.name }
      : { id: 0, name: '' };
  };
  // ---

  // normalize text
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .replaceAll('daerah khusus ibukota', '')
      .replaceAll('daerah istimewa', '')
      .replaceAll('dki', '')
      .replaceAll('di', '')
      .replaceAll('kota', '')
      .replaceAll('kecamatan', '')
      .replaceAll('kelurahan', '')
      .replaceAll('kel.', '')
      .replaceAll('kec.', '')
      .trim();
  };
  // fn fetch for get place detail
  const handleSelect = async (latLng: any) => {
    let result;
    await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat},${latLng.lng}&sensor=false&region=ID&language=id&key=${GOOGLE_MAP_FD_KEY}`
    )
      .then((response) => response.json())
      .then((data) => (result = data));

    return result;
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
              <Dialog.Panel className="w-full max-w-[550px] transform overflow-hidden rounded-2xl bg-white py-5 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="relative px-5 pt-10 text-center text-lg font-semibold"
                >
                  <span>PIN LOCATION</span>
                  <i
                    className="ico-close-circle absolute top-5 right-5 cursor-pointer"
                    onClick={closeModal}
                  />
                </Dialog.Title>
                <div className="mt-5">
                  <div className="px-5">
                    <span
                      className="text-pink-primary flex cursor-pointer items-center font-semibold"
                      onClick={closeModal}
                    >
                      <i className="ico-arrow-left-pink mr-3" />
                      Back
                    </span>
                  </div>
                  <div className="mt-5 h-[500px] w-full">
                    {isLoaded ? (
                      <div>
                        <GoogleMap
                          zoom={15}
                          center={defaultLatLng}
                          mapContainerClassName="w-full h-[500px]"
                          onClick={onClickMarker}
                        >
                          {defaultLatLng && (
                            <>
                              <Autocomplete
                                onLoad={onLoadPlace}
                                onPlaceChanged={onPlaceChanged}
                              >
                                <input
                                  type="text"
                                  placeholder="Find a location"
                                  className="absolute left-1/2 top-[20px] -ml-[220px] h-[50px] w-[450px] rounded border px-5"
                                />
                              </Autocomplete>
                              <MarkerF
                                position={defaultLatLng}
                                draggable={true}
                                onDragEnd={onClickMarker}
                              />
                            </>
                          )}
                        </GoogleMap>
                      </div>
                    ) : (
                      <div className="h-full w-full">Loading</div>
                    )}
                  </div>
                  <div className="mt-5 mb-7 flex px-5">
                    <div className="flex-1 pr-3">
                      <div className="flex flex-col">
                        <strong className="text-lg font-semibold tracking-wider">
                          {dataLoc.label}
                        </strong>
                        <span className="text-black-light tracking-wider">
                          {dataLoc.address}
                        </span>
                      </div>
                    </div>
                    <div>
                      <div
                        className="bg-pink-primary flex w-[168px] cursor-pointer justify-center rounded py-4 text-sm font-semibold tracking-wider text-white"
                        onClick={closeModal}
                      >
                        <span>Use this Location</span>
                      </div>
                    </div>
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

export default ModalMap;
