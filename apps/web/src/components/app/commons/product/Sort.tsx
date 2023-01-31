import Select from '../Select';

/**
 * Sort component <show Sort component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */

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
const Sort = () => {
  return (
    <div className="flex items-center">
      <div className="mr-2.5 tracking-wider">Sort by</div>
      <div className="w-[127px]">
        <Select dataSelect={dataSelect} />
      </div>
    </div>
  );
};

export default Sort;
