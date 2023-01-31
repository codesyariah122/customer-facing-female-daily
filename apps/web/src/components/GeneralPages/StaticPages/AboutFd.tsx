import GeneralPages from '../GeneralPages';
import AboutMiddle from '../../../assets/images/banner/about-us-middle.svg';
import BrandsImage from '../../../assets/images/banner/brands.svg';
import InspiringImage from '../../../assets/images/banner/inspiring.svg';
import ReliableImage from '../../../assets/images/banner/reliable.svg';

const StaticPages = {
  data: [
    {
      id: 1,
      title: 'What’s Female Daily Studio?',
      content:
        'Female Daily has been your guide to anything beauty: from Skincare 101 in YouTube to endless beauty recommendations from our editors, even user reviews in our FD Reviews Platform. We have millions of product reviews, thousands of brands and beauty products, and a tight-knit community of enthusiastic beauty lovers, just like you!',
    },
  ],
};

const AboutFd = () => {
  return (
    <div>
      <div className="container mx-auto xl:max-w-screen-xl">
        <GeneralPages data={StaticPages.data} />
        <div className="container mx-auto mx-auto w-3/6 pt-4 text-center leading-5 xl:max-w-screen-xl">
          <p>
            Now, on our 13th anniversary, we decided to make magic happen. After
            a long request of Female Daily’s own e-commerce, we bring you...
            Female Daily Studio! It’s your trusted destination to achieve
            whatever your beauty goal is: from healthy skin to glowing
            complexion, even a mindful self-care moment for you to take a pause
            in life.
          </p>
          <div>
            <p className="py-4 text-xl font-semibold">
              “After a long request of Female Daily`s own e-commerce, we bring
              you...Female Daily Studio!”
            </p>
          </div>
        </div>
        <div className="bg-pink mx-auto my-4 flex w-10/12 place-content-center items-center bg-rose-50">
          <div className="mx-10 w-5/12">
            <h2 className="py-4 text-xl font-semibold">
              The word ‘studio’ signifies an active environment of creativity
              and inspiration
            </h2>
            <div>
              By registering an account at FD Studio, you will also be
              registered in the whole CT Corp ecosystem.
            </div>
            <div className="grid py-4">
              <span className="my-4 font-semibold">What does it mean?</span>
              <button className="bg-pink-primary flex h-[32px] w-[157px] items-center justify-center rounded text-white">
                Learn here
              </button>
            </div>
          </div>
          <div>
            <img src={AboutMiddle.src} alt="" className="mx-auto" />
          </div>
        </div>
      </div>
      <div className="bg-pink center my-10 place-content-center items-center bg-rose-50">
        <div className="container mx-auto w-5/12 text-center">
          <h2 className="py-4 text-xl font-semibold">Female Daily Studio</h2>
          <p>
            We want to give space to our community that is constantly growing
            and innovating, for everyone in the beauty industry:{' '}
          </p>
        </div>
        <div className="flex place-content-center pb-8">
          <div className="mx-4">
            <h2 className="text-md py-4 text-center font-semibold">BRANDS</h2>
            <img src={BrandsImage.src} alt="" className="mx-auto" />
          </div>
          <div className="mx-4">
            <h2 className="text-md py-4 text-center font-semibold">
              CONSUMERS
            </h2>
            <img src={InspiringImage.src} alt="" className="mx-auto" />
          </div>
          <div className="mx-4">
            <h2 className="text-md py-4 text-center font-semibold">
              INFLUENCERS
            </h2>
            <img src={ReliableImage.src} alt="" className="mx-auto" />
          </div>
        </div>
        <div className="container mx-auto w-5/12 pb-8 text-center">
          <p>
            Every product is chosen carefully to upgrade to your beauty routine.
            Everything is loved by the community, and every purchase will
            support the thriving local beauty industry! With the knowledge and
            experience we have, we want to make the experience of finding and
            loving a product easier by custom curation for skin types and beauty
            concerns. You can just sit tight, and with a few clicks... Your
            beauty dreams will come true!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutFd;
