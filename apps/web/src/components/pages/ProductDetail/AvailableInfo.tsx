const AvailableInfo = () => {
  return (
    <div className="mx-4 xl:mx-0">
      <div className="hidden">
        <i className="ico-delivery"></i>
        <span>Free delivery</span>
        <i className="ico-suitable"></i>
      </div>
      <div className="mb-2.5 flex items-center rounded bg-slate-50 px-4">
        <i className="ico-suitable"></i>
        <div className="grid p-2 text-xs ">
          <span className="font-medium">Suitable for</span>
          <span>Acne-prone, Uneven Skin Tone, Large Pores, Roughness</span>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default AvailableInfo;
