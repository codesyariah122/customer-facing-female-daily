import { useEffect, useState } from 'react';

/**
 * FlashsaleTimer component <show FlashsaleTimer component on Flashsale>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {any} props <data for populate>
 * @returns {React.ReactElement}
 * FIXME: props type still use any
 */

const FlashsaleTimer = (props: any) => {
  const [timeOut, setTimeOut] = useState<{
    hours: string;
    minutes: string;
    seconds: string;
  }>({ hours: '00', minutes: '00', seconds: '00' });
  useEffect(() => {
    const countDownDate = new Date(props.endTime).getTime();

    const x = setInterval(function () {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      let hours = Math.floor(distance / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setTimeOut({
        hours: hours < 10 ? '0' + hours.toString() : hours.toString(),
        minutes: minutes < 10 ? '0' + minutes.toString() : minutes.toString(),
        seconds: seconds < 10 ? '0' + seconds.toString() : seconds.toString(),
      });
      if (distance < 0) {
        clearInterval(x);
        setTimeOut({ hours: '00', minutes: '00', seconds: '00' });
      }
    }, 1000);
  }, [props.endTime]);

  return (
    <div className="itemss-center flex gap-x-2">
      <div className="bg-pink-primary rounded py-[4px] px-[9px] text-lg font-semibold text-white">
        {timeOut.hours}
      </div>
      <div className="text-xl font-medium">:</div>
      <div className="bg-pink-primary rounded py-[4px] px-[9px] text-lg font-semibold text-white">
        {timeOut.minutes}
      </div>
      <div className="text-xl font-medium">:</div>
      <div className="bg-pink-primary rounded py-[4px] px-[9px] text-lg font-semibold text-white">
        {timeOut.seconds}
      </div>
    </div>
  );
};

export default FlashsaleTimer;
