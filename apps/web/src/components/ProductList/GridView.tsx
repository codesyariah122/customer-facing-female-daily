import Image from 'next/image';
import CardProduct from './CardProduct';

const productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GridView = ({ openModalFunc }: { openModalFunc: () => void }) => {
  return (
    <div className="mt-7 grid grid-cols-5 gap-4">
      {productList.map((item) => (
        <CardProduct
          key={item}
          openModalFunc={function (payload: any): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
        />
      ))}
    </div>
  );
};

export default GridView;
