import Link from 'next/link';
import bannerAboutfd from '../../assets/images/banner/banner-about-fd.svg';
import bannerAboutCT from '../../assets/images/banner/banner-eng-aboutct.svg';
import bannerhowtopay from '../../assets/images/banner/banner-howtopay.svg';
import bannerhowtoshop from '../../assets/images/banner/banner-howtoshop.svg';
import bannerSafeShopping from '../../assets/images/banner/banner-eng-safe.svg';
import bannerReturnRefund from '../../assets/images/banner/banner-eng-return.svg';
import bannerDelivery from '../../assets/images/banner/banner-eng-delivery.svg';
import bannerContactUs from '../../assets/images/banner/banner-contactus.svg';

import { useRouter } from 'next/router';

const Banners = () => {
  const router = useRouter();
  let routername = router.pathname;
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="w-full pt-4">
        <div>
          <Link href="/">
            {(() => {
              switch (routername) {
                case '/about-ct-corp':
                  return (
                    <img src={bannerAboutCT.src} alt="" className="mx-auto" />
                  );
                case '/about-fd':
                  return (
                    <img src={bannerAboutfd.src} alt="" className="mx-auto" />
                  );
                case '/how-to-pay':
                  return (
                    <img src={bannerhowtopay.src} alt="" className="mx-auto" />
                  );
                case '/how-to-shop':
                  return (
                    <img src={bannerhowtoshop.src} alt="" className="mx-auto" />
                  );
                case '/safe-shopping-guarantee':
                  return (
                    <img
                      src={bannerSafeShopping.src}
                      alt=""
                      className="mx-auto"
                    />
                  );
                case '/return-refund':
                  return (
                    <img
                      src={bannerReturnRefund.src}
                      alt=""
                      className="mx-auto"
                    />
                  );
                case '/delivery-information':
                  return (
                    <img src={bannerDelivery.src} alt="" className="mx-auto" />
                  );
                case '/contact-us':
                  return (
                    <img src={bannerContactUs.src} alt="" className="mx-auto" />
                  );
                default:
                  return '';
              }
            })()}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banners;
