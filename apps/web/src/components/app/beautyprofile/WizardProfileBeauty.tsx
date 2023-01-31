'use client';
import { Tab } from '@headlessui/react';
import EllipseBg from '@assets/images/ellipse_fb.svg';
import Image from 'next/image';
import {
  Skintone,
  HairProfile,
  BeautyConcern,
} from '@components/app/beautyprofile';
import CheckCircle from '@assets/images/steps-item-icon.svg';
import LineWizard from '@assets/images/line-wizard.svg';
import Link from 'next/link';

/**
 * this is for beauty profile page
 * @author Ilma Dinnia Alghani <ilma.dinnia@ctcorpdigital.com>ss
 * @param   {}
 * @returns {React.ReactElement}
 */

const WizardProfileBeauty = () => {
  return (
    <main>
      <div>
        <Image
          src={EllipseBg}
          alt="background"
          className="absolute z-[-1] w-full"
        />
      </div>
      <div className="container mx-auto mt-8 w-[1060px]">
        <div className="tracking-wider">
          <Tab.Group defaultIndex={1}>
            <Tab.List className="mt-10 flex justify-between font-semibold">
              <Link href="/account/myprofile">
                <Tab className="flex focus-visible:outline-none active:border-none">
                  <Image
                    src={CheckCircle}
                    alt="background"
                    className="mx-2 w-[20px]"
                  />
                  <div>
                    <span>Personal Info</span>
                    <div className="rounded-md bg-green-50 px-2">
                      <span className="text-xs text-green-500">Complete</span>
                    </div>
                  </div>
                </Tab>
              </Link>
              <Image
                src={LineWizard}
                alt="line"
                className="relative top-[-12px] mx-2"
              />
              <Tab className="flex focus-visible:outline-none active:border-none">
                <Image
                  src={CheckCircle}
                  alt="background"
                  className="mx-2 w-[20px]"
                />
                <div>
                  <span>Skin profile</span>
                  <div className="rounded-md bg-amber-50 px-2">
                    <span className="text-xs text-amber-500">Incomplete</span>
                  </div>
                </div>
              </Tab>
              <Image
                src={LineWizard}
                alt="line"
                className="relative top-[-12px] mx-2"
              />
              <Tab className="flex focus-visible:outline-none active:border-none">
                <Image
                  src={CheckCircle}
                  alt="background"
                  className="mx-2 w-[20px]"
                />
                <div>
                  <span>Hair profile</span>
                  <div className="rounded-md bg-amber-50 px-2">
                    <span className="text-xs text-amber-500">Incomplete</span>
                  </div>
                </div>
              </Tab>
              <Image
                src={LineWizard}
                alt="line"
                className="relative top-[-12px] mx-2"
              />
              <Tab className="flex focus-visible:outline-none active:border-none">
                <Image
                  src={CheckCircle}
                  alt="background"
                  className="mx-2 w-[20px]"
                />
                <div>
                  <span>Beauty Concern</span>
                  <div className="rounded-md bg-amber-50 px-2">
                    <span className="text-xs text-amber-500">Incomplete</span>
                  </div>
                </div>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <div className="mx-auto mt-10 rounded-lg border bg-gray-50 p-8 drop-shadow-md">
                <div>
                  <h2 className="text-center text-xl font-semibold">
                    Complete your Skin Profile
                  </h2>
                  <div className="mt-2 mb-8 text-center text-sm">
                    Complete your skin profile to get recommendations suitable
                    for your skin
                  </div>
                </div>
                <Tab.Panel></Tab.Panel>
                <Tab.Panel>
                  <Skintone />
                </Tab.Panel>
                <Tab.Panel>
                  <HairProfile />
                </Tab.Panel>
                <Tab.Panel>
                  <BeautyConcern />
                </Tab.Panel>
              </div>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
      <div className="mt-4 flex justify-center py-4">
        <div className="bg-pink-primary w-[114px] cursor-pointer rounded p-4 text-center text-sm font-semibold tracking-wide text-white">
          CONTINUE
        </div>
      </div>
    </main>
  );
};

export default WizardProfileBeauty;
