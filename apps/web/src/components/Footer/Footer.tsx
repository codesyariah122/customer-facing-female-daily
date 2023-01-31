import Link from 'next/link';

const Footer = () => {
  return (
    <div className="border-flash-white mt-10 border-t">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="text-pink-primary  flex flex flex-wrap justify-center gap-x-12 py-10 text-xs font-semibold tracking-wider drop-shadow-md xl:text-base xl:filter-none">
          <div>Best Price</div>
          <div>100% Authentic</div>
          <div>Safe & Trusted</div>
          <div>More Product Choices</div>
          <div>Exclusive Offers</div>
        </div>
        <div className="border-gray-30 flex flex-wrap border-t py-8 px-4 sm:justify-start xl:justify-between xl:px-12 xl:px-4">
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <strong className="font-semibold tracking-wider">
              Get to Know Us
            </strong>
            <ul className="flex flex-col">
              <li className="mt-3">
                <Link href="/">
                  <span className="cursor-pointer text-sm tracking-wider">
                    About FD Studio
                  </span>
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/">
                  <span className="cursor-pointer text-sm tracking-wider">
                    Inspire Me
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <strong className="font-semibold tracking-wider">Help</strong>
            <ul className="flex flex-col">
              <li className="mt-3">
                <Link href="/">
                  <span className="cursor-pointer text-sm tracking-wider">
                    Help Center
                  </span>
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/">
                  <span className="cursor-pointer text-sm tracking-wider">
                    Return & Refund
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <strong className="font-semibold tracking-wider">
              Buying Guide
            </strong>
            <ul className="flex flex-col">
              <li className="mt-3">
                <Link href="/">
                  <span className="cursor-pointer text-sm tracking-wider">
                    How to Shop
                  </span>
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/">
                  <span className="cursor-pointer text-sm tracking-wider">
                    Safe Shopping Guarantee
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <strong className="font-semibold tracking-wider">
              FD Studio Seller
            </strong>
            <ul className="flex flex-col">
              <li className="mt-3">
                <Link href="/">
                  <span className="cursor-pointer text-sm tracking-wider">
                    Sell on FD Studio
                  </span>
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/">
                  <span className="cursor-pointer text-sm tracking-wider">
                    Seller Education Center
                  </span>
                </Link>
              </li>
              <li className="mt-3">
                <Link href="/">
                  <span className="cursor-pointer text-sm tracking-wider">
                    Seller Education Center
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex w-6/12 flex-col	xl:w-1/5">
            <div>
              <strong className="font-semibold tracking-wider">
                Download Our App
              </strong>
              <ul className="mt-3 flex gap-x-3">
                <li>
                  <Link href="/">
                    <img
                      src="/images/ico-ios.svg"
                      alt=""
                      className="w-[110px] cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <img
                      src="/images/ico-android.svg"
                      alt=""
                      className="w-[110px] cursor-pointer"
                    />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <strong className="font-semibold tracking-wider">
                Follow Us
              </strong>
              <ul className="mt-3 flex gap-x-6">
                <li>
                  <Link href="/">
                    <img
                      src="/images/instagram.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <img
                      src="/images/twitter.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <img
                      src="/images/facebook.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <img
                      src="/images/youtube.svg"
                      alt=""
                      className="cursor-pointer"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-pink-primary flex justify-center p-2">
        <span className="text-xs text-white">
          FD Studio 2021 | Indonesia’s No.1 Beauty Destionation
        </span>
      </div>
    </div>
  );
};

export default Footer;
