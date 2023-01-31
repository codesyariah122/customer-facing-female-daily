import React from 'react';
import HelpCenterLayout from '@layouts/HelpCenterLayout';
import { Breadcrumbs } from '@components/app/commons';
import { useHelpCenterTopik } from '@hooks/useHelpCenter';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Listbox, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
type LayoutType = {
  children?: React.ReactNode;
  breadCrumb?: any;
  title?: string;
};

const data = [
  {
    id: 1,
    name: 'FD Studio Help Center',
    url: '/help-center',
  },
];

const NestedLayout = ({ children, breadCrumb, title }: LayoutType) => {
  useSearchParams;
  const router = useSearchParams();
  const route = useRouter();
  const id = router.get('topicId');

  const {
    data: dataRest,
    isLoading: isLoadingRest,
    isFetching: isFetchingRest,
  } = useHelpCenterTopik();
  const selectedTopic = dataRest?.find((e: any) => e.code === id);
  const setBreadCrumb = (): any => {
    if (!selectedTopic) return data;
    const newBreadcrumb = {
      id: 2,
      name: selectedTopic.name.en,
      url: router.get('subTopicId') ? `/help-center/${id}` : '',
    };
    let result = [...data, newBreadcrumb];
    if (breadCrumb) result = [...result, ...breadCrumb];
    return result;
  };
  const getbreadCrumb = setBreadCrumb();
  const changeMenu = (e: string) => {
    if (e === selectedTopic.code) return;
    route.push(`/help-center/${e}`, undefined, {
      shallow: true,
      scroll: true,
    });
  };
  return (
    <HelpCenterLayout>
      <div className="container mx-auto py-8">
        <div className="flex px-4 sm:px-0">
          <div className="hidden w-1/4 sm:block"></div>
          <div className="flex-1">
            <Breadcrumbs dataBreadcrumbs={getbreadCrumb} />
          </div>
        </div>
        {dataRest && (
          <div className="flex space-x-0 py-6 px-4 sm:px-0">
            <div className="hidden w-1/4 sm:block">
              <h3>Topics</h3>
              <ul className="hidden flex-col space-y-4 py-4 sm:flex">
                {dataRest.map((e: any, i: number) => (
                  <li
                    className={`${
                      e.code === id && 'text-pink-primary'
                    } hover:text-pink-primary w-min cursor-pointer whitespace-nowrap`}
                    key={i}
                  >
                    <Link href={`/help-center/${e.code}`}>{e.name.en}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 flex-col">
              <h3 className="hidden sm:block">
                {title
                  ? title
                  : dataRest.find((e: any) => e.code === id)?.name.en}
              </h3>
              <div className="block sm:hidden">
                {selectedTopic && (
                  <Listbox
                    value={selectedTopic}
                    onChange={(e: any) => {
                      changeMenu(e.code);
                    }}
                  >
                    <div className="relative mt-1">
                      <Listbox.Button className="flex w-full items-center rounded-lg border py-2 px-4">
                        <span className="flex-1 text-left">
                          {selectedTopic.name.en}
                        </span>
                        <i className="ico-arrow-down-grey" />
                      </Listbox.Button>
                      <Transition
                        as={React.Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {dataRest.map((e: any) => (
                            <Listbox.Option
                              className="relative cursor-default select-none py-2 pl-10 pr-4"
                              key={e.code}
                              value={e}
                            >
                              {({ selected }: any) => (
                                <>
                                  <span
                                    className={`block truncate ${
                                      selected ? 'font-medium' : 'font-normal'
                                    }`}
                                  >
                                    {e.name.en}
                                  </span>
                                  {selected ? (
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                      <i className="ico-check-cirlce" />
                                    </span>
                                  ) : null}
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                )}
              </div>

              <div className="h-full flex-1">{children}</div>
            </div>
          </div>
        )}
      </div>
    </HelpCenterLayout>
  );
};

export default NestedLayout;
