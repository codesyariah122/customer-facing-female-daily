import { CardTopic, FaqLists } from '@components/KnowledgeCenter';
const MainContent = (props: any) => {
  return (
    <div className="container mb-16 w-full min-w-full content-center py-12 md:container md:mx-auto md:w-full md:py-16">
      {/* Flex card with icon topic */}
      <CardTopic />
      {/* Faq lists */}
      <FaqLists />
    </div>
  );
};

export default MainContent;
