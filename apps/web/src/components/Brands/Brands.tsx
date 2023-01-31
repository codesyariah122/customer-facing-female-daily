import { useEffect, useState } from 'react';
import BannerBrands from './BannerBrands';
import SubBannerBrands from './SubBannerBrands';
import Toolbar from './Toolbar';
import emptyImg from '@assets/images/ico-empty-search.svg';
import { isMobile } from '@utils/helpers';

const alphabet = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

const Brands = ({ dataBrands }: any) => {
  const [selectedLetter, setSelectedLetter] = useState<string>('A');
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  useEffect(() => {
    setIsMobileState(isMobile);
  }, []);
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="bg-ghost-white2 px-5 py-5 md:bg-transparent md:px-0 md:py-0">
        <h1 className="text-22 mb-2 mt-0 font-semibold tracking-wider md:mt-7">
          Popular Brands
        </h1>
        <BannerBrands />
        <div className="mt-9">
          <SubBannerBrands />
        </div>
        {/* isMobile */}
        <div className="mt-9 px-5 md:px-0">
          {/* <Toolbar onChangefunc={} /> */}
          <div className="mt-8">
            <div className="flex">
              <div className="bg-gray-10 mr-3 flex-1 py-1 px-2.5 font-semibold">
                {/* {selectedLetter} */}
              </div>
              <div className="w-3.5">#</div>
            </div>
            <div className="flex">
              <div className="mt-4 mr-3 flex-1 space-y-5">
                <div>dataBrands Key</div>
              </div>
              <div className="flex w-3.5 flex-col space-y-3 md:flex-row">
                {/* {alphabet.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        selectedLetter === item ? 'font-semibold' : ''
                      } cursor-pointer hover:font-semibold`}
                    >
                      {item}
                    </div>
                  );
                })} */}
              </div>
            </div>
          </div>
          <div className="py-20">
            <img src={emptyImg.src} alt="" className="mx-auto w-[142px]" />
            <div className="mx-auto mt-2.5 w-full max-w-[329px] text-center text-sm tracking-wider">
              Sorry we can’t find the brand you’re looking for. Explore more
              exciting brands here
            </div>
          </div>
        </div>
        {/* isDesktop */}
        <div className="mt-9">
          {/* <Toolbar onChangefunc={} /> */}
          <div className="mt-8">
            <div className="border-gray-30 flex justify-between border-b">
              {/* {alphabet.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      selectedLetter === item
                        ? 'text-teal-primary border-teal-primary'
                        : 'border-transparent'
                    } hover:border-teal-primary hover:text-teal-primary cursor-pointer border-b-2 px-2 pb-1.5`}
                  >
                    {item}
                  </div>
                );
              })} */}
            </div>
            <div className="mt-4 grid grid-cols-4 gap-4">
              <div>dataBrands Key</div>
            </div>
          </div>
          <div className="py-20">
            <img src={emptyImg.src} alt="" className="mx-auto w-[142px]" />
            <div className="mx-auto mt-2.5 w-full max-w-[329px] text-center text-sm tracking-wider">
              Sorry we can’t find the brand you’re looking for. Explore more
              exciting brands here
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
