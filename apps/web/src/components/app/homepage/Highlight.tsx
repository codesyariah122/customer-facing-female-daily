import React from 'react';
import Image from 'next/image';
// Assets
import DemoImageH1 from '@assets/images/h1.png';
import DemoImageH3 from '@assets/images/h3.png';
function Highlight() {
  return (
    <div className="bg-ghost-white mt-8 py-10">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-22 font-semibold">FD Studio’s Highlights</div>
        </div>
        <div className="flex">
          <div className="flex w-1/2 pr-5">
            <div className="flex h-[373px] w-[35%] flex-col items-center justify-center bg-[url('/images/h1.png')] bg-cover bg-center bg-no-repeat">
              <div className="text-26 mb-8 flex justify-center px-5 text-center font-semibold">
                Your Daily Needs of Beauty
              </div>
              <div className="bg-pink-primary w-9.25 flex cursor-pointer justify-center rounded py-3 font-semibold tracking-wide text-white">
                Find More
              </div>
            </div>
            <div className="flex w-[65%] flex-wrap pl-5">
              <div className="grid w-full grid-cols-2 gap-5">
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src={DemoImageH3}
                      className="h-[93px] w-[93px]"
                      alt=""
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src={DemoImageH3}
                      className="h-[93px] w-[93px]"
                      alt=""
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src={DemoImageH3}
                      className="h-[93px] w-[93px]"
                      alt=""
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-1/2 pl-5">
            <div className="flex h-[373px] w-[35%] flex-col items-center justify-center bg-[url('/images/h1.png')] bg-cover bg-center bg-no-repeat">
              <div className="text-26 mb-8 flex justify-center px-5 text-center font-semibold">
                Your Daily Needs of Beauty
              </div>
              <div className="bg-pink-primary w-9.25 flex cursor-pointer justify-center rounded py-3 font-semibold tracking-wide text-white">
                Find More
              </div>
            </div>
            <div className="flex w-[65%] flex-wrap pl-5">
              <div className="grid w-full grid-cols-2 gap-5">
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src={DemoImageH3}
                      className="h-[93px] w-[93px]"
                      alt=""
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src={DemoImageH3}
                      className="h-[93px] w-[93px]"
                      alt=""
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src={DemoImageH3}
                      className="h-[93px] w-[93px]"
                      alt=""
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
