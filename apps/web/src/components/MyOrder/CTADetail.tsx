import { useState } from 'react';
import Link from 'next/link';
import CancelOrder from './CancelOrder';
import GiveReview from './GiveReview';
import ModalTrackingOrder from './ModalTrackingOrder';
import { Idestination, Iorigin, Istate } from '@utils/app/myorder';
import ModalConfirmOrder from './ModalConfirmOrder';
import ModalDownloadApp from '@components/Global/ModalDownloadApp';
interface subStatus {
  code: string;
}

interface courier {
  logistic_name: string;
}
interface props {
  order_state: Istate;
  order_state_sub: subStatus;
  courier: courier;
  shipping_code: string;
  origin: Iorigin;
  destination: Idestination;
  order_id: string;
  reference_number: string;
  Onreorder: () => void;
}

const ReOrder = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      onClick={() => onClick()}
      className="bg-pink-primary my-2  h-[50px]  w-[265px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white"
    >
      Reorder All
    </button>
  );
};

const MyIssues = () => {
  return (
    <div className="text-pink-primary my-4 my-2   h-[50px] w-[265px] cursor-pointer rounded border border-rose-500 bg-white p-2 text-center text-sm font-semibold leading-8 tracking-wide">
      Go to My Issues
    </div>
  );
};

/**
 * @author Uniq Fadilah <Uniq.Fadilah@ctcorpdigital.com>
 * @param order_state
 * @returns
 */
const CTADetail = ({
  order_state,
  order_state_sub,
  courier,
  shipping_code,
  origin,
  destination,
  order_id,
  reference_number,
  Onreorder,
}: props) => {
  const code = order_state?.code;
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };

  const [mTracking, setMtracking] = useState(false);
  const canCancle = code === 'NEED_CONFIRMATION' || code === 'PROCESS';

  return (
    <div className="flex flex-col">
      {canCancle && (
        <>
          <button className="text-pink-primary  h-[50px] w-[265px] cursor-pointer rounded border border-rose-500 bg-white p-2 text-center text-sm font-semibold leading-9 tracking-wide">
            Ask Seller
          </button>
          {order_state_sub.code !== 'PACKING_COMPLETE' && <CancelOrder />}
        </>
      )}

      {order_state?.code === 'DELIVERY' && (
        <>
          {order_state_sub.code !== 'DELIVERED' && (
            <>
              <button
                onClick={() => {
                  setMtracking(true);
                }}
                className="bg-pink-primary my-2  h-[50px] w-[265px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white"
              >
                Track Delivery
              </button>
              <ModalTrackingOrder
                appear={mTracking}
                onClose={() => {
                  setMtracking(false);
                }}
                origin={origin}
                destination={destination}
                shipping_code={shipping_code}
                state={order_state}
                logistic_name={courier.logistic_name}
                order_id={order_id}
                reference_number={reference_number}
              />
            </>
          )}
          {order_state_sub.code === 'DELIVERED' && (
            <>
              <div
                onClick={openModal}
                className="bg-pink-primary my-2 h-[50px]  w-[265px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white"
              >
                Confirm Reception
              </div>
              <ModalConfirmOrder
                order_id={order_id}
                reference_number={reference_number}
                isModalOpen={isOpen}
                closeModal={closeModal}
              />
            </>
          )}
          {order_state_sub.code !== 'WAITING_FOR_COURIER' && (
            <button className="text-pink-primary my-4 my-2  h-[50px] w-[265px] cursor-pointer rounded border border-rose-500 bg-white p-2 text-center text-sm font-semibold leading-8 tracking-wide">
              I have a problem with this order
            </button>
          )}
        </>
      )}

      {order_state?.code === 'COMPLETE' && (
        <>
          {(order_state_sub.code !== 'IN_COMPLAINT' && (
            <ReOrder onClick={() => Onreorder()} />
          )) || <MyIssues />}
        </>
      )}
      {/* <div
        onClick={openModal}
        className="bg-pink-primary my-2 h-[50px]  w-[265px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white"
      >
        Give Review
      </div> */}
      <GiveReview />
      <div className="mt-6 cursor-pointer rounded  px-2 text-center text-sm text-sm tracking-wide">
        Need help? Go to our
        <Link
          href="/help-center"
          className="text-pink-primary pl-2 font-semibold"
        >
          Help Center
        </Link>
      </div>
    </div>
  );
};

export default CTADetail;
