import CouponList from './CouponList';

const SidebarMultiple = () => {
  return (
    <div className="w-[322px]">
      <div className="sticky top-8 rounded px-5 text-sm shadow">
        <h1 className="py-4 font-semibold">Payment Details</h1>
        <div className="mt-8 flex justify-between">
          <div className="text-sm">
            Total <span className="text-[#808077]">(3 items)</span>
          </div>
          <div className="text-sm font-semibold">Rp1.770.000</div>
        </div>
        <div className="mt-4 py-4">
          <div className="bg-pink-primary w-full cursor-pointer rounded p-4 text-center text-sm font-semibold tracking-wide text-white">
            Confirm Address Selection
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMultiple;
