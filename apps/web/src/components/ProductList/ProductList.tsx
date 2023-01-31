import Filter from './Filter';
import List from './List';

const ProductList = () => {
  return (
    <div className="container mx-auto xl:max-w-screen-xl">
      <div className="mt-7 flex">
        <Filter />
        <div className="flex-1 pl-5">
          <List />
        </div>
      </div>
    </div>
  );
};

export default ProductList;
