/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @package ui
 * @license Proprietary
 */
import React, { useState, useRef, useEffect } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuCategoryItemsInterface } from '../../utils/interfaces/ui';
import {
  isCategoriesHasChild,
  UiDefaultConfig,
  CategoryMenuParentType,
} from '../../utils/ui';

/**
 * Interface MenuCategoryPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MenuCategoryPropsInterface {
  categoryTitle?: string;
  categoriesMenu?: MenuCategoryItemsInterface[];
}

/**
 * Interface MenuItemsPropsInterface
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
interface MenuCategoryItemsPropsInterface extends MenuCategoryItemsInterface {}

/**
 * Type for MenuCategory
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
type MenuCategoryType = {
  category: CategoryMenuParentType;
  setCategory: (category: CategoryMenuParentType) => void;
};

/**
 * MenuCategoryItemsPropsType props <union between MenuCategoryType and MenuCategoryItemsPropsInterface>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 */
type MenuCategoryItemsPropsType =
  | MenuCategoryType
  | MenuCategoryItemsPropsInterface;

/**
 * MenuItemsParent component <show parent categories menu items on topmenu>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MenuCategoryItemsPropsType>} props <React.FC based on MenuCategoryItemsPropsType props>
 * @returns {React.ReactElement}
 */
export const MenuItemsParent: React.FC<MenuCategoryItemsPropsType> = (
  props
) => {
  return (
    <>
      <a
        className="c1 group flex items-center justify-between"
        href={'categoryHref' in props ? props.categoryHref : '#'}
      >
        <div>
          <div className="flex items-center">
            <img src={'categoryImg' in props ? props.categoryImg : ''} />
            <span className="text ml-4 text-sm font-semibold tracking-wider group-hover:text-pink-primary">
              {'categoryName' in props ? props.categoryName : ''}
            </span>
          </div>
          <i className="ico-polygon-right-grey"></i>
        </div>
      </a>
    </>
  );
};

/**
 * MenuItemsChild component <show categories child menu items on topmenu>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {React.FC<MenuCategoryItemsPropsType>} props <React.FC based on MenuCategoryItemsPropsType interface>
 * @returns {React.ReactElement}
 */
export const MenuItemsChild: React.FC<MenuCategoryItemsPropsType> = (props) => {
  const isValid =
    props &&
    Object.keys(props).length &&
    Object.getPrototypeOf(props) === Object.prototype;

  if (isValid) {
    return (
      <>
        <Popover.Panel>
          {/* Child section */}
          {'parentKey' in props &&
          'parentActive' in props &&
          props['parentKey'] === props['parentActive'] ? (
            <a
              href={'categoryHref' in props ? props['categoryHref'] : '#'}
              className="c2 flex items-center justify-between"
            >
              <span className="text text-sm font-semibold tracking-wider">
                {'categoryName' in props ? props['categoryName'] : ''}
              </span>
            </a>
          ) : (
            ''
          )}
        </Popover.Panel>
      </>
    );
  }

  return <></>;
};

/**
 * MenuItemsChildSubCategory component <show child subCategory on topmenu>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {React.FC<MenuCategoryItemsPropsType>} props <React.FC based on MenuCategoryItemsPropsType>
 * @returns {React.ReactElement}
 */
export const MenuItemsChildSubCategory: React.FC<MenuCategoryItemsPropsType> = (
  props
) => {
  const isValid =
    'parentKey' in props &&
    'parentActive' in props &&
    props['parentKey'] === props['parentActive'];

  return (
    <>
      {isValid ? (
        <div className="flex flex-col">
          <a
            href={'categoryHref' in props ? props['categoryHref'] : '#'}
            className="c3 mt-2 flex items-center justify-between"
          >
            <span className="text text-sm tracking-wider">
              {'categoryName' in props ? props['categoryName'] : ''}
            </span>
          </a>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

/**
 * MenuItemsSubchild component <show SubChild categories menu items on topmenu>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MenuCategoryItemsPropsType>} props <React.FC based on MenuCategoryItemsPropsType>
 * @returns {React.ReactElement}
 */
export const MenuItemsSubchild: React.FC<MenuCategoryItemsPropsType> = (
  props
) => {
  const isValid: boolean =
    'parentKey' in props &&
    'parentActive' in props &&
    props['parentKey'] === props['parentActive'];

  return (
    <>
      {isValid ? (
        <Popover.Panel>
          <a
            href={'categoryHref' in props ? props['categoryHref'] : '#'}
            className="c3 flex items-center justify-between"
          >
            <span className="text text-sm tracking-wider">
              {'categoryName' in props ? props['categoryName'] : ''}
            </span>
          </a>
        </Popover.Panel>
      ) : (
        ''
      )}
    </>
  );
};

/**
 * MenuItemsImage component <show image banner on categories menu>
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param {React.FC<{}>} props <React.FC type>
 * @returns {React.ReactElement}
 */
export const MenuItemsImage: React.FC<{ imgSrc: string }> = (props) => {
  if (props.imgSrc) {
    return (
      <>
        <div className="flex w-1/4 flex-col py-8">
          <img src={props.imgSrc} className="w-full" />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="flex w-1/4 flex-col py-8"></div>
    </>
  );
};

/**
 * MenuCategoryItems component <show categories menu items on topmenu>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MenuCategoryItemsPropsType>} props <React.FC based on MenuCategoryItemsPropsType interface>
 * @returns {React.ReactElement}
 */
export const MenuCategoryItems: React.FC<MenuCategoryItemsPropsType> = (
  props
) => {
  const [parentKey, setParentKey] = useState(-1);
  const [imgBanner, setImgBanner] = useState('');
  const [childKey, setChildKey] = useState(-1);
  const [subchildKey, setSubchildKey] = useState(-1);
  const onParentHover = (key: number, imgStr: string): void => {
    setParentKey(key);
    setImgBanner(imgStr);
  };
  const onChildHover = (key: number, imgStr: string): void => {
    setChildKey(key);
    setImgBanner(imgStr);
  };
  const onChildSubCategoryHover = (key: number, imgStr: string): void => {
    setChildKey(key);
    setImgBanner(imgStr);
  };
  const onSubChildHover = (key: number, imgStr: string): void => {
    setSubchildKey(key);
    setImgBanner(imgStr);
  };

  return (
    <>
      {/* Show parent categories */}
      <div className="flex w-1/4 flex-col space-y-4 border-r border-[#DADADA] py-8 pr-3">
        <Popover.Panel>
          {'categories' in props
            ? props.categories?.map((val, key) => (
                <div
                  key={key}
                  onMouseEnter={() =>
                    onParentHover(key, val.bannerImg ? val.bannerImg : '')
                  }
                  onMouseLeave={() => onParentHover(key, '')}
                >
                  <MenuItemsParent {...val} />
                </div>
              ))
            : ''}
        </Popover.Panel>
      </div>

      {/* Show child categories */}
      <div className="flex w-1/4 flex-col space-y-4 border-r border-[#DADADA] py-8 pr-3 pl-6">
        {'categories' in props && isCategoriesHasChild(props.categories)
          ? props.categories?.map((val, index) =>
              val.categories
                ? val.categories.map((child, key) => (
                    <div key={key}>
                      <Popover.Panel>
                        <div
                          onMouseEnter={() =>
                            onChildHover(
                              key,
                              child.bannerImg ? child.bannerImg : ''
                            )
                          }
                          onMouseLeave={() => onChildHover(key, '')}
                        >
                          <MenuItemsChild
                            {...{ parentKey: index, parentActive: parentKey }}
                            {...child}
                          />
                        </div>
                        {child.subCategory?.map((childSubCategory, idx) => (
                          <div
                            key={idx}
                            onMouseEnter={() =>
                              onChildSubCategoryHover(
                                idx,
                                childSubCategory.bannerImg
                                  ? childSubCategory.bannerImg
                                  : ''
                              )
                            }
                            onMouseLeave={() =>
                              onChildSubCategoryHover(idx, '')
                            }
                          >
                            <MenuItemsChildSubCategory
                              {...{ parentKey: key, parentActive: parentKey }}
                              {...childSubCategory}
                            />
                          </div>
                        ))}
                      </Popover.Panel>
                    </div>
                  ))
                : ''
            )
          : ''}
      </div>

      {/* Show SubChild categories */}
      {'categories' in props && isCategoriesHasChild(props.categories)
        ? props.categories?.map((val) =>
            isCategoriesHasChild(val.categories)
              ? val.categories?.map((child) =>
                  isCategoriesHasChild(child.categories)
                    ? child.categories?.map((subChild, key) => (
                        <div
                          className="flex w-1/4 flex-col space-y-2 py-8 pr-3 pl-6"
                          key={key}
                        >
                          <div
                            onMouseEnter={() =>
                              onSubChildHover(
                                key,
                                subChild.bannerImg ? subChild.bannerImg : ''
                              )
                            }
                            onMouseLeave={() => onSubChildHover(key, '')}
                          >
                            <MenuItemsSubchild
                              {...{ parentKey: key, parentActive: childKey }}
                              {...subChild}
                            />
                          </div>
                        </div>
                      ))
                    : ''
                )
              : ''
          )
        : ''}

      {/* Show menu image banner */}
      <MenuItemsImage imgSrc={imgBanner} />
    </>
  );
};

/**
 * MenuCategory component <showing categories menu on topmenu>
 * @author  Anan Fauzi <anan.fauzi@ctcorpdigital.com>
 * @param   {React.FC<MenuCategoryPropsInterface>} props <React.FC based on MenuCategoryPropsInterface>
 * @returns {React.ReactElement}
 */
export const MenuCategory: React.FC<MenuCategoryPropsInterface> = (props) => {
  /**
   * Local properties init
   */
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);
  let timeout: any;

  /**
   * toogleMenu property <setOpenState and click behaviour>
   * @param {boolean} open <openState indicator>
   */
  const toggleMenu = (open: boolean): void => {
    setOpenState(!open);
    buttonRef?.current?.click();
  };

  /**
   * Action do on mouse hover
   * @param {boolean} open <openState indicator>
   * @param {string} action <hover action>
   */
  const onHover = (open: boolean, action: string): void => {
    if (!open && !openState && action === 'onMouseEnter') {
      clearTimeout(timeout);
      timeout = setTimeout(
        () => toggleMenu(open),
        UiDefaultConfig.timeoutDuration
      );
    }

    if (open && openState && action === 'onMouseLeave') {
      clearTimeout(timeout);
      timeout = setTimeout(
        () => toggleMenu(open),
        UiDefaultConfig.timeoutDuration
      );
    }

    if (!open && openState) {
      clearTimeout(timeout);
      timeout = setTimeout(
        () => toggleMenu(open),
        UiDefaultConfig.timeoutDuration
      );
    }
  };

  return (
    <>
      <Popover>
        {({ open }) => (
          <>
            <Popover.Button ref={buttonRef}>
              <div
                className="flex items-center"
                onMouseEnter={() => onHover(open, 'onMouseEnter')}
              >
                <i className="ico-category-menu"></i>
                <span className="mx-4 text-sm font-semibold">
                  {props.categoryTitle}
                </span>
                {open ? (
                  <i className="ico-arrow-down-white"></i>
                ) : (
                  <i className="ico-arrow-right-pink"></i>
                )}
              </div>
            </Popover.Button>
            <Transition
              as="div"
              show={open}
              onMouseEnter={() => onHover(open, 'onMouseEnter')}
              onMouseLeave={() => onHover(open, 'onMouseLeave')}
            >
              <Popover.Panel
                as="section"
                className="absolute top-[52px] left-0 z-10 w-full bg-white text-black shadow-md"
              >
                <div className="container mx-auto xl:max-w-screen-xl">
                  <div className="flex flex-wrap">
                    <MenuCategoryItems categories={props.categoriesMenu} />
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </>
  );
};
