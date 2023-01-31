/**
 * Total review information component
 */
type DataProductReview = {
  ratingMemberReview?: number;
  totalMemberReview?: number;
  userRecommendationPercentage?: number;
};

/**
 * Product total review component
 * @author  Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author  Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param   {ratingBeautyReview} number <number>
 * @param   {totalBeautyReview} number <number>
 * @param   {userRecommendationPercentage} number <number>
 * @returns {React.ReactElement}
 */
const TotalReview = (props: DataProductReview) => {
  return (
    <>
      {props.totalMemberReview ? (
        <div className="mx-4 flex bg-rose-50 py-2 text-xs xl:mx-0">
          <div className="flex items-center px-2">
            <i className="ico-trusted-fd-large mx-2"></i>
            <div className="text-gray-20 mr-3 grid text-xs tracking-wider">
              <div className="font-semibold">
                <span>Female Daily Beauty Review</span>
              </div>
              <div className="flex place-content-between">
                <div className="flex items-center">
                  <div className="flex text-sm">
                    <i className="ico-star-pink"></i>
                    <span className="text-pink-primary font-semibold">
                      {props.ratingMemberReview}
                    </span>
                    <span className="mr-2">/5</span>
                  </div>
                  <span className="mr-12 text-xs text-gray-500">
                    {props.totalMemberReview} reviews
                  </span>
                </div>
                {props.userRecommendationPercentage ? (
                  <div className="flex items-center">
                    <i className="ico-recommend"></i>
                    <span className="text-pink-primary text-sm font-semibold">
                      {props.userRecommendationPercentage}%
                    </span>
                    <span className="mx-2 text-gray-500">user recommends</span>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default TotalReview;
