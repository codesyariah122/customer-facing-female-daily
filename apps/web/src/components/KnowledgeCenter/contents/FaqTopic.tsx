import { useSubTopicList, useFaqs } from '@hooks/useGetTopics';
import { Loading, EmptyContent } from '@components/KnowledgeCenter';
import { v4 as uuidv4 } from 'uuid';

const FaqTopic = (props: any) => {
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
      {(faqDashTopic &&
        (isLoadingFaq ? (
          <div className="px-12 py-12">
            <Loading size={1} type="text" />
          </div>
        ) : (
          faqDashTopic.map((faq: any) => (
            <li key={uuidv4()} className="text-1xl mb-6">
              {faq.answer.id}
            </li>
          ))
        ))) || <EmptyContent />}
    </>
  );
};

export default FaqTopic;
