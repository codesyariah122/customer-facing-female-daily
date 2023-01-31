import Link from 'next/link';
import { useSubTopicList, useFaqs } from '@hooks/useGetTopics';
import { Loading, EmptyContent } from '@components/KnowledgeCenter';

const SubTopicList = (props: any) => {
  const codeTopic = props.codeTopic;
  const codeSubTopic = props.codeSubTopic;
  const codeFaq = props.codeFaq;
  const codeFaqDash = props.codeFaqDash;
  const {
    data: subTopics,
    isLoading,
    isFetching,
  } = useSubTopicList(codeTopic ? codeTopic : '');
  const { data: dataFaqs, isLoading: isLoadingFaq } = useFaqs(
    codeTopic ? codeTopic : ''
  );
  const faqs = subTopics ? subTopics && subTopics.map((item: any) => item) : [];
  const faqBySubs = faqs
    ? faqs &&
      faqs
        .map((item: any) => item)
        .filter((f: any) => f.code === codeSubTopic)[0]
    : [];
  const faqItems = faqBySubs ? faqBySubs && faqBySubs.parent.faqs : null;
  const faqAnswer = dataFaqs
    ? dataFaqs &&
      dataFaqs.map((item: any) => item).find((faq: any) => faq.code === codeFaq)
    : '';
  const faqDashTopic = dataFaqs
    ? dataFaqs &&
      dataFaqs
        .map((faq: any) => faq)
        .filter((faq: any) => faq.code === codeFaqDash)
    : [];

  return (
    <>
      {isLoading || (isLoadingFaq && <Loading size={1} type="block-card" />)}

      {(subTopics?.length &&
        (codeSubTopic ? (
          codeFaq ? (
            <>
              {isLoading ? (
                <Loading size={1} type="block-card" />
              ) : (
                faqAnswer && (
                  <li className="text-1xl mb-6">{faqAnswer.answer.id}</li>
                )
              )}
            </>
          ) : isLoadingFaq ? (
            <Loading size={1} type="block-card" />
          ) : (
            faqItems &&
            faqItems.map((faq: any, idx: number) => (
              <li
                className="text-1xl md:w-90 mb-6 cursor-pointer border-b border-gray-200 hover:text-blue-700 dark:border-gray-200"
                key={idx}
              >
                <Link
                  href={`/knowledge-center/topic/${codeTopic}/sub/${codeSubTopic}/faq/${faq.code}`}
                >
                  {faq.question.id}
                </Link>
              </li>
            ))
          )
        ) : isLoading ? (
          <Loading size={1} type="block-card" />
        ) : (
          subTopics &&
          subTopics.map((topic: any, idx: number) => (
            <li
              className="text-1xl mb-6 w-full cursor-pointer border-b border-gray-200 hover:text-blue-700 dark:border-gray-200"
              key={Math.random()}
            >
              <Link
                href={`/knowledge-center/topic/${codeTopic}/sub/${topic.code}`}
              >
                {topic.name.id}
              </Link>
            </li>
          ))
        ))) || <EmptyContent />}
    </>
  );
};

export default SubTopicList;
