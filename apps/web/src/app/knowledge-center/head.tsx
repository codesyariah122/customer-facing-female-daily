/**
 * Head tag for Products Page
 */
import React from 'react';
import { keywordsData } from '@dummydata/keywords';
import { DefaultTags } from '@components/app/commons';
import { v4 as uuidv4 } from 'uuid';

/**
 * Header component <extending from app/Head> adding keywords meta for SEO purpose
 *
 * @todo    Still using dummy data for meta keywords, need to fix
 */
export default async function Head({ params }: any) {
  return (
    <>
      <title>FemaleDaily Studio - Knowledge Center</title>
      <DefaultTags />
      {keywordsData.knowledge.map((keyword) => (
        <meta key={uuidv4()} name="keywords" content={keyword} />
      ))}
    </>
  );
}
