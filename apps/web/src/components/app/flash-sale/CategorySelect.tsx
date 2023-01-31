/**
 * Category Filter Component on Flash Sale Page
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
import React from 'react';

const CategorySelect = ({
  selectedCategory,
  dataCategory,
  clickCategory,
}: {
  selectedCategory: number[];
  dataCategory: any;
  clickCategory: (category: any | null) => void;
}) => {
  return (
    <div>
      <div className="my-4 flex gap-x-5">
        <div
          onClick={() => clickCategory(null)}
          className={`cursor-pointer rounded-full border py-1 px-5 ${
            selectedCategory.length <= 0 &&
            'bg-green-lighter border-teal-primary text-teal-primary bg-teal-lighter font-semibold'
          }`}
        >
          <span>All</span>
        </div>
        {dataCategory?.map((category: any) => {
          const isSelected = selectedCategory.includes(category.code);
          return (
            <div
              onClick={() => clickCategory(category)}
              key={category.code}
              className={`cursor-pointer rounded-full border py-1 px-5
                ${
                  isSelected &&
                  'bg-green-lighter border-teal-primary text-teal-primary bg-teal-lighter font-semibold'
                }`}
            >
              <span>{category.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategorySelect;
