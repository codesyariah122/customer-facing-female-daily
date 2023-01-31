const OrderSummary = () => {
  return (
    <div className="border-b p-8 pb-8">
      <div className="mb-8 font-semibold">
        <div className="mr-8 grid w-1/2">
          <span className="mt-4 text-xs text-gray-600">Order ID</span>
          <span className="text-sm">2019111500110000001-123</span>
        </div>
      </div>
      <div className="mb-4 flex justify-around font-semibold">
        <div className="grid w-1/2">
          <span className="text-xs text-gray-600">Delivery Address</span>
          <span className="text-sm">
            Jl. Kapten P. Tendean No.1-2A, Jakarta Selatan, Mampang Prapatan,
            14450 08123456789
          </span>
        </div>
        <div className="w-1/2">
          <div className="text-xs text-gray-600">Seller</div>
          <div className="text-sm">Nike Official Store </div>
          <div className="text-sm text-gray-500">ID : 24019974</div>
        </div>
      </div>
      <div className="my-8">
        <table className="w-full table-auto">
          <thead className="bg-gray-100 p-8 text-sm">
            <tr>
              <th className="p-4 text-left font-semibold">Product</th>
              <th className="p-4 text-center font-semibold">Quantity</th>
              <th className="p-4 text-left font-semibold">Price</th>
            </tr>
          </thead>
          <tbody className="text-xs">
            <tr className="border-b-2">
              <td className="py-4">Daikin AC Inverter 1PK</td>
              <td className="py-4 text-center">1</td>
              <td className="py-4">Rp9.000.000</td>
            </tr>
            <tr className="border-b-2">
              <td className="py-4">Add on Fee Installation</td>
              <td className="py-4 text-center">2</td>
              <td className="py-4">125.000</td>
            </tr>
            <tr className="border-b-2">
              <td className="py-4">Kinaco Tube for Mud Terrain</td>
              <td className="py-4 text-center">4</td>
              <td className="py-4">Rp9.650.000</td>
            </tr>
          </tbody>
        </table>
        <div className="flex border-b-2 py-4 text-xs font-semibold">
          <div className="w-3/4 px-8  text-right font-semibold">Subtotal</div>
          <div>Rp9.650.000</div>
        </div>
        <div className="flex border-b-2 py-4 text-xs font-semibold">
          <div className="w-3/4 px-8  text-right font-semibold">
            <span>Delivery Fee Subtotal</span>
          </div>
          <div>Rp10.000</div>
        </div>
        <div className="flex border-b-2 py-4 text-xs font-semibold">
          <div className="w-3/4 px-8  text-right font-semibold">
            <span> Delivery Insurance Fee</span>
          </div>
          <div>Rp9.650.000</div>
        </div>
        <div className="flex border-b-2 py-4 text-xs font-semibold">
          <div className="w-3/4 px-8  text-right font-semibold">
            <span> Installation Fee</span>
          </div>
          <div>Rp-</div>
        </div>
        <div className="flex border-b-2 py-4 text-xs font-semibold">
          <div className="w-3/4 px-8  text-right font-semibold">
            <span>Discount Promo</span>
          </div>
          <div>Rp-</div>
        </div>
        <div className="flex border-b-2 py-4 text-xs font-semibold">
          <div className="w-3/4 px-8  text-right font-semibold">
            <span> Delivery Discount</span>
          </div>
          <div>Rp-</div>
        </div>
        <div className="flex bg-gray-100 py-4 text-xs font-semibold text-red-500">
          <div className=" w-3/4 px-8 text-right font-semibold">
            <span className="">Total</span>
          </div>
          <div>
            <span>Rp9.650.000</span>
          </div>
        </div>
        <div className="flex border-b-2 py-4 text-xs font-semibold">
          <div className="flex w-3/4 items-center px-8 text-right font-semibold">
            <i className="ico-mpc mr-4"></i>
            <span> MPC Points you earn</span>
          </div>
          <div className="text-sm font-semibold">
            <span>783 Points</span>
          </div>
        </div>
        <div className="grid py-4 text-sm">
          <span className="text-gray-500">
            This invoice is valid and process by computer.
          </span>
          <span>Last update : 21 January 2022 23:01 WIB</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
