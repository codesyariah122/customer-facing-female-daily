import Menu from '@components/app/account/Menu';
import Link from 'next/link';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const BeautyProfile = () => {
  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex tracking-wider">
        <Menu />
        <div className="w-3/4 pl-8">
          <h2 className="text-xl font-semibold">BEAUTY ID</h2>
          <div className="my-4 rounded-lg border p-4">
            <div className="py-4s mb-8 flex justify-between border-b">
              <div className="pb-4">
                <span className="font-semibold">Beauty Profile</span>
              </div>
              <Link href="/beauty-profile/complete-beauty-profile/">
                <div className="flex font-semibold">
                  <i className="ico-edit"></i>
                  <span className="text-pink-primary">Edit</span>
                </div>
              </Link>
            </div>
            <div className="flex flex-wrap justify-between rounded-md">
              <div className="grid w-1/3 self-start pb-8">
                <span>Skin Type</span>
                <span className="text-red-500">
                  Your skin concern is not chosen
                </span>
              </div>
              <div className="grid w-1/3 self-start pb-8">
                <span>Skin Tone</span>
                <span className="text-red-500">
                  You haven’t chosen Skin Tone
                </span>
              </div>
              <div className="grid w-1/3 self-start pb-8">
                <span>Skin Undertone</span>
                <span className="text-red-500">
                  Your skin concern is not chosen
                </span>
              </div>
              <div className="grid w-1/3 self-start pb-8">
                <span>Hair Type</span>
                <span className="text-red-500">
                  You haven’t chosen Skin Undertone
                </span>
              </div>
              <div className="grid w-1/3 self-start pb-8">
                <span>Colored Hair</span>
                <span className="text-red-500">You haven’t chosen</span>
              </div>
              <div className="grid w-1/3 self-start pb-8">
                <span>Hijabers</span>
                <span className="text-red-500">You haven’t chosen</span>
              </div>
            </div>
          </div>
          <div className="my-4 rounded-lg border p-4">
            <div className="py-4s mb-8 flex justify-between border-b">
              <div className="pb-4">
                <span className="font-semibold">Beauty Concern</span>
              </div>
              <Link href="/beauty-profile/complete-beauty-profile/">
                <div className="flex font-semibold">
                  <i className="ico-edit"></i>
                  <span className="text-pink-primary">Edit</span>
                </div>
              </Link>
            </div>
            <div className="grid rounded-md">
              <div className="grid w-1/3 self-start pb-8">
                <span>Skin Concern</span>
                <span className="text-red-500">
                  Your skin concern is not chosen
                </span>
              </div>
              <div className="grid w-1/3 self-start pb-8">
                <span>Body Concern</span>
                <span className="text-red-500">
                  You body concern is not chosen
                </span>
              </div>
              <div className="grid w-1/3 self-start pb-8">
                <span>Hair Concern</span>
                <span className="text-red-500">
                  You hair concern is not chosen
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BeautyProfile;
