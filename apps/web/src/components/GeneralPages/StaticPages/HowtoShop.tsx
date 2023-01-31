import GeneralPages from '../GeneralPages';
import ImageOne from '../../../assets/images/banner/1.loginfirst.svg';
import ImageTwo from '../../../assets/images/banner/2.getready.svg';
import ImageThree from '../../../assets/images/banner/3.setdelivery.svg';
import ImageFour from '../../../assets/images/banner/4.paybill.svg';
import ImageFive from '../../../assets/images/banner/5.sitback.svg';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'Welcome to Female Daily Studio',
      content: 'Ready to place your order? Let’s start the journey now!',
    },
  ],
};

const HowtoShop = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <GeneralPages data={StaticPages.data} />
      <div className="pt-8">
        <div className="flex ">
          <div className="mx-8 w-64">
            <img src={ImageOne.src} className="h-[250px] w-[250px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-xl font-semibold">But first, log in!</h2>
            <div className="w-96">
              Is it your first time shopping with us? Make sure to Register now
              before shopping. Have shopped at FD Studio before? Log in now to
              start shopping!
            </div>
          </div>
        </div>
        <div className="mx-auto my-8 flex justify-end">
          <div className="mx-8 w-64">
            <img src={ImageTwo.src} className="h-[250px] w-[250px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">
              Get ready to roll the wheels!
            </h2>
            <div className="w-96">
              <p>
                At FD Studio, we have 100.000s items available from 1000s
                brands!
                <br />
                <br />
                Discover your favorite products on the search bar or navigate
                easily from the top menu.
                <br />
                <br />
                Scroll and click to roll your virtual cart!
              </p>
            </div>
          </div>
        </div>
        <div className="flex ">
          <div className="mx-8 w-64">
            <img src={ImageThree.src} className="h-[250px] w-[250px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-xl font-semibold">
              Set your delivery address!
            </h2>
            <div className="w-96">
              Before heading out, let`s double check the quantity, size or type
              of products on your trolley!
              <br />
              <br />
              If you`re 100% sure, it`s time to set your delivery address and
              method!
              <br />
              <br />
              Worry not, you can also ask for instant delivery* service to
              ensure your order arrives at the soonest.
            </div>
          </div>
        </div>
        <div className="mx-auto my-8 flex justify-end">
          <div className="mx-8 w-64">
            <img src={ImageFour.src} className="h-[250px] w-[250px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">
              Sit back, your order is on its way!
            </h2>
            <div className="w-96">
              Wallets away! At FD Studio, you can pay with Instant Payment
              Options (Debit/Credit Card) or using Virtual Account number,
              safely and securely!
            </div>
          </div>
        </div>
        <div className="mx-auto my-8 flex">
          <div className="mx-8 w-64">
            <img src={ImageFive.src} className="h-[250px] w-[250px] " />
          </div>
          <div className="align-left">
            <h2 className="my-8 text-lg font-semibold">
              Sit back, your order is on its way!
            </h2>
            <div className="w-96">
              Once your payment is verified, we will deliver your order to you.
              No hassle, no hand-carrying!
              <br />
              You can always check your delivery status here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowtoShop;
