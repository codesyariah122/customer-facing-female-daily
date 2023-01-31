import React from 'react';
import { TopHeader } from 'ui';
import { headerData } from '@dummydata/index';

const HeaderSample: React.FC<{}> = (props) => {
  return (
    <>
      <TopHeader
        topbarTitle={headerData.topbarTitle}
        topbarDownloadTitle={headerData.topbarDownloadTitle}
        topbarAlloTitle={headerData.topbarAlloTitle}
        topbarHelpTitle={headerData.topbarHelpTitle}
        topbarLangId={headerData.topbarLangId}
        topbarLangEn={headerData.topbarLangEn}
        imgLogoSrc={headerData.imgLogoSrc}
        imgLogoHref={headerData.imgLogoHref}
        altLogoText={headerData.altLogoText}
        searchAllTitle={headerData.searchAllTitle}
        searchByTitle={headerData.searchByTitle}
        searchPlaceholder={headerData.searchPlaceholder}
        searchOptions={headerData.searchOptions}
        notifTotal={headerData.notifTotal}
        notifTransactionsTabTitle={headerData.notifTransactionsTabTitle}
        notifTransactionsTotal={headerData.notifTransactionsTotal}
        notifUpdatesTabTitle={headerData.notifUpdatesTabTitle}
        notifUpdatesTotal={headerData.notifUpdatesTotal}
        notifMarkAllTitle={headerData.notifMarkAllTitle}
        notifViewAllTitle={headerData.notifViewAllTitle}
        notifContents={headerData.notifContents}
        cartTotalAmount={headerData.cartTotalAmount}
        cartEmptyTitle={headerData.cartEmptyTitle}
        cartTotalTitle={headerData.cartTotalTitle}
        cartTotalPrice={headerData.cartTotalPrice}
        cartViewAllTitle={headerData.cartViewAllTitle}
        cartViewAllLink={headerData.cartViewAllLink}
        cartItems={headerData.cartItems}
        accountData={headerData.accountData}
        authData={headerData.authData}
        topmenuCategoryTitle={headerData.topmenuCategoryTitle}
        topmenuCategoriesMenu={headerData.topmenuCategoriesMenu}
        topmenuItems={headerData.topmenuItems}
      />
    </>
  );
};

export default HeaderSample;
