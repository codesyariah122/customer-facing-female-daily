import React from 'react';
import { DefaultTags } from '@components/app/commons';
/**
 * Head tag for Homepage
 * @author  Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 */

/**
 * FIXME:
 * - Load dynamic title and meta tag here
 */
export default async function Head() {
  return (
    <>
      <title>FemaleDaily Studio - Indonesia’s No.1 Beauty Destination</title>
      <meta name="description" content="Indonesia’s No.1 Beauty Destination" />
      <DefaultTags />
    </>
  );
}
