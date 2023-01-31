interface merchantType {
  code?: string;
  filter_type?: string;
}

interface warehouse {
  district?: string;
  city?: string;
}
interface PropsParthner {
  merchant: merchantType;
  warehouse: warehouse;
}
const PartnerInfo = ({ merchant, warehouse }: PropsParthner) => {
  let merchant_name: string;
  switch (merchant.filter_type) {
    case 'OFFICIAL_SELLER_BY_FEMALE_DAILY':
      merchant_name = 'Official Brand By FD';
      break;
    case 'FEMALE_DAILY_STORE':
      merchant_name = 'Female Daily Studio Store';
      break;
    default:
      merchant_name = 'Sold By Seller';
  }
  return (
    <>
      <div className="mb-1 flex">
        <p className="text-xs font-bold">{merchant_name}</p>
      </div>
      <div className="text-grey flex items-center border-b-2 pb-4 text-xs">
        <span>ID: {merchant.code}</span>
        <i className="ico-separator mx-2"></i>
        <span>
          {warehouse.district}, {warehouse.city}
        </span>
      </div>
    </>
  );
};

export default PartnerInfo;
