import { Fragment } from 'react';
import Link from 'next/link';

type typeProps = {
  current: boolean;
  currentItem: string;
  next: boolean;
  nextItem: string;
  codeSubTopic: string;
};

const BreadCrumb = (props: any) => {
  const codeTopic = props.codeTopic ? props.codeTopic : null;
  const codeSubTopic = props.codeSubTopic ? props.codeSubTopic : null;
  const codeFaq = props.codeFaq
    ? (props.codeFaq && props.codeFaq) || 'f'
    : null;
  const currentPageActive = props.currentPage
    ? props.currentPage && props.currentPage.map((current: any) => current)[0]
    : [];
  const currentFaqs = props.codeFaq
    ? (props.currentFaqTopic &&
        props.currentFaqTopic.map((faq: any) => faq.question.id)) ||
      'Empty'
    : [];

  const breadCrumbItem = {
    current: {
      show: codeTopic || codeSubTopic ? true : false,
      item: currentPageActive
        ? currentPageActive && currentPageActive.name.id
        : [],
    },
    next: {
      show: codeFaq ? true : false,
    },
  };

  return (
    <Fragment>
      <nav className="ml-22 mt-12 mb-6 flex hidden w-80 place-content-start justify-center md:w-full lg:block">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <Link
              href="/knowledge-center"
              className="inline-flex items-center text-red-600 hover:text-gray-900"
            >
              Knowledge Center
            </Link>
          </li>
          <li>
            {breadCrumbItem.current.item && (
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  onClick={() =>
                    props.goToCurrentPage({
                      topic: codeTopic,
                      subTopic: codeSubTopic,
                    })
                  }
                  className={`${
                    !codeFaq
                      ? 'text-md ml-1 cursor-none text-gray-600 hover:text-gray-900 md:ml-2'
                      : 'text-md ml-1 cursor-pointer text-red-600 hover:text-gray-900 md:ml-2'
                  }`}
                >
                  {breadCrumbItem.current.item}
                </a>
              </div>
            )}
          </li>
          <li>
            {codeFaq && (
              <div className="flex items-center">
                <svg
                  className="h-6 w-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <a
                  href="!#"
                  className="text-md ml-1 cursor-none text-gray-600 hover:text-gray-900 md:ml-2"
                >
                  {currentFaqs}
                </a>
              </div>
            )}
          </li>
        </ol>
      </nav>

      <div className={`block lg:hidden ${!codeFaq ? '-ml-36' : ''}`}>
        <nav className="grid grid-cols-1 gap-4">
          <ol className="col-span-full mt-6">
            <li className="mb-2">
              <Link
                href="/knowledge-center"
                className="inline-flex items-center text-red-600 hover:text-gray-900"
              >
                <i className="ico-back" /> &nbsp; Knowledge Center
              </Link>
            </li>
            <li className="mb-6">
              {breadCrumbItem.current.item && (
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    onClick={() =>
                      props.goToCurrentPage({
                        topic: codeTopic,
                        subTopic: codeSubTopic,
                      })
                    }
                    className={`${
                      !codeFaq
                        ? 'text-md ml-1 cursor-none text-gray-600 hover:text-gray-900 md:ml-2'
                        : 'text-md ml-1 cursor-pointer text-red-600 hover:text-gray-900 md:ml-2'
                    }`}
                  >
                    {breadCrumbItem.current.item}
                  </a>
                </div>
              )}
            </li>
            <li className="mb-6">
              {codeFaq && (
                <div className="flex items-center">
                  <svg
                    className="h-6 w-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <a
                    href="!#"
                    className="text-md ml-1 cursor-none text-gray-600 hover:text-gray-900 md:ml-2"
                  >
                    {currentFaqs}
                  </a>
                </div>
              )}
            </li>
          </ol>
        </nav>
      </div>
    </Fragment>
  );
};

export default BreadCrumb;
