/**
 * Product detail specification component
 */
import { DataSpec } from '@utils/pages/productDetail/productDetailType';
import { v4 as uuidv4 } from 'uuid';

/**
 * Product detail specification component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {data} <array of productSpec type>
 * @returns {React.ReactElement}
 */
const Spesifications = (props: DataSpec) => {
  return (
    <div className="px-4 pb-8">
      {props.data.map((item) => {
        return (
          <div className="border-b pb-2" key={`spec-${uuidv4()}`}>
            <div className="text-black-olive mt-1 flex h-12">
              <div className="w-1/4 self-center">{item.name}</div>
              <div className="w-2/3 self-center">{item.value}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Spesifications;
