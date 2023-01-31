import React from 'react';
import { FooterMain } from 'ui';
import { footerData } from '@dummydata/index';

const FooterSample: React.FC<{}> = (props) => {
  return (
    <>
      <FooterMain
        footerMottoText={footerData.footerMottoText}
        footerInfoData={footerData.footerInfoData}
        footerInfoConnect={footerData.footerInfoConnect}
        footerBarTitle={footerData.footerBarTitle}
      />
    </>
  );
};

export default FooterSample;
