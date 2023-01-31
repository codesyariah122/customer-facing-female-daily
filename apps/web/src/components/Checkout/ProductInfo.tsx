import ImgProduct from '../../assets/images/image-product-mini.jpg';
import Image from 'next/image';
import StateofProduct from '../MyOrder/StetofProduct';

const ProductInfo = () => {
  return (
    <div className="mr-8 flex w-full border-b leading-6">
      <div className="relative px-4">
        <Image
          src={ImgProduct}
          width={90}
          height={90}
          alt="logo fd studio"
          className=""
        />
        <i className="ico-award absolute top-0 right-0"></i>
      </div>
      <div className="mx-2 w-full">
        <StateofProduct />
        <div className="text-sm font-semibold">Dr Bronner’s</div>
        <div>Cherry Blossom Pure Castile Liquid Soap</div>
        <div className="flex text-xs">
          <span>Quantity:</span>
          <span> 1 (500 gr)</span>
        </div>
        <span className="text-md font-semibold">Rp690.000</span>
      </div>
    </div>
  );
};

export default ProductInfo;
