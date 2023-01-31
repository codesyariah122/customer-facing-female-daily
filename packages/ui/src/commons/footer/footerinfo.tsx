/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React from 'react';
import {
  FooterInfoBarInterface,
  FooterInfoLinkInterface,
} from '../../utils/interfaces/ui';

/**
 * FooterInfoLinkPropsInterface interface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface FooterInfoLinkPropsInterface extends FooterInfoLinkInterface {
  footerInfoText?: string;
  footerInfoLink?: string;
  footerInfoImgSrc?: string;
  footerInfoAlt?: string;
}

/**
 * FooterInfoBarPropsInterface interface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface FooterInfoBarPropsInterface extends FooterInfoBarInterface {}

/**
 * FooterInfoConnect component <show customer connect engagement section on footer>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<FooterInfoLinkPropsInterface>} props <React.FC based on FooterInfoLinkPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const FooterInfoConnect: React.FC<FooterInfoLinkPropsInterface> = (
  props
) => {
  return (
    <>
      <li>
        <a href={props.footerInfoLink}>
          <img
            src={props.footerInfoImgSrc}
            alt={props.footerInfoAlt}
            className="cursor-pointer"
          />
        </a>
      </li>
    </>
  );
};

/**
 * FooterInfoBar component <show info bar on footer>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {React.FC<FooterInfoBarPropsInterface>} props <React.FC based on FooterInfoBarPropsInterface interface>
 * @returns {React.ReactElement}
 */
export const FooterInfoBar: React.FC<FooterInfoBarPropsInterface> = (props) => {
  return (
    <>
      <div className="flex justify-between border-t border-gray-30 py-8 px-12">
        {props.footerInfoData.map((val, key) => (
          <div className="flex flex-col" key={key}>
            <strong className="font-semibold tracking-wider">
              {val.footerInfoTitle}
            </strong>
            <ul className="flex flex-col">
              {val.footerInfo?.map((value, index) => (
                <li className="mt-3" key={index}>
                  <a href={value.footerInfoLink}>
                    <span className="cursor-pointer text-sm tracking-wider">
                      {value.footerInfoText}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="flex flex-col">
          {props.footerInfoConnect.map((val, key) =>
            key ? (
              <div className="mt-10" key={key}>
                <strong className="font-semibold tracking-wider">
                  {val.footerInfoTitle}
                </strong>
                <ul className="mt-3 flex gap-x-6">
                  {val.footerInfo?.map((value, index) => (
                    <FooterInfoConnect {...value} key={index} />
                  ))}
                </ul>
              </div>
            ) : (
              <div key={key}>
                <strong className="font-semibold tracking-wider">
                  {val.footerInfoTitle}
                </strong>
                <ul className="mt-3 flex gap-x-6">
                  {val.footerInfo?.map((value, index) => (
                    <FooterInfoConnect {...value} key={index} />
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
