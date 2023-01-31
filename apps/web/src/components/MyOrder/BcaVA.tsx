import { useEffect, useState } from 'react';
interface timeProps {
  targetDate: number | string | Date;
  payment_reference_url: string;
}
const BcaVA = ({ targetDate, payment_reference_url }: timeProps) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  const getReturnValues = (countDown: number): Array<number> => {
    // calculate time left
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
  };
  const [days, hours, minutes, seconds] = getReturnValues(countDown);
  return (
    <div className="flex justify-between border-b p-4 ">
      <div>
        <span className="font-semibold">Please make your payment within</span>
        <div className="flex py-2 font-semibold">
          <div className="h-10 w-10 rounded bg-red-500 p-2 text-center text-white">
            <span>{(hours > 0 ? hours : '0').toString().padStart(2, '0')}</span>
          </div>
          <div className="mx-2 leading-9">
            <span>:</span>
          </div>
          <div className="h-10 w-10 rounded bg-red-500 p-2 text-center text-white">
            <span>
              {(minutes > 0 ? minutes : '0').toString().padStart(2, '0')}
            </span>
          </div>
          <div className="mx-2 leading-9">
            <span>:</span>
          </div>
          <div className="h-10 w-10 rounded bg-red-500 p-2 text-center text-white">
            <span>
              {(seconds > 0 ? seconds : '0').toString().padStart(2, '0')}
            </span>
          </div>
        </div>
      </div>
      {payment_reference_url && (
        <div className="py-4">
          <div className="bg-pink-primary h-[50px] w-[264px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white">
            <a
              href={payment_reference_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Pay Now
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default BcaVA;
