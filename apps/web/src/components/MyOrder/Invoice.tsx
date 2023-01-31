import IcoLogo from '@assets/images/femaledaily-logo.png';
import Image from 'next/image';
import OrderSummary from './OrderSummary';

const Invoice = () => {
  return (
    <div className="w-full">
      <div className="relative sticky top-0 z-10 flex h-[60px] items-center bg-white drop-shadow-md">
        <div className="bg-pink-primary center absolute right-1/3 h-fit w-fit rounded px-8 py-2 text-white">
          <i></i>
          <span>Print</span>
        </div>
      </div>
      <div className="mx-auto w-[595px] bg-white drop-shadow-md">
        <div className="p-8">
          <div className="my-8 flex justify-center">
            <Image src={IcoLogo} width={177} height={50} alt="logo fd studio" />
          </div>
          <div className="mb-4 flex justify-around font-semibold">
            <div className="grid w-1/2">
              <span className="mt-4 text-xs text-gray-600">Customer Name</span>
              <span className="text-sm">John Norman Doe</span>
            </div>
            <div className="mt-4 grid w-1/2">
              <span className="text-xs text-gray-600">Status</span>
              <span className="text-pink-primary text-sm">Paid</span>
            </div>
          </div>
          <div className="mb-4 flex justify-around font-semibold">
            <div className="grid w-1/2">
              <span className="mt-4 text-xs text-gray-600">
                Reference Number
              </span>
              <span className="text-sm">INV.2021/11/14/000001</span>
            </div>
            <div className="grid w-1/2">
              <span className="mt-4 text-xs text-gray-600">Invoice Date</span>
              <span className="text-sm">10 March 2021</span>
            </div>
          </div>
          <div className="mb-8 font-semibold">
            <div className="mt-4 grid">
              <span className="mt-4 text-xs text-gray-600">Payment Method</span>
              <span className="text-sm">
                Credit Card: Master (5243 **** **** 2128)
              </span>
            </div>
          </div>
          <div>
            <table className="w-full table-auto">
              <thead className="bg-gray-100 p-8 text-sm">
                <tr>
                  <th className="p-4 text-left font-semibold">Order ID</th>
                  <th className="p-4 text-center font-semibold">
                    Total Item(s)
                  </th>
                  <th className="p-4 text-left font-semibold">Subtotal</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b-2">
                  <td className="py-4">2019111500110000001-01</td>
                  <td className="py-4 text-center">1</td>
                  <td className="py-4">Rp9.650.000</td>
                </tr>
                <tr className="border-b-2">
                  <td className="py-4">2019111500110000001-02</td>
                  <td className="py-4 text-center">2</td>
                  <td className="py-4">Rp9.650.000</td>
                </tr>
                <tr className="border-b-2">
                  <td className="py-4">2019111500110000001-03</td>
                  <td className="py-4 text-center">4</td>
                  <td className="py-4">Rp9.650.000</td>
                </tr>
              </tbody>
            </table>
            <div className="flex border-b-2 py-4 text-sm font-semibold">
              <div className="w-3/4 px-8  text-right font-semibold">
                Subtotal
              </div>
              <div>Rp9.650.000</div>
            </div>
            <div className="flex border-b-2 py-4 text-sm font-semibold">
              <div className="w-3/4 px-8  text-right font-semibold">
                Discount/Promo/Coupon
              </div>
              <div>Rp9.650.000</div>
            </div>
            <div className="flex bg-gray-100 py-4 text-sm font-semibold text-red-500">
              <div className=" w-3/4 px-8 text-right font-semibold">
                <span className="">Total</span>
              </div>
              <div>Rp9.650.000</div>
            </div>
          </div>
        </div>
        <div className="border-t-8">
          <div className="flex justify-center py-8 text-center font-semibold">
            <h2>Order Summary</h2>
          </div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Invoice;
