import ImgProduct from '../../assets/images/image-product-mini.jpg';
import Image from 'next/image';
import StateofProduct from '../MyOrder/StetofProduct';

const Reorder = () => {
  return (
    <div className="my-4 bg-white">
      <div className="mr-8 flex w-full border-b leading-6">
        <div className="relative px-4">
          <Image
            src={ImgProduct}
            width={90}
            height={90}
            alt="logo fd studio"
            className=""
          />
          <i className="ico-award absolute top-0 right-0 w-[23px]"></i>
        </div>
        <div className="mx-2 w-full pb-4">
          <StateofProduct />
          <div className="text-sm font-semibold">Dr Bronner’s</div>
          <div>Cherry Blossom Pure Castile Liquid Soap</div>
          <div className="flex text-xs">
            <span>Quantity:</span>
            <span> 1 (500 gr)</span>
          </div>
        </div>
        <div>
          <div>
            <span>Total</span>
          </div>
          <span className="text-md font-semibold">Rp690.000</span>
        </div>
        <div className="bg-pink-primary mx-8 flex h-[42px] w-[115px] items-center justify-center rounded-md px-2 text-xs font-medium text-white">
          <span>Reorder</span>
        </div>
      </div>
      <div>
        <p className="pt-4 text-xs text-gray-500">
          Notes: Bungkusnya yang rapih ya jangan lupa pake bubble wrap juga ya.
          Krn sebelumnya paket yang saya beli rusak pada saat pengiriman
        </p>
      </div>
    </div>
  );
};

export default Reorder;
