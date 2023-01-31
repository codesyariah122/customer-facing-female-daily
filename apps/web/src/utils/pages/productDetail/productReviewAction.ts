/**
 * review character limit
 */
export const reviewCharLimit = 185;

/**
 * limit character text length
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {text} <text data>
 * @returns {string}
 */
export function convertReviewToLimited(text: string): string {
  if (text.length > reviewCharLimit)
    text = text.substring(0, reviewCharLimit) + '...';
  return text;
}
