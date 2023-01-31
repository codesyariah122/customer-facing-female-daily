/**
 * Product description and specification
 */

import { Tab } from '@headlessui/react';
import TabDescription from './TabDescription';
import Spesifications from './Spesifications';
import { DataDescription } from '@utils/pages/productDetail/productDetailType';

/**
 * Product detail description component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {DataDescription} <object of DataDescription type>
 * @returns {React.ReactElement}
 */
const Descriptions = (props: DataDescription) => {
  return (
    <div className="mb-4 w-full xl:mt-10">
      <div className="h-4 bg-slate-100 xl:my-4"></div>
      <Tab.Group>
        <Tab.List className="flex place-content-around border-b leading-9 xl:place-content-start">
          <Tab className="inline-block border-b-4 border-transparent text-gray-500 hover:border-teal-500 focus:border-b-4 focus:border-teal-500 focus:outline-none  active:border-b-4 active:border-teal-500 sm:px-8 xl:px-11">
            Product Details
          </Tab>
          <Tab className="inline-block border-b-4 border-transparent text-gray-500 hover:border-teal-500 focus:border-b-4 focus:border-teal-500  focus:outline-none  active:border-b-4 active:border-teal-500 sm:px-8 xl:px-11">
            Spesifications
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <TabDescription description={props.description} />
          </Tab.Panel>
          <Tab.Panel>
            <Spesifications data={props.specification} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Descriptions;
