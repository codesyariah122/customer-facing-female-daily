import { useState } from 'react';
import emptyImg from '../../assets/images/ico-empty-search-location.svg';

const locationList = [1, 2, 3];

const ModalLocation = ({
  modalShow,
  clickFunc,
}: {
  modalShow: Boolean;
  clickFunc: (value: Boolean) => void;
}) => {
  const [inputSearch, setInputSearch] = useState<string>('');
  const onInputchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };

  return (
    <div className="w-761 absolute left-0 top-0 z-10 rounded bg-white shadow">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="text-22 font-semibold">Location</div>
          <i
            className="ico-close-circle cursor-pointer"
            onClick={() => clickFunc(false)}
          />
        </div>
        <div className="w-426 relative mt-1.5 flex">
          <input
            type="text"
            className="h-10 flex-1 border border-l-0 bg-white pl-4 pr-10 text-sm shadow focus:outline-none"
            placeholder="Search location"
            onChange={onInputchange}
            value={inputSearch}
          />
          <button className="bg-pink-primary flex h-10 w-10 items-center justify-center rounded-r">
            <i className="ico-search-white-small" />
          </button>
          {inputSearch.length > 0 && (
            <div
              className="absolute top-[7px] right-[50px] cursor-pointer"
              onClick={() => {
                setInputSearch('');
              }}
            >
              <i className="ico-close-circle" />
            </div>
          )}
        </div>
        {locationList.length ? <ListSection /> : <EmptySection />}
      </div>
      <div className="border-gray-30 flex justify-end space-x-5 border-t py-3.5 px-5">
        <div className="flex">
          <span
            className="w-206 text-pink-primary border-pink-primary cursor-pointer rounded border px-8 py-3 text-center font-semibold tracking-wider"
            onClick={() => {
              setInputSearch('');
            }}
          >
            Reset
          </span>
        </div>
        <div className="flex">
          <span
            className="w-206 bg-pink-primary cursor-pointer rounded border px-8 py-3 text-center font-semibold tracking-wider text-white"
            onClick={() => clickFunc(false)}
          >
            Apply
          </span>
        </div>
      </div>
    </div>
  );
};

const ListSection = () => {
  return (
    <div className="mt-7 grid grid-flow-col grid-rows-4 gap-4">
      {locationList.length &&
        locationList.map((item, indexItem) => (
          <label
            htmlFor={`jakarta-${indexItem}`}
            className="flex cursor-pointer items-center"
            key={indexItem}
          >
            <input
              type="checkbox"
              id={`jakarta-${indexItem}`}
              name={`jakarta-${indexItem}`}
              defaultValue={`jakarta-${indexItem}`}
              className="checkbox absolute -z-50 h-5 w-5 opacity-0"
            />
            <div className="mr-5 cursor-pointer">
              <i className="ico-check" />
              <i className="ico-uncheck" />
            </div>
            <span className="text-sm tracking-wider">DKI Jakarta</span>
          </label>
        ))}
    </div>
  );
};

const EmptySection = () => {
  return (
    <div className="flex flex-col justify-center py-5">
      <div>
        <img src={emptyImg.src} className="mx-auto w-[120px]" />
      </div>
      <div className="mx-auto mt-5 w-full max-w-[363px] text-center text-sm tracking-wider">
        Whoops, we can't find such a location. Please retry with another
        keyword.
      </div>
    </div>
  );
};
export default ModalLocation;
