import React from 'react';
import MenuCategory from './MenuCategory';

/**
 * Mega Menu
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

function MegaMenu({
  dataCategories,
  dataCategorySet,
}: {
  dataCategories?: any;
  dataCategorySet?: any;
}): React.ReactElement {
  return (
    <div className="bg-pink-primary relative">
      <div className="container mx-auto xl:max-w-screen-xl">
        <div className="flex items-center py-3 text-white">
          <MenuCategory
            dataCategories={dataCategories}
            dataCategorySet={dataCategorySet}
          />
          {/* <i className="ico-line-white mx-6"></i>
          <div className="flex items-center">
            <div className="mr-12">
              <span className="text-sm font-medium">
                What are you looking for?
              </span>
            </div>
            <div className="mr-12">
              <span className="text-sm font-medium">4.4 Sale</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
