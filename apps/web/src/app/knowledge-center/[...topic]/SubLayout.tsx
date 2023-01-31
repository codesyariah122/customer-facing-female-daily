'use client';

import { Fragment, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Listbox, Transition } from '@headlessui/react';
import {
  BreadCrumb,
  LeadCalls,
  Loading,
  Vector,
} from '@components/KnowledgeCenter';
import { useFaqs } from '@hooks/useGetTopics';

export default function SubLayout({
  children,
  sides,
  subTopics,
  isLoading,
  showing,
  param,
}: any) {
  let router = useRouter();
  const codeTopic = param[1];
  const codeSubTopic = param[3];
  const codeFaq = param[5];
  const codeFaqDash = param[3];
  const faqParam = param[2] === 'faq' ? param[2] : null;

  const [isShowing, setIsShowing] = useState<boolean>(false);
  const { data: faqLists, isLoading: loadingFaq } = useFaqs(codeTopic);

  const currents =
    sides &&
    sides
      .map((current: any) => current)
      .filter((current: any) => current.code === codeTopic);
  const previous =
    subTopics &&
    subTopics
      .map((current: any) => current)
      .filter((current: any) => current.code === codeSubTopic);
  const currentPage = !codeSubTopic ? currents : previous;
  const showCurrent = !codeSubTopic ? true : false;
  const selectedTopic = sides && sides?.find((e: any) => e.code === codeTopic);
  const currentFaqTopic = faqLists
    ? faqLists &&
      faqLists.map((faq: any) => faq).filter((faq: any) => faq.code === codeFaq)
    : 'Not Found';

  const changeMenu = (event: string) => {
    if (event === selectedTopic.code) return;
    router.push(`/knowledge-center/topic/${event}`);
  };

  function movingContents(code: string, showing: boolean) {
    router.push(`/knowledge-center/topic/${code}`);
    setIsShowing(showing);
  }

  function goToCurrentPage(param: any) {
    if (param.subTopic === codeSubTopic) {
      setIsShowing(true);
      router.push(
        `/knowledge-center/topic/${param.topic}/sub/${param.subTopic}`
      );
    }
  }

  return (
    <>
      <main className="flex min-h-screen flex-col">
        {isShowing ? (
          <>
            <div className="flex justify-center px-24 py-24">
              <div>
                <Transition
                  show={isShowing}
                  enter="transition-opacity duration-75"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition-opacity duration-150"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Vector name="searching" />
                  Please wait ...
                </Transition>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 place-items-center gap-4">
              {isLoading ? (
                <div className="px-12 py-12">
                  <Loading size={1} type="text" />
                </div>
              ) : !faqParam ? (
                <div className="col-span-full mx-auto">
                  <BreadCrumb
                    codeTopic={codeTopic}
                    codeSubTopic={codeSubTopic}
                    codeFaq={codeFaq}
                    codeFaqDash={codeFaqDash}
                    showCurrent={showCurrent}
                    currentPage={currentPage ? currentPage : []}
                    currentFaqTopic={currentFaqTopic}
                    goToCurrentPage={goToCurrentPage}
                  />
                </div>
              ) : (
                <>
                  <div className="col-span-full -ml-36 mt-12 hidden md:block">
                    <a
                      href="#"
                      onClick={() => router.push('/knowledge-center')}
                      className="rounded bg-red-700 py-2 px-4 font-bold text-white hover:bg-red-500"
                    >
                      Kembali
                    </a>
                  </div>

                  <div className="col-span-full mt-12 block md:hidden">
                    <a
                      href="#"
                      onClick={() => router.push('/knowledge-center')}
                      className="rounded bg-red-700 py-2 px-4 font-bold text-white hover:bg-red-500"
                    >
                      Kembali
                    </a>
                  </div>
                </>
              )}
            </div>

            <div className="hidden md:block">
              <div className="ml-16 grid grid-cols-3 gap-2 overflow-x-hidden">
                <div>
                  <ul className="px-12 py-12">
                    {isLoading ? (
                      <div className="flex place-content-center justify-center">
                        <div className="flex-1">
                          <Loading size={1} type="block-card" />
                        </div>
                      </div>
                    ) : (
                      <>
                        <h2 className="mb-8 text-2xl font-bold">Topic List</h2>
                        {sides &&
                          sides.map((side: any) => (
                            <li
                              onClick={() => movingContents(side.code, true)}
                              className={`${
                                codeTopic === side.code
                                  ? 'font-semibold text-red-600'
                                  : ''
                              } text-1xl mb-6 cursor-pointer hover:text-blue-700`}
                              key={side.id}
                            >
                              {side.name.id}
                            </li>
                          ))}
                      </>
                    )}
                  </ul>
                </div>
                <div className="col-span-2">{children}</div>
              </div>
            </div>

            <div className="block grid grid-cols-2 gap-2 overflow-x-hidden md:hidden">
              <div className="col-span-full mt-12 w-full place-self-start px-4">
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
                          {selectedTopic.name.id}
                        </span>
                        <i className="ico-arrow-down-grey" />
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                          {sides &&
                            sides.map((e: any) => (
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
                                      {e.name.id}
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
              <div className="col-span-full">{children}</div>
            </div>
          </>
        )}

        <LeadCalls />
      </main>
    </>
  );
}
