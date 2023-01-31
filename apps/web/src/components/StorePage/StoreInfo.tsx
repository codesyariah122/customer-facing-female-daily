import Image from 'next/image';

const StoreInfo = () => {
  return (
    <div className="border-gray-10 rounded-2xl border p-5 shadow-lg">
      <div className="flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
          alt="store info"
          width={49}
          height={49}
          className="h-[49px] w-[49px] rounded-full object-cover"
        />
        <div className="flex-1 pl-3.5">
          <strong className="flex items-center font-semibold">
            Whitelab <i className="ico-verify ml-2"></i>
          </strong>
          <div className="text-black-olive mt-2 text-sm">
            <strong className="font-semibold">1.450</strong> products sold
          </div>
        </div>
      </div>
      <div className="mt-5 flex justify-between">
        <div className="border-platinum flex w-[133px] cursor-pointer justify-center rounded-sm border p-3 font-semibold tracking-wide">
          Store Info
        </div>
        <div className="bg-pink-primary flex w-[133px] cursor-pointer justify-center rounded-sm p-3 font-semibold tracking-wide text-white">
          Chat
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
