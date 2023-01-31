'use client';
import { useState } from 'react';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const HairConcern = [
  {
    id: 1,
    name: 'Dandruff',
  },
  {
    id: 2,
    name: 'Hair Loss',
  },
  {
    id: 3,
    name: 'Dryness',
  },
  {
    id: 4,
    name: 'Frizz',
  },
  {
    id: 5,
    name: 'Oily Scalp',
  },
  {
    id: 6,
    name: 'Damaged',
  },
  {
    id: 7,
    name: 'Flatness',
  },
  {
    id: 8,
    name: 'Split Ends',
  },
  {
    id: 9,
    name: 'Grey Hair',
  },
  {
    id: 10,
    name: 'Sensitive Scalp',
  },
];

const HairConcernComponent = () => {
  const [selectedConcern, setSelectedConcern] = useState(HairConcern[0]);
  return (
    <main>
      {HairConcern.map((concern, index) => (
        <div className="mb-2 rounded-md border bg-white p-2" key={index}>
          <label
            htmlFor="skin-concern-1"
            className="flex cursor-pointer items-center justify-between"
          >
            <div className="flex">
              <input type="checkbox" className="mr-5 cursor-pointer" />
              <div className="text-sm font-semibold tracking-wider">
                <span className="text-black">{concern.name}</span>
              </div>
            </div>
            <i className="ico-more-info mx-2"></i>
          </label>
        </div>
      ))}
    </main>
  );
};

export default HairConcernComponent;
