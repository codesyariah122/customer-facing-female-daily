'use client';
import { FilterCategories, StoreInfo } from '@components/app/store';
import {
  IStorePage,
  IStoreSide,
} from '@utils/app/storepage/storeFiltersInterface';
/**
 * Side component <show Side component on the store page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */
const Side = (props: IStoreSide): React.ReactElement => {
  return (
    <aside className="w-[324px] space-y-5">
      <StoreInfo dataStoreInfo={props.dataStoreSide} />
      <FilterCategories
        dataCategories={props.dataStoreSide}
        changeHandler={props.changeHandler}
      />
    </aside>
  );
};

export default Side;
