import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

type DataTypes = {
  id: number;
  name: string;
  label: string;
};

type DataArrayTypes = {
  dataSelect: DataTypes[];
};

const Select = ({ dataSelect }: DataArrayTypes) => {
  const [selected, setSelected] = useState<DataTypes>(dataSelect[0]);
  return (
    <div className="h-full w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative h-full w-full">
          <Listbox.Button className="border-gray-30 relative flex h-full w-full cursor-default items-center rounded border bg-white px-2.5 py-1">
            <span className="truncate text-sm tracking-wider">
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <i className="ico-arrow-down-black " />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="border-gray-30 absolute max-h-60 w-full overflow-auto rounded border bg-white py-1">
              {dataSelect.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className="relative cursor-pointer py-1 px-2.5"
                  value={person}
                >
                  {({ selected }: { selected: DataTypes }) => (
                    <>
                      <span
                        className={`truncate text-sm tracking-wider ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {person.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Select;
