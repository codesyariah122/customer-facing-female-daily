'use client';

import SubLayout from './SubLayout';
import { useTopicLists, useSubTopicList, useFaqs } from '@hooks/useGetTopics';
import {
  SubTopicList,
  FaqTopic,
  Loading,
  EmptyContent,
} from '@components/KnowledgeCenter';

/**
 * this is for account -> my profile page
 * @author Puji Ermanto <developer.outsource@ctcorpdigital.com>
 * using SubLayout @[...topic]/SubLayout.tsx
 */

const Topic = ({ params }: any) => {
  const param = (params.topic as string[]) || [];
  const codeTopic = param[1];
  const codeSubTopic = param[3];
  const codeFaq = param[5];
  const codeFaqDash = param[3];
  const faqParam = param[2] === 'faq' ? param[2] : '';

  const {
    data: sides,
    isLoading: isLoadingLists,
    isFetching: isFetchingList,
  } = useTopicLists();
  const { data: subTopics, isLoading: loadingSubTopic } =
    useSubTopicList(codeTopic);
  const { data: faqLists, isLoading: loadingFaq } = useFaqs(codeTopic);
  const currentPageTopic = !codeSubTopic
    ? sides &&
      sides
        .map((current: any) => current)
        .filter((current: any) => current.code === codeTopic)
    : subTopics &&
      subTopics
        .map((current: any) => current)
        .filter((current: any) => current.code === codeSubTopic);
  const currentFaqTopic = faqLists
    ? faqLists &&
      faqLists.map((faq: any) => faq).filter((faq: any) => faq.code === codeFaq)
    : [];
  const faqDashTopic = faqLists
    ? faqLists &&
      faqLists
        .map((faq: any) => faq)
        .filter((faq: any) => faq.code === codeFaqDash)
    : [];

  return (
    <SubLayout
      sides={sides}
      isLoading={isLoadingLists}
      param={param}
      subTopics={subTopics}
    >
      <ul className="px-12 py-12">
        {isLoadingLists && <Loading size={1} type="block-card" />}
        {!faqParam ? (
          subTopics && (
            <>
              <h2 className="mb-8 text-2xl font-bold">
                <>
                  {!codeFaq
                    ? sides &&
                      currentPageTopic.map((current: any) => current.name.id)
                    : (faqLists &&
                        currentFaqTopic.map(
                          (current: any) => current.question.id
                        )) || <EmptyContent />}
                </>
              </h2>
              <SubTopicList
                codeTopic={codeTopic}
                codeSubTopic={codeSubTopic}
                codeFaq={codeFaq}
              />
            </>
          )
        ) : faqDashTopic ? (
          (faqDashTopic && (
            <>
              <h2 className="mb-8 text-2xl font-bold">
                <>{faqDashTopic.map((faq: any) => faq.question.id)}</>
              </h2>
              <FaqTopic
                codeTopic={codeTopic}
                codeSubTopic={codeSubTopic}
                codeFaq={codeFaq}
                codeFaqDash={codeFaqDash}
              />
            </>
          )) || <EmptyContent />
        ) : (
          <EmptyContent />
        )}
      </ul>
    </SubLayout>
  );
};

export default Topic;
