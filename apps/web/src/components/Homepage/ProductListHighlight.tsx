import CardProduct from '../ProductList/CardProduct';

const ProductListHighlight = ({
  openModalFunc,
}: {
  openModalFunc: () => void;
}) => {
  return (
    <div className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="border-gray-30 flex gap-x-16 border-b">
        <div className="text-teal-primary after:pseudo-content-comma after:bg-teal-primary relative p-2 text-lg font-semibold after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full">
          For You
        </div>
        <div className="text-black-olive p-2 text-lg">Best Sellers</div>
      </div>
      <div className="mt-10 grid grid-cols-6 gap-7">
        <div>
          <CardProduct openModalFunc={openModalFunc} data={undefined} />
        </div>
      </div>
      <div className="mt-20 flex justify-center">
        <span className="text-pink-primary border-pink-primary cursor-pointer rounded border px-8 py-3 font-semibold tracking-wider">
          See More
        </span>
      </div>
    </div>
  );
};

export default ProductListHighlight;
