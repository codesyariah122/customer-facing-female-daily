/**
 * Brand info component
 */
import { ProductBrand } from '@utils/pages/productDetail/productDetailType';

type DataBrand = {
  brand: ProductBrand;
};

/**
 * Product brand component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {brand} props <object data brand>
 * @returns {React.ReactElement}
 */
const Brand = ({ brand }: DataBrand) => {
  return (
    <div className="flex py-2 px-4 xl:px-0">
      <a href={brand.url}>
        <span className="text-pink-primary font-semibold">{brand.name}</span>
      </a>
    </div>
  );
};

export default Brand;
