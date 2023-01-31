import { useOnClickOutside } from '@utils/commons/clickOutside';
import { useRef, useState } from 'react';

/**
 * select for edit addres
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {props}
 * @returns {React.ReactElement}
 */

const SelectCustomEdit = (props: any) => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const areaSearchInfo = useRef<HTMLDivElement>(null);
  const onClickFn = () => {
    setShowSearchBar(!showSearchBar);
  };
  // hook for click outside modal searchbar
  useOnClickOutside(areaSearchInfo, () => setShowSearchBar(false));

  // fn
  const setDataFn = (item: any) => {
    props.setDataCurrent(item);
    setShowSearchBar(!showSearchBar);
    props.getDataDistrictSubDistrict(props.keyObject, item);
  };
  return (
    <div className="relative">
      <div
        className="border-american-silver relative flex h-[50px] w-full cursor-pointer items-center rounded border bg-white px-2.5 py-1"
        onClick={onClickFn}
      >
        <span className="truncate text-sm tracking-wider">
          {props?.dataCurrent?.name || `Select ${props?.keyObject}`}
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <i className="ico-arrow-down-black " />
        </span>
      </div>
      {showSearchBar && (
        <div
          className="border-gray-30 absolute z-50 max-h-60 w-full overflow-auto rounded border bg-white py-1"
          ref={areaSearchInfo}
        >
          {props?.dataSelect?.map((item: any) => {
            return (
              <div
                key={item.id}
                className="relative cursor-pointer py-1 px-2.5"
                onClick={() => setDataFn(item)}
              >
                <span
                  className={`truncate text-sm tracking-wider ${
                    props.dataCurrent.id === item.id ? 'font-semibold' : ''
                  }`}
                >
                  {item.name}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SelectCustomEdit;
