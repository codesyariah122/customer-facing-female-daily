import GeneralPages from '../GeneralPages';
import BannerCt1 from '../../../assets/images/banner/banner-ct-1.svg';
import BannerCt2 from '../../../assets/images/banner/banner-ct-2.svg';
import BannerCt3 from '../../../assets/images/banner/banner-ct-3.svg';
import Benefits from '../../../assets/images/banner/benefits.svg';
import Oneaccount from '../../../assets/images/banner/one-account.svg';
import Enjoy from '../../../assets/images/banner/enjoy.svg';
import Mega from '../../../assets/images/banner/bank-mega.svg';
import Transtv from '../../../assets/images/banner/transtv.svg';
import Trans7 from '../../../assets/images/banner/trans7.svg';
import Transmart from '../../../assets/images/banner/transmart.svg';
import Detik from '../../../assets/images/banner/detik.svg';
import Wendys from '../../../assets/images/banner/wendys.svg';
import Baskins from '../../../assets/images/banner/baskinrobins.svg';
import Metro from '../../../assets/images/banner/metro.svg';
import TransStudio from '../../../assets/images/banner/transstudio.svg';
import TransLuxury from '../../../assets/images/banner/luxurytrans.svg';
import CoffeBeans from '../../../assets/images/banner/coffebean.svg';
import More from '../../../assets/images/banner/more-images.svg';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'Hello from CT Corp!',
      content:
        'CT Corp is a rapidly growing, diversified Indonesian-based holding company that is active in several industries.',
    },
  ],
};

const AboutCT = () => {
  return (
    <div>
      <div className="container mx-auto xl:max-w-screen-xl">
        <GeneralPages data={StaticPages.data} />
        <div className="center my-10 place-content-center items-center">
          <div className="flex place-content-center pb-8">
            <div className="mx-4">
              <img src={BannerCt1.src} alt="" className="mx-auto" />
              <h2 className="text-md py-4 text-center font-semibold">
                Financial Service
              </h2>
            </div>
            <div className="mx-4">
              <img src={BannerCt2.src} alt="" className="mx-auto" />
              <h2 className="text-md py-4 text-center font-semibold">
                Media, Lifestyle & Entertainment
              </h2>
            </div>
            <div className="mx-4">
              <img src={BannerCt3.src} alt="" className="mx-auto" />
              <h2 className="text-md py-4 text-center font-semibold">Retail</h2>
            </div>
          </div>
          <div className="contsainer text-semibold mx-auto mt-8 w-6/12 pb-8 text-center">
            <p className="text-md py-4 font-semibold">
              The group has established strongly-positioned companies in the
              consumer market and has been trusted by many from generations to
              generations
            </p>
          </div>
          <div className="mx-auto flex w-4/5 flex-wrap justify-center">
            <img src={Mega.src} alt="" className="m-4" />
            <img src={Transtv.src} alt="" className="m-4" />
            <img src={Trans7.src} alt="" className="m-4" />
            <img src={Transmart.src} alt="" className="m-4" />
            <img src={Detik.src} alt="" className="m-4" />
            <img src={Wendys.src} alt="" className="m-4" />
            <img src={Baskins.src} alt="" className="m-4" />
            <img src={CoffeBeans.src} alt="" className="m-4" />
            <img src={Metro.src} alt="" className="m-4" />
            <img src={TransStudio.src} alt="" className="m-4" />
            <img src={TransLuxury.src} alt="" className="m-4" />
            <img src={More.src} alt="" className="m-4" />
          </div>
        </div>
      </div>
      <div className="bg-pink center my-10 place-content-center items-center bg-sky-100">
        <div className="container  mx-auto text-center">
          <h2 className="py-4 text-xl font-semibold">Did You Know?</h2>
          <span>
            By registering an account at FD Studio, you will also be registered
            in the whole CT Corp ecosystem!
          </span>
          <br />
          <p className="my-8 font-semibold">
            Be entitled to join these perks by becoming CT Corp MPC member:
          </p>
        </div>
        <div className="mx-auto flex place-content-center pb-8 xl:w-6/12">
          <div className="mx-2">
            <img src={Benefits.src} alt="" className="mx-auto" />
            <h2 className="text-md py-4 text-center font-semibold">
              One account for all
              <br />
              <br />
              As an MPC member, you can get access to any of CT Corp Apps or
              Services easily.
            </h2>
          </div>
          <div className="mx-2">
            <img src={Oneaccount.src} alt="" className="mx-auto" />
            <h2 className="text-md py-4 text-center font-semibold">
              Get more benefits
              <br />
              <br />
              As an MPC member, you will be showered with promos, coupons,
              exclusive access to our events and rewards.
            </h2>
          </div>
          <div className="mx-2">
            <img src={Enjoy.src} alt="" className="mx-auto" />
            <h2 className="text-md py-4 text-center font-semibold">
              Enjoy the convenience
              <br />
              <br />
              Transact instantly with digital wallet and get points as reward.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex place-content-center items-center">
        <span className="font-semibold">Are you ready to register?</span>
        <button className="bg-pink-primary ml-8 flex h-[50px] w-[175px] items-center justify-center text-white">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default AboutCT;
