interface propsPaymentDetail {
  payment_name: string;
  amount: number;
  total_amount: number;
  shipping_fee: number;
  insurance_fee: number;
  use_insurance: Boolean;
  items_total: number;
  free_shipping_amount: number;
  discount_amount: number;
  allo_point_earned: number;
}

function formatCurency(number: number): string {
  return Intl.NumberFormat('id-ID').format(number);
}
const PaymentDetails = (props: propsPaymentDetail) => {
  const {
    payment_name = 'Unknown',
    amount = 0,
    total_amount = 0,
    shipping_fee = 0,
    insurance_fee = 0,
    use_insurance = false,
    free_shipping_amount = 0,
    items_total,
    discount_amount,
    allo_point_earned,
  } = props;

  return (
    <div className="p-4 leading-6">
      <h2 className="font-semibold">Payment Details</h2>
      <div className="flex justify-between border-b py-4">
        <div>
          <span>Payment Method</span>
        </div>
        <div>
          <span>{payment_name}</span>
        </div>
      </div>
      <div className="mt-4 flex justify-between leading-9">
        <div>
          <span>Subtotal </span>
          <span className="text-gray-600">({items_total} items)</span>
        </div>
        <div>
          <span className="text-semibold">Rp{formatCurency(amount)}</span>
        </div>
      </div>
      <div className="flex justify-between leading-9">
        <div>
          <span>Delivery Fee</span>
        </div>
        <div>
          <span className="text-semibold">Rp{formatCurency(shipping_fee)}</span>
        </div>
      </div>
      {use_insurance && (
        <div className="flex justify-between leading-9">
          <p>Delivery Insurance Fee</p>
          <p className="text-semibold">Rp{insurance_fee}</p>
        </div>
      )}
      {discount_amount > 0 && (
        <div className="flex justify-between leading-9">
          <span>Discount Promo</span>
          <span>- Rp{formatCurency(discount_amount)}</span>
        </div>
      )}

      {free_shipping_amount > 0 && (
        <div className="mb-2 flex justify-between border-b pb-2 leading-9">
          <span>Delivery Discount</span>
          <span>- Rp{formatCurency(free_shipping_amount)}</span>
        </div>
      )}
      <div className="flex justify-between  pb-2 font-semibold leading-9">
        <div>
          <span>Total</span>
        </div>
        <div>
          <span>Rp{formatCurency(total_amount)}</span>
        </div>
      </div>
      {/* <div className="mb-4 flex justify-between pb-2 leading-9">
        <div>
          <span>Cashback</span>
        </div>
        <div>
          <span className="font-semibold">15.000 </span>
          <span>Points</span>
        </div>
      </div> */}
      {allo_point_earned > 0 && (
        <div className="mb-4 flex justify-between border-t pb-4 pt-2 leading-9">
          <div className="flex items-center">
            <i className="ico-mpc mr-4 w-[32px] "></i>
            <span>MPC Points you’ll earn</span>
          </div>
          <span className="font-semibold">{allo_point_earned} Points</span>
        </div>
      )}
    </div>
  );
};

export default PaymentDetails;
