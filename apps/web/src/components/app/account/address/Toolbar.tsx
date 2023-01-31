import { useEffect, useState } from 'react';

type TToolbar = {
  openModalFunc: () => void;
  setDataAddressState: any;
  dataAddressState: any;
  dataAddress: any;
};
/**
 * Toolbar component <Toolbar component on the address page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TToolbar}
 * {
 *  openModalFunc (for open modal new address)
    setDataAddressState: any; (set state for dataaddressstate)
    dataAddressState: any; (data address state)
    dataAddress: any; (data address from react query)
 * }
 * @returns {React.ReactElement}
 */

const Toolbar = ({
  openModalFunc,
  setDataAddressState,
  dataAddressState,
  dataAddress,
}: TToolbar) => {
  const [inputSearch, setInputSearch] = useState<string>('');

  // useeffect when inputSearch change to search address
  useEffect(() => {
    const keys = ['name', 'recipient', 'address'],
      values = [inputSearch.toLowerCase()],
      regex = new RegExp(values.join('|')),
      output = dataAddress?.filter((e: any) =>
        keys.some((k: any) => {
          const value = e[k]?.toLowerCase();
          return regex.test(value);
        })
      );
    inputSearch !== ''
      ? setDataAddressState(output)
      : setDataAddressState(dataAddress);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputSearch]);

  const onInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };
  // --

  return (
    <div className="">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="relative order-2 mt-3 flex w-full max-w-[320px] md:order-1 md:mt-0">
          <input
            type="text"
            className="flex h-[54px] w-full rounded-l-lg border border-l-0 bg-white pl-4 pr-10 text-sm shadow focus:outline-none"
            placeholder="Search address"
            onChange={onInputchange}
            value={inputSearch}
          />
          <button className="bg-pink-primary flex h-[54px] w-[54px] items-center justify-center rounded-r-lg">
            <i className="ico-search-white-small" />
          </button>
          {inputSearch.length > 0 && (
            <div
              className="absolute top-[13px] right-[65px] cursor-pointer"
              onClick={() => setInputSearch('')}
            >
              <i className="ico-close-circle" />
            </div>
          )}
        </div>
        <div className="order-1 flex items-center space-x-2.5 md:order-2">
          <div
            className="bg-pink-primary flex w-[203px] cursor-pointer justify-center rounded py-3 text-sm font-semibold tracking-wide text-white"
            onClick={openModalFunc}
          >
            <span>+ Add New Address</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
