import Image from 'next/image';
import CardProductListView from './CardProductListView';

const productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ListView = () => {
  return (
    <div className="mt-7 flex flex-col space-y-5">
      {productList.map((item, index) => (
        <CardProductListView key={index} />
      ))}
    </div>
  );
};

export default ListView;
