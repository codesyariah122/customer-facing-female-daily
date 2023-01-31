import Image from 'next/image';

const BannerBrands = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-5">
        {[...Array(3)].map((item, index) => {
          return (
            <div key={index}>
              <Image
                src={`https://media-fd-stg.setoko-test.com/images/3e9625cd-081a-4a91-96a2-648f723faa67.jpg`}
                width={410}
                height={179}
                alt="banner 1"
                className="h-[179px] rounded-lg object-cover shadow-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BannerBrands;
