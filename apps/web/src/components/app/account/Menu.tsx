import menuAccount from '@utils/data/menuAccount';
import Image from 'next/image';
import Link from 'next/link';
import topBanner from '@assets/images/left-panel.svg';
import { GetCookie } from '@utils/helpers';
import { _COOKIE_CUSTOMER_PROFILE_ } from '@utils/commons/customerHelper';
import DefaultAvatar from '@assets/images/avatar-default.jpg';


/**
 * Menu component <Menu component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */

const Menu = (props: any): React.ReactElement => {
  const FdUsername = decodeURIComponent(GetCookie(_COOKIE_CUSTOMER_PROFILE_));
  const dataProfiles = props?.profiles ? props?.profiles : null

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
        {dataProfiles && (
          <>
            <div className="flex justify-center">
              {props?.showImage ? (
                <Image
                  src={props?.files}
                  alt="store info"
                  width={100}
                  height={100}
                  className="h-24 w-24 rounded-full border border-white object-cover shadow-lg"
                />
              ) : (
                <Image
                  src={
                    dataProfiles?.picture.url
                      ? dataProfiles?.picture.url
                      : DefaultAvatar
                  }
                  alt="store info"
                  width={100}
                  height={100}
                  className="h-24 w-24 rounded-full border border-white object-cover shadow-lg"
                />
              )}
            </div>
            <div className="mt-4 flex flex-col justify-center">
              <div className="flex justify-center font-semibold tracking-wider">
                {dataProfiles.name}
              </div>
              <div className="mt-2 flex justify-center text-sm">
                {dataProfiles.email}
              </div>
              <div className="mt-2 flex justify-center">
                <i className="ico-allo-pay"></i>
              </div>
            </div>
          </>
        )}
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
                  href={item.url}
                  key={index}
                  className="border-gray-light flex w-full items-center space-x-5 border-b py-3 last:border-b-0"
                >
                  {/* FIXME: this span with i tag icon, causing hydranation error */}
                  {/* <div>{item.icon}</div> */}
                  <span>
                    <i className={`${item.icon}`} />
                  </span>
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
