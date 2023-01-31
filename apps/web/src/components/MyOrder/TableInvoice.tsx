const TableInvoice = () => {
  return (
    <div>
      <div className="alig-center flex h-[56px] items-center bg-red-100 px-4 text-red-500">
        <i className="ico-information"></i>
        <span className="mx-2 ">Your payment is due by 2 Mar 2021, 17:45</span>
      </div>
      <div className="flex justify-between border-b p-4 ">
        <div>
          <div></div>
          <div className="h-[47px] w-[147px] cursor-pointer rounded border p-2 text-center text-sm font-semibold leading-7 tracking-wide">
            Download
          </div>
        </div>
        <div className="py-4">
          <div className="bg-pink-primary h-[50px] w-[264px] cursor-pointer rounded p-2 text-center text-sm font-semibold leading-9 tracking-wide text-white">
            Pay Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableInvoice;
