import Image from 'next/image';

const Highlight = () => {
  return (
    <div className="bg-ghost-white mt-8 py-10">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="mb-8 flex items-center justify-between">
          <div className="text-22 font-semibold">FD Studio’s Highlights</div>
        </div>
        <div className="flex">
          <div className="flex w-1/2 pr-5">
            <div className="relative flex h-[373px] w-[35%] flex-col items-center justify-center">
              <Image
                src="https://media-fd-stg.setoko-test.com/images/c65b71c5-1542-4c74-b794-bb064f974bb3.jpeg"
                width={228}
                height={373}
                alt="h-1"
                className="absolute left-0 top-0 h-full w-full rounded object-cover"
              />
              <div className="relative z-10">
                <div className="text-26 mb-8 flex justify-center px-5 text-center font-semibold">
                  Your Daily Needs of Beauty
                </div>
                <div className="bg-pink-primary w-9.25 mx-auto flex cursor-pointer justify-center rounded py-3 font-semibold tracking-wide text-white">
                  Find More
                </div>
              </div>
            </div>
            <div className="flex w-[65%] flex-wrap pl-5">
              <div className="grid w-full grid-cols-2 gap-5">
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src="https://media-fd-stg.setoko-test.com/images/74ab1231-c0d2-4248-99af-dda0db5070d9.png"
                      width={100}
                      height={100}
                      alt="h-1"
                      className="h-[93px] w-[93px]"
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src="https://media-fd-stg.setoko-test.com/images/74ab1231-c0d2-4248-99af-dda0db5070d9.png"
                      width={100}
                      height={100}
                      alt="h-1"
                      className="h-[93px] w-[93px]"
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src="https://media-fd-stg.setoko-test.com/images/74ab1231-c0d2-4248-99af-dda0db5070d9.png"
                      width={100}
                      height={100}
                      alt="h-1"
                      className="h-[93px] w-[93px]"
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
            <div className="relative flex h-[373px] w-[35%] flex-col items-center justify-center">
              <Image
                src="https://media-fd-stg.setoko-test.com/images/c0cabfaf-40ed-4928-9d13-78edf2a6921d.jpg"
                width={228}
                height={373}
                alt="h-1"
                className="absolute left-0 top-0 h-full w-full rounded object-cover"
              />
              <div className="relative z-10">
                <div className="text-26 mb-8 flex justify-center px-5 text-center font-semibold">
                  Your Daily Needs of Beauty
                </div>
                <div className="bg-pink-primary w-9.25 mx-auto flex cursor-pointer justify-center rounded py-3 font-semibold tracking-wide text-white">
                  Find More
                </div>
              </div>
            </div>
            <div className="flex w-[65%] flex-wrap pl-5">
              <div className="grid w-full grid-cols-2 gap-5">
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src="https://media-fd-stg.setoko-test.com/images/74ab1231-c0d2-4248-99af-dda0db5070d9.png"
                      width={100}
                      height={100}
                      alt="h-1"
                      className="h-[93px] w-[93px]"
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src="https://media-fd-stg.setoko-test.com/images/74ab1231-c0d2-4248-99af-dda0db5070d9.png"
                      width={100}
                      height={100}
                      alt="h-1"
                      className="h-[93px] w-[93px]"
                    />
                  </div>
                  <div className="bg-gray-10 flex h-[54px] items-center justify-center rounded-b font-medium tracking-wider">
                    Body Moisturizer
                  </div>
                </div>
                <div className="border-gray-light rounded border shadow-md">
                  <div className="flex justify-center rounded-t bg-white py-[14px]">
                    <Image
                      src="https://media-fd-stg.setoko-test.com/images/74ab1231-c0d2-4248-99af-dda0db5070d9.png"
                      width={100}
                      height={100}
                      alt="h-1"
                      className="h-[93px] w-[93px]"
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
};

export default Highlight;
