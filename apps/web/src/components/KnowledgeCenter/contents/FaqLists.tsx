import Link from 'next/link';
import { useFaqDashboard, useTopicLists } from '@hooks/useGetTopics';
import { Loading } from '@components/KnowledgeCenter';

type faqType = {
  id: number;
  code: string;
  question: {
    id: string;
    en: string;
  };
  topic: {
    code: string;
    parent: {
      code: string;
    };
  };
  answer: {
    id: string;
    en: string;
  };
};

const FaqLists = () => {
  const {
    data: faqLists,
    isLoading: isLoadingList,
    isFetching,
  } = useFaqDashboard(5);

  return (
    <>
      {/* Desktop Block */}
      <div className="hidden h-auto md:mt-12 md:-mb-32 md:bg-gray-100 lg:block">
        <div className="flex place-content-center place-items-end justify-center gap-x-8 md:gap-x-10">
          <div className="rounded-lg bg-transparent text-gray-900 md:mb-12 ">
            <div className="mt-16 grid grid-cols-1 gap-x-2">
              {isLoadingList && <Loading size={5} type={'list'} />}
            </div>

            {faqLists && (
              <>
                <div className="grid grid-cols-1">
                  <div className="col-span-12 place-self-center">
                    <h4 className="text-1xl font-bold text-black md:text-3xl">
                      Pertanyaan Populer
                    </h4>
                  </div>
                </div>
                <div className="mt-12 grid grid-cols-2 gap-x-2">
                  <div className="col-span-12">
                    {faqLists.items.map((faq: faqType, idx: number) => (
                      <details
                        className="border-b border-gray-200 font-semibold duration-300 dark:border-gray-200"
                        open={idx === 0 ? true : false}
                        key={faq.id}
                      >
                        <summary className="cursor-pointer px-5 py-3 text-sm font-semibold">
                          {faq.question.id}
                        </summary>
                        <div className="mb-4 px-8 py-3 font-light">
                          <p>{faq.answer.id}.</p>

                          <Link
                            className="float-right mr-12 align-text-bottom font-semibold text-red-500 hover:bg-gray-300"
                            href={`/knowledge-center/topic/${faq.topic.code}/faq/${faq.code}`}
                          >
                            Selanjutnya
                          </Link>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Block */}
      <div className="-mb-28 block h-full bg-gray-100  lg:hidden">
        <div className="flex place-content-center justify-center gap-x-8">
          <div className="rounded-lg bg-transparent text-gray-900">
            {isLoadingList && <Loading size={5} type={'list'} />}
            {faqLists && (
              <>
                <div className="grid grid-cols-1 py-12">
                  <div className="col-span-12 place-self-center">
                    <h4 className="text-1xl font-bold text-black md:text-3xl">
                      Pertanyaan Populer
                    </h4>
                  </div>
                </div>

                <div className="w-70 mx-auto -mt-6">
                  {faqLists.items.map((faq: faqType, idx: number) => (
                    <details
                      className="mb-2 border-b border-gray-200 duration-300 dark:border-gray-200"
                      open={idx === 0 ? true : false}
                      key={faq.id}
                    >
                      <summary className="cursor-pointer px-5 py-3 text-sm font-semibold">
                        {faq.question.id}
                      </summary>
                      <div className="mb-4 px-8 py-3 text-sm font-light">
                        <p>{faq.answer.id}.</p>
                        {/* <Link
                              className="float-right align-text-bottom font-semibold text-red-500 hover:bg-gray-300 mr-12"
                              href={`/knowledge-center/topic/${faq.topic.code}`}>
                              Selanjutnya
                            </Link> */}
                        <Link
                          className="float-right mr-12 align-text-bottom font-semibold text-red-500 hover:bg-gray-300"
                          href={`/knowledge-center/topic/${faq.topic.code}/faq/${faq.code}`}
                        >
                          Selanjutnya
                        </Link>
                      </div>
                    </details>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqLists;
