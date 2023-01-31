/**
 * Session Time Tabs Component on Flash Sale Page
 * @author Hamam <os.hamam@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */
import { useRouter } from 'next/navigation';
import React, { Fragment, useCallback, useEffect, useState } from 'react';

const TimeTabs = ({
  dataTime,
  selectedTime,
  changeTime,
}: {
  dataTime: any | undefined;
  selectedTime: any;
  changeTime: (time: any, index: number) => void;
}) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  /**
   * make time countdown
   */

  const [session, setSession] = useState<any>([]);
  useEffect(() => {
    if (dataTime) {
      setSession(dataTime.data?.sessions);
    }
  }, [dataTime]);

  const timeout = useCallback(() => {
    window.location.reload();
  }, []);

  useEffect(() => {
    if (session) {
      const target = new Date(session[0]?.end);

      const interval = setInterval(() => {
        const now = new Date();
        const difference = target.getTime() - now.getTime();

        const h = Math.floor(difference / (1000 * 60 * 60));
        setHours(h);

        const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        setMinutes(m);

        const s = Math.floor((difference % (1000 * 60)) / 1000);
        setSeconds(s ?? 0);

        if (h <= 0 && m <= 0 && s <= 0) {
          timeout();
          clearInterval(interval);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [session, timeout]);

  /**
   *
   * formating datetine to time for coming soon tab
   */
  function toTime(value: any) {
    const date = new Date(value);
    const h = date.getHours().toString().padStart(2, '0');
    const m = date.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
  }
  return (
    <div>
      <div className="border-gray-light my-4 grid w-full grid-cols-4 gap-x-16 border-b">
        {session?.slice(0, 4).map((time: any, index: number) => {
          if (index == 0) {
            return (
              <div
                key={time.code}
                onClick={() => changeTime(time, index)}
                className={`border-box flex cursor-pointer flex-col justify-end p-2 text-center ${
                  selectedTime?.id == time.id
                    ? 'after:pseudo-content-comma after:bg-teal-primary relative font-semibold after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full'
                    : ''
                }`}
              >
                <div className="my-1">
                  <span className="text-black-light text-xs font-normal">
                    Sale ends in
                  </span>
                </div>
                <div className="flex justify-center gap-1">
                  <span className="bg-pink-primary m-w-8 flex h-8 items-center justify-center rounded px-2 text-lg font-semibold text-white">
                    {hours.toString().padStart(2, '0')}
                  </span>
                  <span className="text-lg font-semibold">:</span>
                  <span className="bg-pink-primary flex h-8 w-8 items-center justify-center rounded text-lg font-semibold text-white">
                    {minutes.toString().padStart(2, '0')}
                  </span>
                  <span className="text-lg font-semibold">:</span>
                  <span className="bg-pink-primary flex h-8 w-8 items-center justify-center rounded text-lg font-semibold text-white">
                    {seconds.toString().padStart(2, '0')}
                  </span>
                </div>
                <div className="my-2">
                  <span className="text-lg">Happening Now</span>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={time.id}
                onClick={() => changeTime(time, index)}
                className={`text-black-light border-box flex cursor-pointer flex-col justify-end p-2 text-center ${
                  selectedTime?.id == time.id
                    ? 'after:pseudo-content-comma after:bg-teal-primary relative font-semibold text-black after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full'
                    : ''
                }`}
              >
                <div>
                  <span className="text-black-light text-sm font-normal">
                    {toTime(time.start)}
                  </span>
                </div>
                <div className="my-2">
                  <span className="text-lg">Coming Soon</span>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default TimeTabs;
