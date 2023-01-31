'use client';
import { Tab } from '@headlessui/react';
import { useState } from 'react';
import {
  Notificationcontent,
  Notificationheader,
  Notfoundnotif,
} from '@components/app/account/notification';
import { Fragment } from 'react';

type TTabs = {
  name: string;
  code: string;
  kind: string;
};
const Notificationlist = (props: any) => {
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
  return (
    <div className="border-gray-light mt-3 rounded border p-5">
      <Tab.Group>
        <Tab.List className="border-gray-light flex flex w-full gap-x-8 border-b">
          {tabs.map((item: TTabs) => (
            <Tab as={Fragment} key={item.code}>
              {({ selected }: { selected: string }) => (
                <div
                  className={`relative flex cursor-pointer items-center justify-center space-x-2 px-2 pb-4 outline-none ${
                    selected
                      ? 'after:pseudo-content-comma after:bg-teal-primary after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full'
                      : ''
                  }`}
                >
                  <span
                    className={`text-sm tracking-wider ${
                      selected ? 'font-semibold text-black' : 'text-black-light'
                    }`}
                  >
                    {item.name}
                  </span>
                  {props?.data?.[item.code]?.unread > 1 && (
                    <span
                      style={{ minWidth: '24px' }}
                      className="bg-venetian-red  text-10 ml-1 rounded-full py-[2px] px-[7px] text-center font-medium text-white"
                    >
                      {props?.data?.[item.code]?.unread}
                    </span>
                  )}
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {props?.isLoading ? (
              <div>Loading</div>
            ) : (
              <div>
                <Notificationheader
                  unread={props?.data?.transactions?.unread}
                  label="Order Status"
                  code="TRANSACTION"
                  setReadAllFn={props?.setReadAllFn}
                />
                {(props?.data?.transactions?.notifications?.length > 0 &&
                  props?.data?.transactions?.notifications?.map((val: any) => (
                    <Notificationcontent
                      images={
                        val?.products !== undefined
                          ? val?.products[0].medias !== undefined
                            ? val?.products[0].medias[0].url
                            : undefined
                          : undefined
                      }
                      title={val.title_eng}
                      caption={val.message_eng}
                      date={val.date_time}
                      read={val.read_at || false}
                      code={val.code}
                      setReadFn={props.setReadFn}
                      link={val?.extra?.route_mobile}
                      key={val.code}
                    />
                  ))) || <Notfoundnotif />}
              </div>
            )}
          </Tab.Panel>
          <Tab.Panel>
            <div>
              <Notificationheader
                unread={props?.dataUpdates?.updates?.unread}
                label="Promos & Activities"
                code="UPDATE"
                setReadAllFn={props?.setReadAllFn}
                categories={props?.data?.categories}
                setParamsNotif={props.setParamsNotif}
                paramsNotif={props.paramsNotif}
              />
              {(props?.dataUpdates?.updates?.notifications?.length > 0 &&
                props?.dataUpdates?.updates?.notifications?.map((val: any) => (
                  <Notificationcontent
                    images={
                      val?.products !== undefined
                        ? val?.products[0].medias !== undefined
                          ? val?.products[0].medias[0].url
                          : undefined
                        : undefined
                    }
                    title={val.title_eng}
                    caption={val.message_eng}
                    date={val.date_time}
                    read={val.read_at || false}
                    code={val.code}
                    setReadFn={props.setReadFn}
                    link={val?.extra?.route_mobile}
                    key={val.code}
                  />
                ))) || <Notfoundnotif />}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Notificationlist;
