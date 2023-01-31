'use client';
import { IStoreFilters } from '@utils/app/storepage/storeFiltersInterface';
import { useState } from 'react';
/**
 * FilterCategories component <show FilterCategories component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Ahmad Jourdan <ahmad.jourdan@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */
export function FilterCategories(props: IStoreFilters): React.ReactElement {
  const [categorySelected, setCategorySelected] = useState<any>([]);
  return (
    <div className="border-gray-10 rounded-2xl border p-5 shadow-lg">
      {props.dataCategories[0] && (
        <ul className="space-y-4">
          {props.dataCategories[0].store_categories.map(
            (item: any, index: any) => {
              return (
                <li key={index}>
                  <div className="flex w-full items-center justify-between">
                    <label
                      htmlFor={`cat-${item.category_code}`}
                      className="flex cursor-pointer items-center"
                    >
                      <input
                        type="checkbox"
                        id={`cat-${item.category_code}`}
                        name={`cat-${item.category_name}`}
                        defaultValue={`cat-${item.category_code}`}
                        className="checkbox absolute -z-50 h-5 w-5 opacity-0"
                        onChange={(e) => {
                          if (e.target.checked) {
                            categorySelected.push({
                              name: item.category_name,
                            });
                            setCategorySelected(categorySelected);
                          } else {
                            const index = categorySelected.findIndex(
                              (cat: any) => cat.name !== item.category_name
                            );
                            categorySelected.splice(index, 1);
                          }
                          props.changeHandler(e, categorySelected);
                        }}
                      />
                      <div className="relative mr-3 cursor-pointer">
                        <i className="ico-check" />
                        <i className="ico-uncheck" />
                      </div>
                      <div className="flex flex-1 items-center justify-between text-sm tracking-wider">
                        <span>{item.category_name}</span>
                      </div>
                    </label>
                  </div>
                </li>
              );
            }
          )}
        </ul>
      )}
    </div>
  );
}

export default FilterCategories;
