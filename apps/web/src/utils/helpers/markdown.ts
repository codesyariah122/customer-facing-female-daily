/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @license Proprietary
 * @package utils/helpers/markdown
 */

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

/**
 * convert markdown content to String HTML
 * @param markwond - markdown content
 * @returns {Object} - Promise Object
 * @see https://github.com/remarkjs/remark
 * to render the content use this <div dangerouslySetInnerHTML={{ __html: content }} />
 */
export async function convertMarkdownToHtml(markdown: string) {
  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown);

  return content;
}
