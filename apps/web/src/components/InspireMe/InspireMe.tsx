import Image from 'next/image';
import CardInspire from './CardInspire';
import Toolbar from './Toolbar';
import IcoEmptySearch from '@assets/images/ico-empty-search.svg';

const InspireMe = () => {
  return (
    <main className="container mx-auto mt-7 xl:max-w-screen-xl">
      <div>
        <div>
          <ul className="flex space-x-5 border-b">
            <li className="hover:text-teal-primary hover:border-teal-primary border-teal-primary text-teal-primary hover:border-teal-primary cursor-pointer border-b-2 px-5 pb-4 font-semibold hover:border-b-2 hover:font-semibold">
              <span className="tracking-wider">All</span>
            </li>
            <li className="hover:text-teal-primary hover:border-teal-primary hover:border-teal-primary cursor-pointer px-5 pb-4 hover:border-b-2 hover:font-semibold">
              <span className="tracking-wider">Living</span>
            </li>
            <li className="hover:text-teal-primary hover:border-teal-primary hover:border-teal-primary cursor-pointer px-5 pb-4 hover:border-b-2 hover:font-semibold">
              <span className="tracking-wider">Cooking</span>
            </li>
            <li className="hover:text-teal-primary hover:border-teal-primary hover:border-teal-primary cursor-pointer px-5 pb-4 hover:border-b-2 hover:font-semibold">
              <span className="tracking-wider">Furniture & Home Decor</span>
            </li>
            <li className="hover:text-teal-primary hover:border-teal-primary hover:border-teal-primary cursor-pointer px-5 pb-4 hover:border-b-2 hover:font-semibold">
              <span className="tracking-wider">Lorem Ipsum</span>
            </li>
            <li className="hover:text-teal-primary hover:border-teal-primary hover:border-teal-primary cursor-pointer px-5 pb-4 hover:border-b-2 hover:font-semibold">
              <span className="tracking-wider">Lorem Ipsum</span>
            </li>
          </ul>
        </div>

        <div className="mt-5">
          <div>
            <Toolbar />
          </div>
          <div className="mt-5">
            <span>
              <strong className="font-semibold">13.1313</strong> Articles
            </span>
            <div className="mt-6">
              <ul className="grid grid-cols-4 gap-4">
                {[...Array(8)].map((item, index) => {
                  return (
                    <li key={index}>
                      <CardInspire />
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col items-center justify-center py-20">
                <Image
                  src={IcoEmptySearch}
                  width={254}
                  height={254}
                  alt="empty promo"
                  className="mx-auto"
                />
                <p className="mt-8 text-center font-medium tracking-wider">
                  No articles about it yet
                </p>
                <p className="mt-4 text-center text-sm tracking-wider">
                  But we have plenty of ideas & inspirations ready <br />
                  for you! Let’s try with another keyword.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default InspireMe;
