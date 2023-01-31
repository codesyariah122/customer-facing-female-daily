import { Tab } from '@headlessui/react';
import Newsticker from '../Checkout/Newsticker';
import DataOrder from './Dataorder';
import EmptyOrder from './EmptyOrder';
import FilterOrder from './FilterOrder';
import MenuAccount from '../MyAccount/Menu';
import { useEffect, useState } from 'react';
import { useGetmyOrderList } from '@hooks/useMyOrder';
import { SkeletonLoadingMyOrderCard } from './SkeletonLoadingMyOrderCard';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}
const MyOrder = () => {
  const status: any[] = [
    { name: 'All', code: '' },
    { name: 'Need Payment', code: 'NEED_PAYMENT' },
    { name: 'In Progress', code: 'PROCESS' },
    { name: 'In Delivery', code: 'DELIVERY' },
    { code: 'COMPLETE', name: 'Completed' },
    { name: 'Cancelled', code: 'CANCELLED' },
  ];
  const [searchKey, setSearchKey] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(status[0]);
  const [fromDate, setFromDate] = useState('');
  const { data, isLoading } = useGetmyOrderList({
    status: selectedIndex.code,
    key: searchKey,
    fromDate: fromDate,
  });

  return (
    <main className="container mx-auto mt-8 xl:max-w-screen-xl">
      <div className="flex">
        <MenuAccount />
        <div className="w-3/4 pl-8">
          <h2 className="text-xl font-semibold">MY ORDER</h2>
          <div className="my-4 rounded border p-4">
            <FilterOrder searchFor={setSearchKey} onFromDate={setFromDate} />
            <Tab.Group
              key="tab-key"
              onChange={(e: any) => setSelectedIndex(status[e])}
            >
              <Tab.List className="my-order-tab">
                {status.map((e: any, i: number) => (
                  <Tab
                    key={i}
                    className={({ selected }: any) =>
                      classNames(
                        selected
                          ? 'border-b-4 border-teal-500 outline-none'
                          : 'border-b-4 border-transparent'
                      )
                    }
                  >
                    {e.name}
                  </Tab>
                ))}
              </Tab.List>
              <Tab.Panels>
                {(isLoading &&
                  [...Array(4)].map((_: any, e: number) => (
                    <SkeletonLoadingMyOrderCard key={e} />
                  ))) ||
                  (data?.data?.items?.length > 0 &&
                    data.data.items?.map((items: object, i: number) => (
                      <DataOrder data={items} key={i} />
                    ))) || <EmptyOrder />}
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyOrder;
