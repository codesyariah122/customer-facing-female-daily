/**
 * Member review component
 */
import { IMemberReview } from '@utils/pages/productDetail/productDetailInterface';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type DataMamberReview = {
  memberReviewsUrl?: string;
  totalRating?: number;
  totalReview?: number;
  memberReviews?: IMemberReview[];
};

/**
 * Member review Content
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {DataMamberReview} props <input props based on DataMamberReview type>
 * @returns {React.ReactElement}
 */
const MembersReview = (props: DataMamberReview) => {
  const [memberReview, setMemberReview] = useState<IMemberReview[]>(
    props.memberReviews ? props.memberReviews : []
  );

  useEffect(() => {
    if (props.memberReviews) {
      setMemberReview(props.memberReviews);
    }
  }, [props.memberReviews]);

  /**
   * Read more limited content review
   * @param {e} any <event>
   * @param {index} number <array index>
   * @return {void}
   */
  const readReview = (e: any, index: number): void => {
    e.preventDefault();
    const dataMemberReview = [...memberReview];
    dataMemberReview[index].openLimitedReview =
      !dataMemberReview[index].openLimitedReview;
    setMemberReview(dataMemberReview);
  };

  /**
   * array ro rating
   */
  const rates = [1, 2, 3, 4, 5];
  const router = useRouter();

  const memberReviewUrl = props.memberReviewsUrl
    ? props.memberReviewsUrl
    : null;
  return (
    <div className="px-4 ">
      <h2 className="py-2 font-semibold">Members Review</h2>
      <div className="flex place-content-between border-b pb-2">
        <div className="my-4 flex">
          {props.totalReview && props.totalReview > 0 ? (
            <>
              <i className="ico-star-pink"></i>
              <span className="pl-2">{props.totalRating}</span>
            </>
          ) : null}
          <span className="pl-2 ">({props.totalReview} reviews)</span>
        </div>
        <div>
          <button>
            <span className="bg-pink-primary float-right mx-2 mb-4 cursor-pointer justify-center rounded p-2 py-2 px-4 font-semibold tracking-wide text-white">
              + Add Review
            </span>
          </button>
        </div>
      </div>
      {memberReview?.map((item, index) => {
        return (
          <div className="border-b py-4" key={item.id}>
            <div className="flex place-content-between">
              <div className="flex w-3/4">
                <img
                  src={item.userImage}
                  alt={item.username}
                  className="mx-2 w-[60px] w-24 rounded-full object-cover"
                />
                <div className="ml-4">
                  <span className="font-medium">{item.username}</span>
                  <div className="flex items-center text-xs text-slate-400">
                    <span className="pr-2">{item.ageRange}</span>
                    <i className="ico-separator"></i>
                    <span className="px-2">{item.beautyLevel}</span>
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    {item.skinType}
                  </span>
                </div>
              </div>
              <div>
                <span className="text-sm text-slate-400">
                  {item.reviewDate}
                </span>
              </div>
            </div>
            <div className="flex gap-x-1 py-2 pb-2">
              {rates.map((rate) =>
                rate <= Math.floor(item.ratingReview) ? (
                  <i key={Math.random()} className="ico-star-pink"></i>
                ) : (
                  <i key={Math.random()} className="ico-star-grey"></i>
                )
              )}
            </div>
            {item.isRecommend ? (
              <div className="flex pt-2">
                <i className="ico-recommend-member"></i>
                <div className="px-2">
                  <span>{item.username} recommends this product!</span>
                </div>
              </div>
            ) : null}
            <div className="py-4 leading-6">
              {item.openLimitedReview}
              {item.limitedReviewContent && !item.openLimitedReview ? (
                <div>
                  {item.limitedReviewContent}{' '}
                  <div
                    onClick={(e) => readReview(e, index)}
                    className="text-pink-primary"
                  >
                    Read more
                  </div>
                </div>
              ) : (
                <div>{item.reviewContent}</div>
              )}
            </div>
          </div>
        );
      })}
      {memberReviewUrl ? (
        <div className="flex place-content-center p-8">
          <button
            onClick={(e) => router.push(memberReviewUrl)}
            className="text-pink-primary flex w-72 cursor-pointer justify-center rounded border-2 border-pink-700 bg-white py-3 px-4 font-semibold tracking-wide"
          >
            See All Member’s Review
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default MembersReview;
