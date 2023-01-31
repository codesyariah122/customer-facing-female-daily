import Image from 'next/image';
import Link from 'next/link';
import { Menu } from '@components/app/account/issues';
const IssuesDetail = () => {
  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex">
        <Menu />
        <div className="w-3/4 pl-8">
          <div className="">
            <h1 className="text-22 font-semibold">ISSUE DETAILS</h1>
            <Link
              href="/issues"
              className="text-pink-primary flex items-center font-semibold"
            >
              <i className="ico-arrow-left-pink mr-2"></i> Back to My Issues
            </Link>
            <div className="border-gray-light mt-6 rounded-2xl border py-7 px-5">
              <Info />
              <div className="border-ghost-white2 mt-6 space-y-6 border-b-[18px] pb-6">
                <div className="flex flex-col border-b pb-6">
                  <span className="text-black-light text-sm font-medium">
                    Status
                  </span>
                  <span className="mt-0.5 text-sm font-medium">on Going</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black-light text-sm font-medium">
                    Ticket ID
                  </span>
                  <span className="text-pink-primary mt-0.5 font-medium">
                    8956666663
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black-light text-sm font-medium">
                    Tiket Creation Date
                  </span>
                  <span className="mt-0.5 font-medium">
                    31 February 2021, 13:20 PM
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black-light text-sm font-medium">
                    Order ID
                  </span>
                  <span className="mt-0.5 font-medium">
                    2019111500110000001-01
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black-light text-sm font-medium">
                    Order Status
                  </span>
                  <span className="mt-0.5 font-medium">Completed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black-light text-sm font-medium">
                    Topics
                  </span>
                  <span className="mt-0.5 font-medium">Products</span>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-lg font-semibold">Complained Product</h2>
                <div className="mt-7 space-y-4 divide-y">
                  {[0, 1, 2].map((item, index) => {
                    return (
                      <div key={index} className="pt-4">
                        <div className="flex flex-col border-b pb-4">
                          <div className="flex space-x-1">
                            <span className="text-xs font-semibold">
                              Sold by
                            </span>
                            <i className="ico-mini-fd"></i>
                          </div>
                          <div className="text-10 text-black-light mt-1 flex items-center space-x-1">
                            <span>ID: 24019972</span>
                            <span>•</span>
                            <span>Mampang, Jakarta Selatan</span>
                          </div>
                        </div>
                        <div className="flex py-4">
                          <div>
                            <Image
                              src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
                              width={90}
                              height={90}
                              alt=""
                              className="h-[90px] w-[90px] object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col pl-4 pr-10">
                            <span>
                              Exclusive Canomy Home Humidifier Exclusive Canomy
                              Home Humidifier Exclusive Canomy Home Humidifier
                            </span>
                            <span className="text-black-light mt-2.5 text-xs">
                              Quantity: 1 (500 gr)
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-black-light text-sm">
                              Total
                            </span>
                            <strong className="text-lg font-semibold">
                              Rp690.000
                            </strong>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-6 flex flex-col border-t pt-6">
                  <span className="text-black-light text-sm font-medium">
                    Total Refund Amount
                  </span>
                  <strong className="font-semibold">Rp690.000</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Info = () => {
  return (
    <div className="bg-alice-blue flex items-start rounded-lg px-2.5 py-5">
      <i className="ico-mdi-information mt-1.5"></i>
      <span className="ml-2.5 flex">
        Tim kami akan menghubungi Anda jika membutuhkan detail permasalahan
        lebih lanjut melalui email yang terdaftar.
      </span>
    </div>
  );
};
export default IssuesDetail;
