import React from 'react';
import { Tab } from '@headlessui/react';
import { v4 as uuidv4 } from 'uuid';

/**
 * this is for coupon component for coupon page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>
 * @param   {any} props <data for populate>
 * @returns {React.ReactElement}
 * TODO: skeleton still not use
 */

const TabCategory = (props: any) => {
  return (
    <div>
      {props.data ? (
        <div className="mb-8 flex border-b-2">
          {props.data.map((item: any) => {
            return (
              <div key={uuidv4()}>
                <Tab.List>
                  <Tab className="hover:text-teal-primary hover:border-teal-primary active:text-teal-primary active:border-teal-primary cursor-pointer  border-b-2 border-transparent border-transparent px-8 pb-2 hover:border-b-2 focus:outline-none">
                    {item?.name}
                  </Tab>
                </Tab.List>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};
export default TabCategory;
