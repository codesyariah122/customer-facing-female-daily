'use client';
import React from 'react';
import Link from 'next/link';
import { _DOWNLOAD_LINK_ } from '@constants/url_page';

/**
 * TODO:
 * next release will be implement redirect to chat feature
 */

/**
 * Minichat Header
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @returns {React.ReactElement}
 */

function Minichat(): React.ReactElement {
  return (
    <div className="relative mr-12">
      <div className="cursor-pointer">
        <Link href={_DOWNLOAD_LINK_}>
          <i className="ico-chat"></i>
        </Link>
      </div>
    </div>
  );
}

export default Minichat;
