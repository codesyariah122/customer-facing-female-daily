/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React, { useState } from 'react';

/**
 * Interface WidgetContainerPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface WidgetContainerPropsInterface {
  useWidgetTitle?: boolean;
  widgetTitle?: string;
  widgetSeeAllTitle?: string;
  widgetSeeAllHref?: string;
  useWidgetTab?: boolean;
  widgetTab?: WidgetContainerTabsPropsInterface[];
  widgetContent?: any[];
}

/**
 * Interface WidgetContainerTabsPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface WidgetContainerTabsPropsInterface {
  widgetTabTitle?: string;
  widgetTabContent?: any[];
}

/**
 * WidgetContainer component <show widget container>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<WidgetContainerPropsInterface>} props <React.FC based on WidgetContainerPropsInterface>
 * @returns {React.ReactElement}
 */
export const WidgetContainer: React.FC<WidgetContainerPropsInterface> = (
  props
) => {
  const [tabActive, setTabActive] = useState(0);
  const onTabClick = (tabActive: number) => {
    setTabActive(tabActive);
  };

  return (
    <>
      <div className="container mx-auto mt-8 xl:max-w-screen-xl">
        {/* Widget title */}
        {props.useWidgetTitle ? (
          <div className="mb-8 flex items-center justify-between">
            <div className="text-22 font-semibold">{props.widgetTitle}</div>
            <a href={props.widgetSeeAllHref}>
              <span className="text-black-primary cursor-pointer font-semibold">
                {props.widgetSeeAllTitle}
              </span>
            </a>
          </div>
        ) : (
          ''
        )}

        {/* Widget tabs */}
        {props.useWidgetTab ? (
          <div className="flex gap-x-16 border-b border-gray-30">
            {props.widgetTab?.map((val, key) =>
              key === tabActive ? (
                <div
                  key={key}
                  className="after:pseudo-content-comma relative p-2 text-lg font-semibold text-teal-primary after:absolute after:left-0 after:bottom-0 after:h-1 after:w-full after:bg-teal-primary"
                  onClick={() => onTabClick(key)}
                >
                  {val.widgetTabTitle}
                </div>
              ) : (
                <div
                  key={key}
                  className="p-2 text-lg text-black-olive"
                  onClick={() => onTabClick(key)}
                >
                  {val.widgetTabTitle}
                </div>
              )
            )}
          </div>
        ) : (
          ''
        )}

        {/* Widget content */}
        <div className="mt-10 grid grid-cols-5 gap-9">
          {props.useWidgetTab ? (
            <>
              {props.widgetTab?.map((val, key) =>
                key === tabActive
                  ? val.widgetTabContent?.map((value, index) => (
                      <div key={index}>{value}</div>
                    ))
                  : val.widgetTabContent?.map((value, index) => (
                      <div className="hidden" key={index}>
                        {value}
                      </div>
                    ))
              )}
            </>
          ) : (
            <>
              {props.widgetContent?.map((val, key) => (
                <div key={key}>{val}</div>
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};
