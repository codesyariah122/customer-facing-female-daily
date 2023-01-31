/**
 * Pagination component <show Pagination component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {}
 * @returns {React.ReactElement}
 */

const Pagination = () => {
  return (
    <div className="flex">
      <div className="border-gray-30 flex rounded-2xl border">
        <div className="border-gray-30 flex h-12 w-12 rotate-180 cursor-pointer items-center justify-center border-l">
          <i className="ico-arrow-right-pagination" />
        </div>
        <div className="bg-pink-primary flex h-12 w-12 cursor-pointer items-center justify-center font-semibold text-white">
          1
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center">
          2
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center">
          3
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center">
          4
        </div>
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center">
          5
        </div>
        <div className="border-gray-30 flex h-12 w-12 cursor-pointer items-center justify-center border-l">
          <i className="ico-arrow-right-pagination" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
