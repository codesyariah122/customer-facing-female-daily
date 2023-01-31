/**
 * Product review component
 */

import { Tab } from '@headlessui/react';
import OrderReview from './OrderReview';
import MembersReview from './MembersReview';
import { IReview } from '@utils/pages/productDetail/productDetailInterface';

/**
 * Product review component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {IReview} props <input props based on IReview interface>
 * @returns {React.ReactElement}
 */
const Review = (props: IReview): React.ReactElement => {
  return (
    <div className="w-full pt-8">
      <div className="h-4 bg-slate-100 xl:my-4"></div>
      <Tab.Group>
        <Tab.List className="flex place-content-around border-b leading-9 xl:place-content-start">
          <Tab className="sm:4 inline-block border-b-4 border-transparent text-gray-500 hover:border-teal-500 focus:border-b-4 focus:border-teal-500 focus:outline-none active:border-b-4 active:border-teal-500 sm:flex xl:px-11">
            Members Review
          </Tab>
          <Tab className="sm:4 inline-block border-b-4 border-transparent text-gray-500 hover:border-teal-500 focus:border-b-4  focus:border-teal-500 focus:outline-none active:border-b-4 active:border-teal-500 sm:flex xl:px-11">
            Order Review
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <MembersReview
              memberReviewsUrl={props.memberReviewsUrl}
              totalRating={props.ratingMemberReview}
              totalReview={props.totalMemberReview}
              memberReviews={props.memberReviews}
            />
          </Tab.Panel>
          <Tab.Panel>
            <OrderReview
              totalRating={props.ratingOrderReview}
              totalReview={props.ratingOrderReview}
              orderReviews={props.orderReviews}
            />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      <div className="h-4 bg-slate-100 xl:my-4"></div>
    </div>
  );
};

export default Review;
