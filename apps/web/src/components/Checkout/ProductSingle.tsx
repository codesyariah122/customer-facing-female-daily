import DeliveryCourier from './DeliveryCourier';
import DeliverySelection from './DeliverySelection';
import Notes from './Notes';
import PartnerInfo from './PartnerInfo';
import ProductInfo from './ProductInfo';
import Total from './Total';

const ProductSingle = () => {
  return (
    <div className="grid leading-5">
      <h3 className="text-md pb-8 font-semibold">Order Summary</h3>
      <PartnerInfo merchant={{}} warehouse={{}} />
      <div className="flex py-4">
        <ProductInfo />
        <div className="grid w-3/4">
          <DeliverySelection />
          <DeliveryCourier />
          <Notes />
        </div>
      </div>
      <Total />
    </div>
  );
};

export default ProductSingle;
