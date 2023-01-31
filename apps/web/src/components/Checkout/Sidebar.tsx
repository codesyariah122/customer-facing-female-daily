import CouponList from './CouponList';

const Sidebar = () => {
  return (
    <div className="w-[322px]">
      <div className="sticky top-8 rounded px-5 text-sm shadow">
        <div>
          <CouponList />
        </div>
        <h1 className="font-semibold">Payment Details</h1>
        <div className="mt-8 flex justify-between">
          <div className="text-sm">
            Subtotal <span className="text-[#808077]">(3 items)</span>
          </div>
          <div className="text-sm font-semibold">Rp1.770.000</div>
        </div>
        <div className="border-gray-light mt-4 flex justify-between ">
          <span>Delivery Fee</span>
          <div className="text-sm font-semibold">Rp20.000</div>
        </div>
        <div className="border-gray-light mt-4 flex justify-between">
          <span>Delivery Insurance Fee</span>
          <div className="text-sm font-semibold">Rp10.000</div>
        </div>
        <div className="border-gray-light mt-4 flex justify-between">
          <span>Discount Promo</span>
          <div className="text-sm font-semibold">Rp-</div>
        </div>
        <div className="border-gray-light mt-4 flex justify-between">
          <span>Delivery Discount</span>
          <div className="text-sm font-semibold">Rp-</div>
        </div>
        <div className="border-gray-light mt-4 flex justify-between border-t border-b py-4">
          <span className="text-lg font-semibold">Total</span>
          <div className="text-lg font-semibold">Rp1.800.000</div>
        </div>
        <div className="flex justify-between py-4">
          <span>Cashback</span>
          <span>130pts</span>
        </div>
        <div className="mt-4 py-4">
          <div className="bg-pink-primary w-full cursor-pointer rounded p-4 text-center text-sm font-semibold tracking-wide text-white">
            Go to Payment
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
