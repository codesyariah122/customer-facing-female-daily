import React from 'react';
import Layout from '../../layouts/HelpCenterLayout';
import Image from 'next/image';
import { useGetFaqDashBoard, useHelpCenterTopik } from '@hooks/useHelpCenter';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { v4 as uuidv4 } from 'uuid';
const HelpCenter = () => {
  const route = useRouter();
  const { data: dataRest, isLoading: isLoadingRest } = useHelpCenterTopik();
  const { data, isLoading } = useGetFaqDashBoard();
  return (
    <Layout>
      <div className="flex flex-col items-center p-4 leading-none sm:p-0">
        <h1 className="py-6 text-center text-2xl font-medium sm:py-12 sm:text-3xl">
          Hi, What can we help you with?
        </h1>
        <h3 className=" text-base sm:text-lg">
          Choose the topic of your question
        </h3>
        {isLoadingRest && (
          <div className="grid grid-cols-3 content-center gap-2 pt-2  sm:grid-cols-4 sm:gap-10">
            {[...Array(8)].map((e: any) => (
              <div
                key={uuidv4()}
                className="skeleton flex  cursor-pointer flex-col content-center items-center justify-center overflow-hidden rounded-xl   text-center leading-snug shadow-md hover:shadow-sm sm:p-4"
                style={{
                  maxHeight: '132px',
                  maxWidth: '132px',
                  aspectRatio: 1,
                }}
              >
                <p style={{ visibility: 'hidden' }}>Account & Membership</p>
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-3 content-center gap-2 pt-2 pb-10 sm:grid-cols-4 sm:gap-10">
          {dataRest &&
            dataRest.map((e: any, i: number) => (
              <Link
                href={`help-center/${e.code}`}
                key={uuidv4()}
                style={{
                  maxHeight: '132px',
                  maxWidth: '132px',
                  aspectRatio: 1,
                }}
                className="flex  cursor-pointer flex-col content-center items-center justify-center overflow-hidden rounded-xl py-2  text-center leading-snug shadow-md hover:shadow-sm sm:p-4 "
              >
                <span className="make-center flex-1">
                  <Image
                    src={e.image?.url}
                    alt="Logo"
                    width={36}
                    height={36}
                    priority={true}
                  />
                </span>
                <p className="oveflow-hidden flex-1 text-ellipsis  pt-4  text-sm sm:text-base">
                  {e.name.en}
                </p>
              </Link>
            ))}
        </div>
        <h3>Frequently Asked</h3>

        <div style={{ maxWidth: '657px' }} className=" flex w-full flex-col">
          <ul className="divide-y py-4 ">
            {isLoading &&
              [...Array(5)].map((e: number) => (
                <li key={uuidv4()} className=" w-full py-[14px]">
                  <i className="skeleton h-4 w-full" />
                </li>
              ))}
            {data?.items &&
              data.items.map((e: any, key: number) => (
                <li key={uuidv4()}>
                  <Link
                    href={`help-center/${e.topic.parent.code}/${e.topic.code}?faq=${e.code}`}
                    className="flex w-full items-center justify-between py-[14px] text-left text-sm font-medium leading-none sm:text-base"
                  >
                    <p className="">{e.question.en}</p>{' '}
                    <i className="ico-arrow-right " />
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default HelpCenter;
