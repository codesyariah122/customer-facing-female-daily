import { Toolbar, Menu } from '@components/app/account/issues';
import { Tab } from '@headlessui/react';
import { Fragment, useState } from 'react';
import Image from 'next/image';
import EmptyImg from '@assets/images/ico-empty-issues.svg';

type TDataIssues = {
  id: number;
  name: string;
  status: string;
};
const dataIssues = [
  {
    id: 1,
    name: 'TICK019239293',
    status: 'Ongoing',
  },
  {
    id: 3,
    name: 'TICK019239293',
    status: 'Resolved',
  },
  {
    id: 2,
    name: 'TICK019239293',
    status: 'Resolved',
  },
];

/**
 * Issues component <Issues component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */
const Issues = () => {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex">
        <Menu />
        <div className="w-3/4 pl-8">
          <div className="">
            <h1 className="text-22 font-semibold">MY ISSUES</h1>
            <div className="border-gray-light rounded-2xl border py-7 px-5">
              <Toolbar />
              <div className="mt-6">
                <Tab.Group
                  onChange={(index: any) => {
                    setSelectedTab(index);
                  }}
                >
                  <Tab.List className="border-gray-light flex flex w-full gap-x-8 border-b pb-4">
                    <Tab as={Fragment}>
                      {({ selected }: { selected: any }) => (
                        <div
                          className={`relative flex cursor-pointer px-2 ${
                            selected
                              ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:-bottom-4 after:h-1 after:w-full'
                              : ''
                          }`}
                        >
                          <span
                            className={`text-sm tracking-wider ${
                              selected
                                ? 'font-semibold text-black'
                                : 'text-black-light'
                            }`}
                          >
                            All
                          </span>
                          <i className="ico-dot-red absolute -right-2 -top-2"></i>
                        </div>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }: { selected: any }) => (
                        <div
                          className={`relative flex cursor-pointer px-2 ${
                            selected
                              ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:-bottom-4 after:h-1 after:w-full'
                              : ''
                          }`}
                        >
                          <span
                            className={`text-sm tracking-wider ${
                              selected
                                ? 'font-semibold text-black'
                                : 'text-black-light'
                            }`}
                          >
                            Ongoing
                          </span>
                        </div>
                      )}
                    </Tab>
                    <Tab as={Fragment}>
                      {({ selected }: { selected: any }) => (
                        <div
                          className={`relative flex cursor-pointer px-2 ${
                            selected
                              ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:-bottom-4 after:h-1 after:w-full'
                              : ''
                          }`}
                        >
                          <span
                            className={`text-sm tracking-wider ${
                              selected
                                ? 'font-semibold text-black'
                                : 'text-black-light'
                            }`}
                          >
                            Resolved
                          </span>
                        </div>
                      )}
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <div className="mt-6 space-y-6">
                        {dataIssues.map((item, index) => {
                          return <List key={index} data={item} />;
                        })}
                      </div>
                      <div>
                        <Empty selectedTab={selectedTab} />
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <Empty selectedTab={selectedTab} />
                      </div>
                    </Tab.Panel>
                    <Tab.Panel>
                      <div>
                        <Empty selectedTab={selectedTab} />
                      </div>
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

/**
 * Empty component <Empty component on the issue page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {selectedTab: number}
 * {
      selectedTab (data selected)
    }
 * @returns {React.ReactElement}
 */

const Empty = ({ selectedTab }: { selectedTab: number }) => {
  let sub1;
  let sub2;
  if (selectedTab === 0) {
    sub1 = 'You have no issue so far';
    sub2 =
      'That’s great! When you report a problem next time, your issues will appear here.';
  } else if (selectedTab === 1) {
    sub1 = 'No issue is open currently';
    sub2 =
      'It means all is well! If you have any ongoing tickets, you will see the updates here.';
  } else {
    sub1 = 'Nothing is resolved yet';
    sub2 =
      'You either have never reported a problem before or your issue is still open.';
  }
  return (
    <div className="flex flex-col justify-center py-24 text-center">
      <div className="mx-auto mb-2.5">
        <Image src={EmptyImg} height={56} width={177} alt="no-image" />
      </div>
      <span className="font-semibold">{sub1}</span>
      <span className="mx-auto w-full max-w-[453px]">{sub2}</span>
    </div>
  );
};

/**
 * List component <List component on the issue page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TDataIssues}
 * {
      data (data for populate)
    }
 * @returns {React.ReactElement}
 */

const List = ({ data }: { data: TDataIssues }) => {
  return (
    <div className="relative flex rounded p-5 shadow">
      <div className="flex flex-1 flex-col">
        <span className="text-teal-primary font-semibold">{data.name}</span>
        <time className="text-shades mt-1 text-sm">26 Okt 2020</time>
        <span className="text-black-light mt-1 text-sm">
          Order ID : 2019111500110000001-01
        </span>
        <p className="mt-8 text-sm tracking-wider">
          Produk yang diterima tidak lengkap (Jumlah atau spare part)
        </p>
      </div>
      <div>
        {data.status === 'Ongoing' ? (
          <div className="bg-cosmic-latte rounded px-2">
            <span className="text-harvest-gold text-sm font-semibold">
              Ongoing
            </span>
          </div>
        ) : (
          <div className="bg-honeydew rounded px-2">
            <span className="text-success-dark text-sm font-semibold">
              Resolved
            </span>
          </div>
        )}
      </div>
      <i className="ico-dot-red absolute absolute -right-2 -top-2 top-0 right-0"></i>
    </div>
  );
};
export default Issues;
