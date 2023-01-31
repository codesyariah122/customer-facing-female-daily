import IconLine from '@assets/images/line-track.png';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import Stepper from './stepdetailtrack';
import { IsubState, Istate } from '@utils/app/myorder';
import { useOrderDetailHistory } from '@hooks/useMyOrder';
import { UtcToLocalTime } from '@utils/commons/dateTimeHelper';
interface detailTrackProps {
  order_state?: Istate;
  order_state_sub: IsubState;
  shipping_code: string;
  order_id: string;
  reference_number: string;
}

interface typeHistory {
  state: Istate;
  en: string;
  id: string;
}
interface dataHistory {
  history: typeHistory;
  status_date: string;
}
const DetailTrack = (props: detailTrackProps) => {
  const { data, refetch, isLoading } = useOrderDetailHistory({
    orderId: props.order_id,
    referenceNumber: props.reference_number,
  });
  const { order_state, order_state_sub, shipping_code } = props;
  let status: number = 1;
  if (order_state?.code === 'COMPLETE') status = 4;
  if (order_state?.code === 'DELIVERY') {
    order_state_sub.code === 'DELIVERED' ? (status = 3) : (status = 2);
  }

  const setTimeZone = (): string => {
    /*
    get time zone code (wib,wit,wita)
    outside indonesia using AM/PM
  */
    const location = new Date().getTimezoneOffset().toString();
    let result: string = ' ';

    if (location === '-420') result = 'WIB';
    if (location === '-480') result = 'WITA';
    if (location === '-540') result = 'WITA';
    return result;
  };
  function handleOpenDisc() {
    if (data?.length > 0) return;
    refetch();
  }
  return (
    <>
      <div className="my-6 flex items-center justify-center">
        <Stepper width="80%" numberofactive={status} />
      </div>
      <div className="text-center leading-9">
        <span className="font-semibold">{order_state?.en}</span>
        <div>
          <span className="text-sm">Setoko - Thursday, 12 Feb 2021</span>
        </div>

        <p className="text-gray-500">{order_state_sub?.en}</p>
        <div className="relative">
          <Disclosure>
            {({ open }: any) => (
              <>
                <Disclosure.Button onClick={() => handleOpenDisc()}>
                  <div className=" text-pink-primary flex items-center justify-center space-x-2 py-2 pb-8 text-xs font-semibold">
                    <span>{open ? 'Close' : 'Open'} Details </span>
                    <i
                      className={`${
                        open ? '' : 'rotate-180 transform'
                      } ico-arrow-up`}
                    />
                  </div>
                </Disclosure.Button>
                <Disclosure.Panel className="mx-8 text-left text-gray-500">
                  <div className="border-y py-6 text-sm">
                    <h2>Tracking Number</h2>
                    <div className="text-pink-primary">
                      <span>{shipping_code}</span>
                    </div>
                  </div>
                  {(isLoading && (
                    <div className="flex flex-col divide-y py-4">
                      {[...Array(4)].map((_: any, e: number) => (
                        <div key={e} className="flex space-x-4 py-4">
                          <i className="skeleton box-border h-4 w-4 rounded-full" />
                          <div className="flex flex-1 flex-col space-y-4 ">
                            <i className="skeleton h-4 w-1/2" />
                            <i className="skeleton h-4 w-1/4" />
                            <i className="skeleton h-4 w-1/2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  )) || (
                    <div className="flex flex-col">
                      {data.map((e: dataHistory, i: number) => (
                        <div key={i}>
                          {i + 1 !== data.length && (
                            <Image
                              src={IconLine}
                              alt="line step"
                              className="absolute left-[40px] mt-[43px] h-[120px] w-[3px]"
                            />
                          )}
                          <div className="flex py-4">
                            <i
                              className={`ico-ellipse-teal mt-2 mr-4 ${
                                i > 0 ? 'ico-ellipse-grey' : 'ico-ellipse-teal'
                              }`}
                            />
                            <div className="leading-8">
                              <div>
                                <span className="text-black">
                                  FD Studio -{' '}
                                  {UtcToLocalTime(
                                    e.status_date,
                                    'dddd, DD MMM YYYY'
                                  )}
                                </span>
                                <div className="flex items-center">
                                  <span className="mr-4 font-semibold text-black">
                                    {e.history?.state?.en}
                                  </span>
                                  <span className="text-xs">
                                    <>
                                      {UtcToLocalTime(e.status_date, 'HH:mm')}{' '}
                                      {setTimeZone()}
                                    </>
                                  </span>
                                </div>
                              </div>
                              <div>
                                <span className="text-black">
                                  {e.history.en}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </>
  );
};

export default DetailTrack;
