const StateofProduct = () => {
  return (
    <div>
      {/* if Partial Product */}
      <span className="rounded bg-red-100 p-2 text-xs font-semibold text-red-500">
        This item has been adjusted
      </span>
      {/* if Preorder Time */}
      <div className="my-4 flex">
        <i></i>
        <span className="rounded bg-teal-50 px-2 text-xs text-slate-700	">
          Preorder Time : <strong>5 Days</strong>
        </span>
      </div>
    </div>
  );
};

export default StateofProduct;
