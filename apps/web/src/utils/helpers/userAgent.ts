/**
 * Copyright © 2022 PT CT Corp Digital. All right reserved
 * @author Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @author Barayuda Gautama <barayuda.gautama@ctcorpdigital.com>
 * @description User Agent Helper Functions
 * @see https://github.com/faisalman/ua-parser-js
 * @license Proprietary
 * @package utils/helpers
 */
import { UAParser } from 'ua-parser-js';

export const UA = new UAParser();
export const browser = UA.getBrowser();
export const cpu = UA.getCPU();
export const device = UA.getDevice();
export const engine = UA.getEngine();
export const os = UA.getOS();
export const ua = UA.getUA();
export const setUA = (uaStr: any) => UA.setUA(uaStr);
export const isMobile = device.type === 'mobile' ? true : false;
/**
 * Helper function to check CF open on FemaleDaily App
 * @returns {boolean}
 */
export const isInFemaleDailyAgentApp = (): boolean => {
  return ua.includes('femaledailyagent'); // from Mobile Flutter team
};
