import Select from '@components/Global/Select';

const dataSelect = [
  {
    id: 1,
    name: 'Home',
    label: 'Home',
  },
  {
    id: 2,
    name: 'Face',
    label: 'Face',
  },
  {
    id: 3,
    name: 'Foundation',
    label: 'Foundation',
  },
];

const Toolbar = ({ dataFavorites }: { dataFavorites: any }) => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-semibold tracking-wider">
        You have {dataFavorites} products
      </div>
      <div className="flex items-center">
        <div className="mr-2.5 tracking-wider">Sort by</div>
        <div>
          <Select dataSelect={dataSelect} />
        </div>
      </div>
    </div>
  );
};

export default Toolbar;
