const Notes = () => {
  return (
    <div>
      <div className="grid">
        <span>Notes :</span>
        <div>
          <input
            type="text"
            id="notes"
            name="notes"
            className="my-2 h-[40px] w-[300px] rounded border-2 border-slate-200 bg-transparent p-4"
          />
          <span className="mx-4 text-xs text-gray-500	">0/125</span>
        </div>
      </div>
      <div className="flex">
        <div>
          <input type="checkbox" className="mx-2" />
        </div>
        <div>Mandatory Delivery Insurance</div>
        <i className="ico-information"></i>
      </div>
    </div>
  );
};

export default Notes;
