import Wavy from '@assets/images/wavy.svg';
import Straight from '@assets/images/straight.svg';
import Curly from '@assets/images/curly.svg';
import Colored from '@assets/images/colored.svg';
import NonColored from '@assets/images/noncolored.svg';
import Hijaber from '@assets/images/lightskin.svg';
import NonHijaber from '@assets/images/mediumskin.svg';
import Image from 'next/image';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const HairProfile = () => {
  return (
    <main>
      <div className="flex justify-between">
        <div className="mx-5 w-4/12 rounded-md bg-gray-100 p-4">
          <h2 className="text-center font-semibold">Hair Type</h2>
          <div className="m-2 flex items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
            <Image src={Wavy} alt="img beauty profile" className="mx-2" />
            <span className="font-semibold">Wavy</span>
          </div>
          <div className="m-2 flex items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
            <Image src={Straight} alt="img beauty profile" className="mx-2" />
            <span className="font-semibold">Straight</span>
          </div>
          <div className="m-2 flex items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
            <Image src={Curly} alt="img beauty profile" className="mx-2" />
            <span className="font-semibold">Curly</span>
          </div>
          <div className="ml-4">
            <span className="text-red-500">Please chose hair type</span>
          </div>
        </div>
        <div className="mx-5 w-4/12 rounded-md bg-gray-100 p-4">
          <h2 className="text-center font-semibold">Colored Hair</h2>
          <div className="m-2 flex items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
            <Image src={Colored} alt="img beauty profile" className="mx-2" />
            <span className="font-semibold">Colored</span>
          </div>
          <div className="m-2 flex items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
            <Image src={NonColored} alt="img beauty profile" className="mx-2" />
            <span className="font-semibold">Non Colored</span>
          </div>
          <div className="ml-4">
            <span className="text-red-500">Please chose skin one</span>
          </div>
        </div>
        <div className="w-4/12 rounded-md bg-gray-100 p-4">
          <h2 className="text-center font-semibold">Hijaber</h2>
          <div className="m-2 flex items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
            <Image src={Hijaber} alt="img beauty profile" className="mx-2" />
            <span className="font-semibold">Hijaber</span>
          </div>
          <div className="m-2 flex items-center border-2 border-transparent bg-gray-50 p-2 hover:rounded-md hover:border-2 hover:border-teal-500">
            <Image src={NonHijaber} alt="img beauty profile" className="mx-2" />
            <span className="font-semibold">Non Hijaber</span>
          </div>
          <div className="ml-4">
            <span className="text-red-500">Please chose one</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HairProfile;
