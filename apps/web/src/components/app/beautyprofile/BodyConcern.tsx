'use client';
import { useState } from 'react';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const BodyConcern = [
  {
    id: 1,
    name: 'Strech Mark',
  },
  {
    id: 2,
    name: 'Sensitivy',
  },
  {
    id: 3,
    name: 'Drynerss',
  },
  {
    id: 4,
    name: 'Hyperpigmentation',
  },
  {
    id: 5,
    name: 'Cellulite',
  },
  {
    id: 6,
    name: 'Body Acne',
  },
  {
    id: 7,
    name: 'Uneven Skin Tone',
  },
  {
    id: 8,
    name: 'Unwanted Haid',
  },
  {
    id: 9,
    name: 'Dullness',
  },
  {
    id: 10,
    name: 'Roughness',
  },
  {
    id: 11,
    name: 'Loose SKin',
  },
];

const BodyConcernComponent = () => {
  const [selectedConcern, setSelectedConcern] = useState(BodyConcern[0]);
  return (
    <main>
      {BodyConcern.map((concern, index) => (
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
    </main>
  );
};

export default BodyConcernComponent;
