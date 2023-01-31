'use client';
import { useEffect, useRef, useState } from 'react';
import {
  Toolbar,
  SubBannerBrands,
  BannerBrands,
  BrandContent,
} from '@components/app/brands';
import { ICategory } from '@utils/app/brands/brandsInterface';
import { brandsData } from '@dummydata/brands';
import {
  useGetBrandpageQuery,
  useGetBrandlistQuery,
} from '@graphql-ctcd/codegen';
import { graphqlRequestClient } from '@graphql-ctcd/graphql-client';
import { useCategory } from '@hooks/useCategory';
/**
 * FIXME:
 * make bold and title case on brand list when search
 * eslint warning on use effect but now i make it disabled
 */
const Brands = () => {
  const [selectedLetter, setSelectedLetter] = useState<string>('A');
  const [selectedCat, setSelectedCat] = useState<any>({
    code: 'all',
    name: 'All',
  });
  const selectedLetterRef = useRef('A');
  const [searchInput, setSearchInput] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ICategory>();
  const [dataBrandList, setDataBrandList] = useState<any>([]);

  // useref for trigger function on component child toolbar
  const [searchOnChildFn, setSearchOnChildFn] = useState<boolean>(false);

  // get query grapghql for brands banner and brand list
  const { data: dataBanner, isFetched: isFetcheddataBanner } =
    useGetBrandpageQuery(graphqlRequestClient);
  const { data: dataBrands, isFetched: isFetcheddataBrands } =
    useGetBrandlistQuery(graphqlRequestClient, {
      code: selectedCat.code,
    });
  const { data: dataCategory, isFetched: isFetchedCategory } = useCategory();

  // init databrands filtersData, filter by letter A
  useEffect(() => {
    const dataBrandsCurrent =
      selectedCat.code === 'all'
        ? dataBrands?.brands
        : dataBrands?.brandsFilter;
    const filterData = () => {
      const filteredData = dataBrandsCurrent?.filter(
        (brand: any) =>
          brand.name.charAt(0).toUpperCase() === selectedLetterRef.current
      );
      setDataBrandList(filteredData);
    };
    filterData();
  }, [dataBrands, selectedCat]);
  // -------------------

  // useeffect for function filter brands list data by click Letter
  const setDataByAlphabet = (value: string) => {
    const dataBrandsCurrent =
      selectedCat.code === 'all'
        ? dataBrands?.brands
        : dataBrands?.brandsFilter;
    const filteredData = dataBrandsCurrent?.filter(
      (brand: any) => brand.name.charAt(0).toUpperCase() === value
    );
    setDataBrandList(filteredData);
    setSelectedLetter(value.charAt(0));
  };
  // -------------------

  // for function setDataBySearch
  const setDataBySearch = (value: string, action: string = 'SEARCH') => {
    let filteredData: any = [];
    const dataBrandsCurrent =
      selectedCat.code === 'all'
        ? dataBrands?.brands
        : dataBrands?.brandsFilter;
    if (action === 'RESET' || value === '') {
      filteredData = dataBrandsCurrent?.filter(
        (brand: any) =>
          brand.name.charAt(0).toUpperCase() === selectedLetterRef.current
      );
      setSelectedLetter(selectedLetterRef.current);
    } else {
      filteredData = dataBrandsCurrent?.filter((brand: any) =>
        brand.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSelectedLetter(value.charAt(0));
    }
    setDataBrandList(filteredData);
  };
  // -------------------

  // for function filterByCategory
  const filterByCategory = (value: any) => {
    //set categry option
    setSelectedCat(value);
    // reset letter to A
    setSelectedLetter(selectedLetterRef.current);
    // reset search
    setSearchOnChildFn(!searchOnChildFn);
  };
  // -------------------

  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="px-5 py-5 md:px-0 md:py-0">
        <h1 className="text-22 mb-2 mt-0 font-semibold tracking-wider md:mt-7">
          Popular Brands
        </h1>
        {isFetcheddataBanner ? (
          <BannerBrands dataBannerBrand={dataBanner} />
        ) : (
          <div>Loading</div>
        )}
        <div className="mt-9">
          {isFetcheddataBanner ? (
            <SubBannerBrands dataSubBannerBrand={dataBanner} />
          ) : (
            <div>Loading</div>
          )}
        </div>
      </div>
      <div className="mt-9">
        {isFetchedCategory ? (
          <Toolbar
            setSearchInput={setSearchInput}
            setDataBySearch={setDataBySearch}
            dataCategory={dataCategory}
            filterByCategory={filterByCategory}
            searchOnChildFn={searchOnChildFn}
          />
        ) : (
          <div>Loading</div>
        )}
        {isFetcheddataBrands ? (
          <BrandContent
            dataBrands={dataBrandList}
            dataAlphabet={brandsData.alphabetList}
            dataSelectedLetter={selectedLetter}
            setSelectedLetter={setSelectedLetter}
            setDataByAlphabet={setDataByAlphabet}
          />
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default Brands;
