'use client';
import { Menu } from '@headlessui/react';
import { useState, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tab } from '@headlessui/react';
import { useNotification } from '@hooks/useNotification';
import { useNotificationCount } from '@hooks/useNotifiationCount';
import placeholderImg from '@assets/images/thumbnail-placeholder.png';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import { useNotificationReadMutate } from '@hooks/useNotification/MutateRead';
import { useRouter } from 'next/navigation';
import FDLoading from '../spin/FDLoading';
import { useNotificationReadAllMutate } from '@hooks/useNotification/MutateReadAll';
import empty from '@assets/images/ico-empty-notif.svg';

type TTabs = {
  name: string;
  code: string;
  kind: string;
};

function Mininotif() {
  const [tabs, setTabs] = useState<TTabs[]>([
    {
      name: 'Transactions',
      code: 'transactions',
      kind: 'TRANSACTION',
    },
    {
      name: 'Updates',
      code: 'updates',
      kind: 'UPDATE',
    },
  ]);
  const [isLoadingPage, setIsLoadingPage] = useState<boolean>(false);
  const router = useRouter();
  const { data, isLoading, refetch: refetchNotif } = useNotification('ALL');
  const { data: dataCount, refetch: refetchCount } = useNotificationCount();

  // for mutate/update read notif
  const { mutate: mutateRead } = useNotificationReadMutate();
  // ---

  // for mutate/update read all notif
  const { mutate: mutateReadAll } = useNotificationReadAllMutate();
  // ---

  // fn for update read notif
  const setRead = (
    code: string,
    read: boolean | undefined,
    link: string | undefined
  ) => {
    setIsLoadingPage(true);
    !read &&
      mutateRead(code, {
        onSuccess: () => {
          refetchNotif();
        },
      });
    link !== undefined ? router.push(link) : setIsLoadingPage(false);
  };
  // ---

  // fn for mark all as read
  const markAllAsRead = () => {
    dataCount.unread > 0 && setIsLoadingPage(true);
    dataCount.unread > 0 &&
      mutateReadAll('ALL', {
        onSuccess: () => {
          refetchNotif();
          refetchCount();
          setIsLoadingPage(false);
        },
      });
  };
  // ---

  return (
    <Menu as="div" className="relative mr-12">
      <Menu.Button as="div" className="cursor-pointer">
        <i className="ico-notif"></i>
        {dataCount?.unread > 0 && (
          <div className="absolute -top-1 -right-1">
            <div className="bg-yellow-counter border-orange-counter flex h-5 w-5 items-center justify-center rounded-full border text-[8px] font-medium">
              {dataCount?.unread}
            </div>
          </div>
        )}
      </Menu.Button>
      <Menu.Items
        as="section"
        className="w-440 border-gray-10 absolute -right-[140px] top-[62px] z-10 rounded border bg-white shadow-lg shadow-md focus:outline-none"
      >
        <Tab.Group>
          <div className="flex p-2">
            <Tab.List className="border-gray-light flex flex w-full justify-center border-b pb-3">
              {tabs.map((item: TTabs) => (
                <Tab as={Fragment} key={item.code}>
                  {({ selected }: { selected: string }) => (
                    <div
                      className={`relative flex w-1/2 cursor-pointer
                      items-center justify-center ${
                        selected
                          ? 'after:pseudo-content-comma after:bg-pink-primary after:absolute after:left-0 after:-bottom-3 after:h-1 after:w-full '
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
                        {item.name}
                      </span>
                      {data?.[item.code]?.unread > 0 && (
                        <span
                          style={{ minWidth: '24px' }}
                          className="bg-venetian-red  text-10 ml-1 rounded-full py-[2px] px-[7px] text-center font-medium text-white"
                        >
                          {data?.[item.code]?.unread}
                        </span>
                      )}
                    </div>
                  )}
                </Tab>
              ))}
            </Tab.List>
          </div>
          <Tab.Panels>
            {tabs.map((item: TTabs) => (
              <Tab.Panel key={item.code}>
                <div className="flex max-h-[300px] flex-col overflow-y-auto p-2">
                  {(data?.[item.code]?.notifications?.length > 0 &&
                    data?.[item.code]?.notifications?.map((val: any) => (
                      <div
                        className={`${
                          !val.read_at ? 'bg-teal-lighter' : ''
                        } border-gray-light flex cursor-pointer border-b p-5 pb-4 last:mb-4 last:border-0 last:pb-0`}
                        key={val.code}
                        onClick={() => {
                          setRead(
                            val.code,
                            val.read_at || false,
                            val?.extra?.route_mobile
                          );
                        }}
                      >
                        <div className="w-[54px] shrink">
                          <Image
                            src={
                              val?.products?.length > 0 &&
                              val?.products[0]?.medias?.length > 0 &&
                              val?.products[0]?.medias[0]?.url
                                ? val?.products[0].medias[0].url
                                : placeholderImg
                            }
                            width={54}
                            height={54}
                            className="border-gray-30 h-[54px] w-full overflow-hidden rounded border object-cover shadow-md"
                            alt={val.title_eng}
                          />
                        </div>
                        <div className="ml-3 flex flex-1 flex-col">
                          <div className="text-sm tracking-wider">
                            {val.title_eng}
                          </div>
                          <div className="mt-2 text-xs tracking-wider">
                            {val.message_eng}
                          </div>
                          <div className="text-black-light text-10 mt-2">
                            {UtcToLocalTime(val.date_time, 'DD MMM YYYY HH:MM')}
                          </div>
                        </div>
                      </div>
                    ))) || (
                    <div className="flex flex-col items-center justify-center py-10">
                      <Image
                        src={empty}
                        alt="empty notification"
                        width={100}
                        height={100}
                        className="mx-auto"
                      />
                      <div className="mt-8 text-sm font-medium tracking-wider">
                        Belum ada notifikasi, tunggu ya!
                      </div>
                      <div className="mt-4 text-xs tracking-wider">
                        Notifikasi akan kami kirimkan untuk kamu disini.
                      </div>
                    </div>
                  )}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
        <div className="bg-gray-10 flex items-center justify-between p-5 shadow-md">
          <div className="cursor-pointer" onClick={() => markAllAsRead()}>
            Mark all as read
          </div>
          <Link href="/account/notification">View All</Link>
        </div>
        {isLoadingPage && <FDLoading />}
      </Menu.Items>
    </Menu>
  );
}

export default Mininotif;
