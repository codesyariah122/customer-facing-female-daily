/**
 * Product detail description component
 */
import { ProductDesc } from '@utils/pages/productDetail/productDetailType';

/**
 * Product detail tab description component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {ProductDesc} <object of ProductDesc type>
 * @returns {React.ReactElement}
 */
const TabDescription = (props: ProductDesc) => {
  return (
    <div className="py-8 px-4">
      <img></img>
      <div dangerouslySetInnerHTML={{ __html: props.description }} />
    </div>
  );
};

export default TabDescription;
