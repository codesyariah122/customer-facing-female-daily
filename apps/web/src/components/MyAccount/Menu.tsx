import Image from 'next/image';
import Link from 'next/link';
import menuAccount from './../../utils/data/menuAccount';
import topBanner from '../../assets/images/left-panel.svg';

const Menu = () => {
  return (
    <div className="w-1/4">
      <div className="relative py-4 shadow-md">
        <Image
          src={topBanner}
          width={88}
          height={88}
          alt="top bannner"
          className="absolute top-0 left-0"
        />
        <div className="flex justify-center">
          <Image
            src="https://media-fd-stg.setoko-test.com/images/76fc4cbd-8957-4934-8074-d0fdbc9a0ad3.jpg"
            alt="store info"
            width={100}
            height={100}
            className="h-24 w-24 rounded-full border border-white object-cover shadow-lg"
          />
        </div>
        <div className="mt-4 flex flex-col justify-center">
          <div className="flex justify-center font-semibold tracking-wider">
            Hello, Ladies!
          </div>
          <div className="mt-2 flex justify-center text-sm">
            john.doe@gmail.com
          </div>
          <div className="mt-2 flex justify-center">
            <i className="ico-allo-pay"></i>
          </div>
        </div>
        <div className="mt-5 flex w-full px-5">
          <div className="flex flex-1 flex-col justify-center pr-4">
            <div className="mx-auto">
              <i className="ico-allobank"></i>
            </div>
            <div className="text-gray-20 text-10 mt-2.5 text-center tracking-wider">
              Allo Balance
            </div>
            <div className="mt-1 flex items-center justify-center space-x-1">
              <strong className="text-10 font-semibold">Rp</strong>
              <div>
                <i className="ico-hide-rp" />
              </div>
              <div className="cursor-pointer">
                <i className="icon-eye-slashed" />
              </div>
            </div>
          </div>
          <div className="border-platinum flex flex-1 flex-col justify-center border-l border-r px-2">
            <div className="mx-auto">
              <i className="ico-mpc-big"></i>
            </div>
            <div className="text-gray-20 text-10 mt-2.5 text-center tracking-wider">
              MPC Points
            </div>
            <div className="mt-1 flex items-center justify-center space-x-1">
              <div>
                <i className="ico-hide-rp" />
              </div>
              <div className="cursor-pointer">
                <i className="icon-eye-slashed" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center pl-2">
            <div className="mx-auto h-[31px]">
              <i className="ico-mycoupon"></i>
            </div>
            <div className="text-gray-20 text-10 mt-2.5 text-center tracking-wider">
              My Coupons
            </div>
            <div className="text-10 mt-1 text-center font-semibold">
              5 Coupons
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col px-4">
          <div className="">
            {menuAccount.map((item, index) => {
              return (
                <Link
                  href="/"
                  key={index}
                  className="border-gray-light flex w-full items-center space-x-5 border-b py-3 last:border-b-0"
                >
                  {/* FIXME: this span with i tag icon, causing hydranation error */}
                  {/* <span dangerouslySetInnerHTML={{ __html: item.icon }}></span> */}
                  <span className="flex w-full cursor-pointer text-sm tracking-wider">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
