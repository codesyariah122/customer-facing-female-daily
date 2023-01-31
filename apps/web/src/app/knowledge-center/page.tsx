'use client';

import { MainContent, HeroContent } from '@components/KnowledgeCenter';
import '@components/KnowledgeCenter/styles';

/**
 * /knowledge-center
 * @author Puji Ermanto <developer.outsource@ctcorpdigital.com>
 * @layout => Root layout based on this pages using ```layout.tsx```
 * @components => base on @components/KnowledgeCenter
 * @hooks => based on @hooks/useGetTopics
 * Dynamic Route Page for detail topic / faq @[..topic]/page.tsx
 */

const knowledgeCenter: any = () => {
  const context = 'Knowledge Center';
  return (
    <>
      <HeroContent />
      <MainContent title={context} />
    </>
  );
};

export default knowledgeCenter;
