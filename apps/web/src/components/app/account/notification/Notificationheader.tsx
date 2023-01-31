'use client';
import { useEffect, useState } from 'react';

interface Props {
  unread?: number;
  label: string;
  code: string;
  setReadAllFn: (value: string, unread: number) => void;
  categories?: any;
  setParamsNotif?: any;
  paramsNotif?: string | undefined;
}
const Notificationheader = ({
  unread = 0,
  label,
  code,
  setReadAllFn,
  categories,
  setParamsNotif,
  paramsNotif,
}: Props) => {
  const [tabs, setTabs] = useState<string | undefined>(paramsNotif);
  const dataCode = 'UPDATE';

  const handleClick = (code: string) => {
    setParamsNotif(code);
    setTabs(code);
  };
  return (
    <div>
      <div className="bg-gray-10 mt-4 flex justify-between py-4 px-2">
        <div className="text-sm font-medium tracking-wider">{label}</div>
        <div
          className={`${
            unread > 0 ? 'cursor-pointer' : ''
          } text-pink-primary text-xs font-semibold tracking-wider`}
          onClick={() => setReadAllFn(code, unread)}
        >
          Mark as read ({unread})
        </div>
      </div>
      {code === dataCode && (
        <div className="mt-5 mb-5 flex space-x-3">
          {categories?.map((item: any) => {
            return (
              <div
                className={`${
                  tabs === item.code
                    ? 'text-teal-primary border-teal-primary font-semibold'
                    : ''
                } cursor-pointer rounded-[30px] border px-7 py-2`}
                onClick={() => handleClick(item.code)}
                key={item.code}
              >
                <span className="text-sm">{item.en}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Notificationheader;
