/**
 * Function getTextContentOnlyFromHtml()
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description extract content from HTML
 * @example getTextContentOnlyFromHtml('<h1>Data</h1>') -> result 'Data'
 * @license Proprietary
 * @package utils/helpers
 */

export const getTextContentOnlyFromHtml = (html: any) => {
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const walker = document.createTreeWalker(
    doc.body,
    NodeFilter.SHOW_TEXT,
    null
  );
  const texts = [];
  let node;
  while ((node = walker.nextNode())) {
    texts.push(node.nodeValue);
  }
  return texts;
};
