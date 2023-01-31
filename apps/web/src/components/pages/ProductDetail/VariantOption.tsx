/**
 * Product variant options component
 */
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type DataAttribute = {
  selectOption: Function;
  selected: string;
  name: string;
  options: any[];
};

/**
 * Product variant options component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {DataAttribute} props <input props based on DataAttribute type>
 * @returns {React.ReactElement}
 */
const VariantOption = (props: DataAttribute): React.ReactElement => {
  // const [selected, setSelected] = useState<string>();
  const [selectedCode, setSelectedCode] = useState<string>();

  const handleSelect = (e: any, opt: any) => {
    e.preventDefault();
    setSelectedCode(opt.code);
  };

  useEffect(() => {
    if (selectedCode) {
      const filter = props.options.filter(function (row: any, i: number) {
        return row.code === selectedCode;
      });
      if (filter.length > 0) {
        const filtered = filter[0];
        // setSelected(filtered.name);
        props.selectOption(props.name, filtered);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCode]);

  return (
    <div key={`variant-${uuidv4()}`} className="grid px-4">
      <div className="flex">
        <strong>{props.name}: </strong>
        <a href="#">
          <span className="text-color-pink px-2"> {props.selected}</span>
        </a>
      </div>
      <div className="flex py-4">
        {props.options?.map((opt, ind) => {
          return (
            <div key={ind}>
              {/* onClick={(e) => pickOption(e, opt.name, opt.code)} */}
              <div
                onClick={(e) => handleSelect(e, opt)}
                className="mx-2 h-fit w-fit cursor-pointer space-x-1 rounded bg-white px-2 py-1 text-center leading-8 drop-shadow-md hover:border hover:border-teal-500"
              >
                {opt.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VariantOption;
