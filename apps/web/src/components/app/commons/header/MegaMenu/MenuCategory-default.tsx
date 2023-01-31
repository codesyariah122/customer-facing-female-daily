'use client';
import React, { Children, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Assets
import DemoImage from '@assets/images/image-cat.jpg';
import { _DEFAULT_NO_IMAGE_ } from '@constants/staticAssets';

function MenuCategory({ dataCategories }: { dataCategories?: any }) {
  const [showMegaMenu, setShowMegaMenu] = useState<boolean>(false);
  const [childrenLvl1, setChildrenLvl1] = useState<any>([]);
  const [childrenLvl2, setChildrenLvl2] = useState<any>([]);
  const [urlKeyParent1, setUrlKeyParent1] = useState<string>('');
  const [urlKeyParent2, setUrlKeyParent2] = useState<string>('');
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isHoverLvl1, setIsHoverLvl1] = useState<boolean>(false);
  const [isHoverLvl2, setIsHoverLvl2] = useState<boolean>(false);
  const [keyHover, setKeyHover] = useState<any>('');
  const [keyHoverLvl1, setKeyHoverLvl1] = useState<any>('');
  const [keyHoverLvl2, setKeyHoverLvl2] = useState<any>('');
  const showCategoryLvl1 = (urlKeyParent1: string, children: any): void => {
    setChildrenLvl1(children);
    setUrlKeyParent1(urlKeyParent1);
  };
  const showCategoryLvl2 = (urlKeyParent2: string, children: any): void => {
    setChildrenLvl2(children);
    setUrlKeyParent2(urlKeyParent2);
  };
  const handlerIsHover = (status: boolean, url_key: any): void => {
    setIsHover(status);
    setKeyHover(url_key);
  };
  const handlerIsHoverLvl1 = (status: boolean, url_key: any): void => {
    setIsHoverLvl1(status);
    setKeyHoverLvl1(url_key);
  };
  const handlerIsHoverLvl2 = (status: boolean, url_key: any): void => {
    setIsHoverLvl2(status);
    setKeyHoverLvl2(url_key);
  };
  const handlerIsOverLvl1 = (status: boolean, url_key: any): void => {};
  return (
    <div className="">
      <div className="flex items-center">
        <i className="ico-category-menu"></i>
        <button onMouseEnter={(e) => setShowMegaMenu(true)}>
          <span className="mx-4 text-sm font-semibold">Categories</span>
        </button>
        <i className="ico-arrow-down-white"></i>
      </div>
      <div
        className={
          !showMegaMenu
            ? 'hidden'
            : '' +
              ' absolute top-[52px] z-50 mx-auto max-h-[550px] w-[1280px] bg-white text-black shadow-md'
        }
        onMouseLeave={(e) => setShowMegaMenu(false)}
      >
        <div className="container mx-auto xl:max-w-screen-xl">
          <div className="flex flex-wrap">
            <div className="flex max-h-[550px] w-1/4 flex-col space-y-4 overflow-auto border-r border-[#DADADA] py-8 px-5">
              {dataCategories
                ? dataCategories.map((cat: any, index: number) => {
                    return (
                      <div key={index}>
                        <Link href={'/category/' + cat.code} prefetch={false}>
                          {cat.children ? (
                            <div className="flex items-center">
                              <div>
                                {cat.logo ? (
                                  <Image
                                    src={cat.logo.url}
                                    height={15}
                                    width={15}
                                    alt={cat.logo.name}
                                  ></Image>
                                ) : (
                                  <Image
                                    src={_DEFAULT_NO_IMAGE_}
                                    height={15}
                                    width={15}
                                    alt="icon empty"
                                  ></Image>
                                )}
                              </div>
                              <div className="flex items-center justify-items-start">
                                <div className="w-[15rem]">
                                  <button
                                    onMouseEnter={(e) => {
                                      showCategoryLvl1(
                                        cat.url_key,
                                        cat.children
                                      );
                                      handlerIsHover(true, cat.code);
                                    }}
                                  >
                                    <span className="text group-hover:text-pink-primary ml-4 text-sm font-semibold tracking-wider">
                                      {cat.name}
                                    </span>
                                  </button>
                                </div>
                                <div>
                                  <i
                                    className={
                                      isHover && keyHover === cat.code
                                        ? 'ico-polygon-right-black relative left-5'
                                        : 'ico-polygon-right-grey relative left-5'
                                    }
                                  ></i>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              {cat.logo ? (
                                <Image
                                  src={cat.logo.url}
                                  height={15}
                                  width={15}
                                  alt={cat.logo.name}
                                ></Image>
                              ) : (
                                <Image
                                  src={_DEFAULT_NO_IMAGE_}
                                  height={15}
                                  width={15}
                                  alt="icon empty"
                                ></Image>
                              )}
                              <button
                                onMouseEnter={(e) => {
                                  showCategoryLvl1('', []);
                                  showCategoryLvl2('', []);
                                  handlerIsHover(true, cat.code);
                                }}
                              >
                                <span className="text group-hover:text-pink-primary ml-4 text-sm font-semibold tracking-wider">
                                  {cat.name}
                                </span>
                              </button>
                            </div>
                          )}
                        </Link>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="flex max-h-[550px] w-1/4 flex-col space-y-4 overflow-auto border-r border-[#DADADA] py-8 pr-3 pl-6">
              {childrenLvl1
                ? childrenLvl1.map((catLvl1: any, index: number) => {
                    return (
                      <div key={index}>
                        <Link
                          href={
                            'search/category/' +
                            urlKeyParent1 +
                            '/' +
                            catLvl1.url_key
                          }
                        >
                          {catLvl1.children ? (
                            <div className="flex items-center justify-between">
                              <button
                                onMouseEnter={(e) => {
                                  showCategoryLvl2(
                                    catLvl1.url_key,
                                    catLvl1.children
                                  );
                                  handlerIsHoverLvl1(true, catLvl1.code);
                                }}
                              >
                                <span
                                  className={
                                    isHoverLvl1 && keyHoverLvl1 === catLvl1.code
                                      ? 'font-semibold'
                                      : '' + ' text text-sm tracking-wider'
                                  }
                                >
                                  {catLvl1.name}
                                </span>
                              </button>
                              <i
                                className={
                                  isHoverLvl1 && keyHoverLvl1 === catLvl1.code
                                    ? 'ico-polygon-right-black relative'
                                    : 'ico-polygon-right-grey relative'
                                }
                              ></i>
                            </div>
                          ) : (
                            <div className="flex items-center justify-between">
                              <button
                                onMouseEnter={(e) => {
                                  showCategoryLvl2('', []);
                                  handlerIsHoverLvl1(true, catLvl1.code);
                                }}
                              >
                                <span
                                  className={
                                    isHoverLvl1 && keyHoverLvl1 === catLvl1.code
                                      ? 'font-semibold'
                                      : '' + ' text text-sm tracking-wider'
                                  }
                                >
                                  {catLvl1.name}
                                </span>
                              </button>
                            </div>
                          )}
                        </Link>
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="flex max-h-[550px] w-1/4 flex-col space-y-2 overflow-auto py-8 pr-3 pl-6">
              {childrenLvl2
                ? childrenLvl2.map((catLvl2: any, index: number) => {
                    return (
                      <div key={index}>
                        <Link
                          href={
                            'search/category/' +
                            urlKeyParent1 +
                            '/' +
                            urlKeyParent2 +
                            '/' +
                            catLvl2.url_key
                          }
                        >
                          <button
                            onMouseEnter={(e) => {
                              handlerIsHoverLvl2(true, catLvl2.code);
                            }}
                          >
                            <span
                              className={
                                isHoverLvl2 && keyHoverLvl2 === catLvl2.code
                                  ? 'font-semibold'
                                  : '' + ' text text-sm tracking-wider'
                              }
                            >
                              {catLvl2.name}
                            </span>
                          </button>
                        </Link>
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCategory;
