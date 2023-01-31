import { CardProduct } from '@components/app/commons';

type TGridView = {
  openModalFn: () => void;
};
/**
 * GridView component <show GridView component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TGridView}
 *  {
      openModalFn (function for open modal product variant)
    }
 * @returns {React.ReactElement}
 */

const productList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const GridView = ({ openModalFn }: TGridView) => {
  return (
    <div className="mt-7 grid grid-cols-5 gap-4">
      {productList.map((item) => (
        <CardProduct key={item} openModalFn={openModalFn} />
      ))}
    </div>
  );
};

export default GridView;
