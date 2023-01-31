import FilterCategories from './FilterCategories';
import StoreInfo from './StoreInfo';

const Side = () => {
  return (
    <aside className="w-[324px] space-y-5">
      <StoreInfo />
      <FilterCategories />
    </aside>
  );
};

export default Side;
