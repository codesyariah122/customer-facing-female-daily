'use client';
import { useState } from 'react';
import {
  HairConcernComponent,
  BodyConcern,
} from '@components/app/beautyprofile';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const SkinConcern = [
  {
    id: 1,
    name: 'Dehydrated',
  },
  {
    id: 2,
    name: 'Acne',
  },
  {
    id: 3,
    name: 'Wrinkles',
  },
  {
    id: 4,
    name: 'Sensitivy',
  },
  {
    id: 5,
    name: 'Large Pored',
  },
  {
    id: 6,
    name: 'Dullness',
  },
  {
    id: 7,
    name: 'Hyperpigmentation',
  },
  {
    id: 8,
    name: 'Roughness',
  },
  {
    id: 9,
    name: 'Dark Undereyes',
  },
  {
    id: 10,
    name: 'Sagging',
  },
  {
    id: 11,
    name: 'Black or White Heads',
  },
];

const BeautyConcern = () => {
  const [selectedConcern, setSelectedConcern] = useState(SkinConcern[0]);
  return (
    <main>
      <div className="flex justify-between">
        <div className="mx-5 w-4/12 rounded-md bg-gray-100 p-4">
          <h2 className="pb-4 text-center font-semibold">Skin Concern</h2>
          {SkinConcern.map((concern, index) => (
            <div className="mb-2 rounded-md border bg-white p-2" key={index}>
              <label
                htmlFor="skin-concern"
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
        </div>
        <div className="mx-5 w-4/12 rounded-md bg-gray-100 p-4">
          <h2 className="pb-4 text-center font-semibold">Body Concern</h2>
          <BodyConcern />
        </div>
        <div className="mx-5 w-4/12 rounded-md bg-gray-100 p-4">
          <h2 className="pb-4 text-center font-semibold">Hair Concern</h2>
          <HairConcernComponent />
        </div>
      </div>
    </main>
  );
};

export default BeautyConcern;
