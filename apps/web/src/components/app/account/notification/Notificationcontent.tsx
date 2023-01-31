import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
import Image from 'next/image';
import React from 'react';
import placeholderImg from '@assets/images/thumbnail-placeholder.png';
type TNotificationcontent = {
  title: string;
  caption: string;
  images?: string | undefined;
  date?: string;
  read?: string | boolean | undefined;
  code?: string | undefined;
  link?: string | undefined;
  setReadFn?: (
    value: string | undefined,
    read: string | boolean | undefined,
    link: string | undefined
  ) => void;
};
const Notificationcontent = ({
  title,
  caption,
  images,
  date = '26 Feb 2021, 10:13',
  read,
  code,
  link,
  setReadFn,
}: TNotificationcontent) => {
  // fn for set read notif and trigger parent function (setReadFn)
  const readFn = () => {
    setReadFn?.(code, read, link);
  };
  // ---
  return (
    <div className="flex flex-col">
      <div
        className={`${
          !read ? 'bg-teal-lighter' : ''
        } border-gray-light last:pb-0" mb-4 flex cursor-pointer border-b p-5 pb-4 last:mb-0 last:border-0`}
        onClick={readFn}
      >
        <div className="mr-3 w-[54px] shrink">
          <Image
            src={images ?? placeholderImg}
            width={54}
            height={54}
            alt={title}
            className="border-gray-30 h-[54px] w-full overflow-hidden rounded border object-cover shadow-md"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <div className="text-sm font-medium tracking-wider">{title}</div>
          <div className="text-black-olive mt-2 text-sm tracking-wider">
            {caption}
          </div>
          <div className="text-black-light mt-2 text-xs">
            {UtcToLocalTime(date, 'DD MMM YYYY HH:MM')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notificationcontent;
