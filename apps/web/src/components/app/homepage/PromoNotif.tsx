import React from 'react';
import { getTextContentOnlyFromHtml } from '@utils/helpers';

interface INewsTicker {
  newsTicker: any;
}
/**
 * <PromoNotif>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @param {INewsTicker} newsTicker get props to display NEWS_TICKER
 * @returns {React.ReactElement}
 */

const PromoNotif = ({ newsTicker }: INewsTicker): React.ReactElement => {
  const notifMsg = newsTicker?.value ? JSON.parse(newsTicker.value) : null;
  return (
    <>
      {notifMsg ? (
        <div className="mx-auto flex w-full max-w-3xl items-center">
          <div className="fomt-medium flex w-full justify-center rounded-md bg-[#E6F7FF] p-2 text-sm">
            {getTextContentOnlyFromHtml(notifMsg.message)}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default PromoNotif;
