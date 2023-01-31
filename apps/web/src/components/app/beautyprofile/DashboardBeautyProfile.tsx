import DashboardImg from '@assets/images/top-dashboard.svg';
import EllipseBg from '@assets/images/ellipse_fb.svg';
import IconOne from '@assets/images/ico-fdbp-2.svg';
import IconTwo from '@assets/images/ico-fdbp.svg';
import IconThree from '@assets/images/ico-fdbp-3.svg';
import IconPersonal from '@assets/images/personal-info.svg';
import BeautyProfile from '@assets/images/beauty-profile-ico.svg';
import BeautyConcern from '@assets/images/beauty-concern.svg';
import Image from 'next/image';
import Link from 'next/link';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const DashboardBeautyProfile = () => {
  return (
    <main>
      <Image
        src={DashboardImg}
        alt="background side"
        className="absolute right-0 top-0"
      />
      <Image
        src={EllipseBg}
        alt="background"
        className="absolute z-[-1] w-full"
      />
      <div className="container mx-auto mt-8 w-[1038px] tracking-wider">
        <div className="w-3/5 pt-44">
          <h2 className="text-4xl font-semibold">
            Hello Cutie, Complete Your Profile To Unlock More Feature
          </h2>
          <div className="pt-8">
            <span>
              More features and benefits will be available after your profile is
              complete
            </span>
          </div>
        </div>
        <div className="mt-28 w-full">
          <div className="flex justify-between">
            <div className="h-auto w-[324px] bg-white p-4 text-center drop-shadow-md">
              <div className="mt-[-60px] flex justify-center">
                <Image
                  src={IconOne}
                  alt="icon best product"
                  className="rounded-full"
                />
              </div>
              <h3 className="mt-8 font-semibold">Find The Best Product</h3>
              <div className="mt-2">
                <span className="text-sm">
                  Get better product recommendation suited to your concerns
                </span>
              </div>
            </div>
            <div className="h-auto w-[324px] bg-white p-4 text-center drop-shadow-md">
              <div className="mt-[-60px] flex justify-center">
                <Image
                  src={IconThree}
                  alt="icon best product"
                  className="rounded-full"
                />
              </div>
              <h3 className="mt-8 font-semibold">Join Try & Review</h3>
              <div className="mt-2">
                <span className="text-sm">
                  Exclusive for FD Members! Try new beauty products before
                  anyone else
                </span>
              </div>
            </div>
            <div className="h-auto w-[324px] bg-white p-4 text-center drop-shadow-md">
              <div className="mt-[-60px] flex justify-center">
                <Image
                  src={IconTwo}
                  alt="icon best product"
                  className="rounded-full"
                />
              </div>
              <h3 className="mt-8 font-semibold">Be An Inspiration</h3>
              <div className="mt-2">
                <span className="text-sm">
                  Inspire others with your reviews and posts while earning
                  points and leveling up
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-32 mb-8 w-full">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-semibold">Your Account Status</h2>
          </div>
          <div className="flex justify-between">
            <div className="flex">
              <div className="mr-4">
                <Image
                  src={IconPersonal}
                  alt="icon best product"
                  className="rounded-full"
                />
              </div>
              <div className="grid">
                <div>
                  <span className="font-semibold">Personal Information</span>
                </div>
                <div className="flex text-sm">
                  <i className="ico-check-cirlce"></i>
                  <span className="text-green-500">
                    Personal Information is complete
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <Image
                  src={BeautyProfile}
                  alt="icon best product"
                  className="rounded-full"
                />
              </div>
              <div className="grid">
                <div>
                  <span className="font-semibold">Beauty Profile</span>
                </div>
                <div className="flex text-sm">
                  <i className="ico-warning-bpfd"></i>
                  <span className="text-amber-500">
                    Beauty Profile is incomplete
                  </span>
                </div>
              </div>
            </div>
            <div className="flex">
              <div className="mr-4">
                <Image
                  src={BeautyConcern}
                  alt="icon best product"
                  className="rounded-full"
                />
              </div>
              <div className="grid">
                <div>
                  <span className="font-semibold">Beauty Concern</span>
                </div>
                <div className="flex text-sm">
                  <i className="ico-warning-bpfd"></i>
                  <span className="text-amber-500">
                    Beauty Concern is incomplete
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8">
          <Link href="/beauty-profile/edit-beauty-profile/">
            <div className="mt-4 flex justify-center py-4">
              <div className="bg-pink-primary w-[324px] cursor-pointer rounded p-4 text-center text-sm font-semibold tracking-wide text-white">
                COMPLETE MY PROFILE
              </div>
            </div>
          </Link>
          <div className="flex justify-center">
            <div className="text-pink-primary w-[324px] cursor-pointer rounded bg-white p-4 text-center text-sm font-semibold tracking-wide">
              I'll do it later
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardBeautyProfile;
