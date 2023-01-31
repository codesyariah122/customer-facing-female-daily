import Filter from '../ProductList/Filter';
import Empty from './Empty';
import List from './List';

const ProductList = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="mt-7 flex">
        <Filter />
        <div className="flex-1 pl-5">
          <List />
          {/* <Empty /> */}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
