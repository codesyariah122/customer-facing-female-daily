/**
 * Pagination Content
 * @author Ilma Dinnia <ilma.dinnia@ctcorpdigital.com>
 * @author Imam Kusuma <imam.kusuma@ctcorpdigital.com>
 * @param {gotoPage} <function gotoPage>
 * @param {nextPage} <function nextPage>
 * @param {previousPage} <function previousPage>
 * @param {pageOptions} <array of page options>
 * @param {pageIndex} <current page>
 * @returns {React.ReactElement}
 */
const Pagination = ({
  gotoPage,
  nextPage,
  previousPage,
  pageOptions,
  pageIndex,
}: any) => {
  return (
    <div className="flex">
      <div className="border-gray-30 flex rounded-2xl border">
        <div
          onClick={() => previousPage()}
          className="border-gray-30 flex h-12 w-12 rotate-180 cursor-pointer items-center justify-center border-l"
        >
          <i className="ico-arrow-right-pagination" />
        </div>
        {pageOptions?.map((page: number) => {
          const pageNumber = page + 1;
          return (
            <>
              <div
                key={page}
                onClick={() => gotoPage(page)}
                className={`${
                  pageIndex === page
                    ? 'bg-pink-primary font-semibold text-white'
                    : ''
                } flex h-12 w-12 cursor-pointer items-center justify-center`}
              >
                {pageNumber}
              </div>
            </>
          );
        })}
        <div
          onClick={() => nextPage()}
          className="border-gray-30 flex h-12 w-12 cursor-pointer items-center justify-center border-l"
        >
          <i className="ico-arrow-right-pagination" />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
