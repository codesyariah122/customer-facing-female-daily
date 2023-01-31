import CardPromo from './CardPromo';
import Toolbar from './Toolbar';

const Promo = () => {
  return (
    <main className="container mx-auto mt-7 xl:max-w-screen-xl">
      <div>
        <div>
          <ul className="flex space-x-5 border-b">
            <li className="hover:text-teal-primary hover:border-teal-primary border-teal-primary text-teal-primary hover:border-teal-primary cursor-pointer border-b-2 px-5 pb-4 font-semibold hover:border-b-2 hover:font-semibold">
              <span className="tracking-wider">All</span>
            </li>
            <li className="hover:text-teal-primary hover:border-teal-primary hover:border-teal-primary cursor-pointer px-5 pb-4 hover:border-b-2 hover:font-semibold">
              <span className="tracking-wider">App Only</span>
            </li>
            <li className="hover:text-teal-primary hover:border-teal-primary hover:border-teal-primary cursor-pointer px-5 pb-4 hover:border-b-2 hover:font-semibold">
              <span className="tracking-wider">Promo X</span>
            </li>
          </ul>
        </div>
        <div className="mt-5">
          <div>
            <Toolbar />
          </div>
          <div className="mt-5">
            <span>
              <strong className="font-semibold">12.527</strong> Promotions
            </span>
            <div className="mt-6">
              <ul className="grid grid-cols-4 gap-4">
                {[...Array(8)].map((item, index) => {
                  return (
                    <li key={index}>
                      <CardPromo />
                    </li>
                  );
                })}
              </ul>
              <div className="mt-16 flex justify-center">
                <div className="border-pink-primary text-pink-primary flex w-[148px] cursor-pointer justify-center rounded border py-3 text-sm font-semibold tracking-wide">
                  <span>See More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Promo;
