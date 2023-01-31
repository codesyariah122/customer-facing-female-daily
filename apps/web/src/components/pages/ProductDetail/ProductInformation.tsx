/**
 * Product information component
 */
type DataProduct = {
  name: string;
};

/**
 * Product information component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {name} props <string product name>
 * @returns {React.ReactElement}
 */
const ProductInformation = ({ name }: DataProduct) => {
  return (
    <div className="w-80 px-4 xl:px-0">
      <h2 className="text-sm font-medium xl:text-2xl">{name}</h2>
    </div>
  );
};

export default ProductInformation;
