import React from 'react';
import { prettierJson } from '@utils/helpers';

/**
 * Example Get Segment URL on NextJS 13 "app" folder
 * @description Demo page how get segment URL on NextJS
 */

function page({ params }: { params: { slug: string[] } }) {
  return <div>{prettierJson(params?.slug)}</div>;
}

export default page;
