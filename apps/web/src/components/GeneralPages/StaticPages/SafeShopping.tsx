import GeneralPages from '../GeneralPages';
import BestPrice from '../../../assets/images/banner/bestprice.svg';
import BrandNew from '../../../assets/images/banner/brandnew.svg';
import Carefully from '../../../assets/images/banner/carefully.svg';
import LiveTracking from '../../../assets/images/banner/livetrack.svg';
import Warranty from '../../../assets/images/banner/warranty.svg';
import SafeSecure from '../../../assets/images/banner/safesecure.svg';
import Authentic from '../../../assets/images/banner/authentic.svg';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'Shop with peace of mind',
      content:
        'We try our best to be a trusted platform, so we thrive on guaranteeing you with high-quality products and services you deserve.',
    },
  ],
};

const SafeShopping = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <GeneralPages data={StaticPages.data} />
      <div className="flex flex-wrap py-8 text-center">
        <div className=" mx-auto w-80">
          <div className="mx-8 flex w-64 justify-center">
            <img src={BestPrice.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">Best Price</h2>
            <div className="pb-8">
              Our price is rather fair and competitive compared to the rest in
              the market to assure you are able to shop more while spending
              less.
            </div>
          </div>
        </div>
        <div className=" mx-auto w-80">
          <div className="mx-8 flex h-[150px] w-64 justify-center ">
            <img src={Authentic.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">
              Authentic products only
            </h2>
            <div className="pb-8">
              Enjoy the quality of 100% authentic, sealed products whenever you
              shop with us - no room for fake ones!
            </div>
          </div>
        </div>
        <div className=" mx-auto w-80">
          <div className="mx-8 flex w-64 justify-center">
            <img src={Warranty.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">Product Warranty</h2>
            <div className="pb-8">
              From product certification to warranty, all of our products are
              legally distributed - so keep your worries at bay!
            </div>
          </div>
        </div>
        <div className=" mx-auto w-80">
          <div className="mx-8 flex w-64 justify-center">
            <img src={Carefully.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">
              Carefully-curated merchants
            </h2>
            <div className="pb-8">
              We welcome only the most trusted and reputable brands to onboard
              with us as a commitment to protect your trust.
            </div>
          </div>
        </div>
        <div className=" mx-auto w-80">
          <div className="mx-8 flex w-64 justify-center">
            <img src={BrandNew.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">
              Brand new and in a good condition
            </h2>
            <div className="pb-8">
              Whether they are sent by FD Studio or FD Studio partners, all of
              our products are guaranteed to be new and in a good condition.
            </div>
          </div>
        </div>
        <div className=" mx-auto w-80 ">
          <div className="mx-8 flex w-64 justify-center">
            <img src={SafeSecure.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">
              Safe & secure payment options
            </h2>
            <div className="pb-8">
              Pay your order at your convenience! We provide 24/7 easy payment
              methods that are safe and secure for you to transact with.
            </div>
          </div>
        </div>
        <div className=" mx-auto w-80">
          <div className="mx-8 flex w-64 justify-center">
            <img src={LiveTracking.src} className="max-h-[150px] w-[150px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">
              Live tracking and chat feature
            </h2>
            <div className="pb-8">
              Track your order anytime from anywhere! Got any questions on your
              order? Chat with us instantly - we are more than happy to rescue
              you!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeShopping;
