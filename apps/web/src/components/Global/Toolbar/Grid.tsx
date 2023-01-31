const Grid = ({
  valueLayout,
  clickFunc,
}: {
  valueLayout: Boolean;
  clickFunc: (value: Boolean) => void;
}) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="cursor-pointer" onClick={() => clickFunc(true)}>
        <i
          className={`${valueLayout ? 'ico-grid-active' : 'ico-grid-inactive'}`}
        />
      </div>
      <div className="cursor-pointer" onClick={() => clickFunc(false)}>
        <i
          className={`${
            !valueLayout ? 'ico-list-active' : 'ico-list-inactive'
          }`}
        />
      </div>
    </div>
  );
};

export default Grid;
