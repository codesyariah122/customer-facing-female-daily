type TGrid = {
  valueLayout: Boolean;
  clickFn: (value: Boolean) => void;
};
/**
 * Grid component <show Grid component on the required page>
 * @author  Ashadi Muliawan <ashadi.sejati@ctcorpdigital.com>
 * @param   {TGrid}
 *  {
      valueLayout (state for value layout, grid or list)
      clickFn (function for change layout)
    }
 * @returns {React.ReactElement}
 */

const Grid = ({ valueLayout, clickFn }: TGrid) => {
  return (
    <div className="flex items-center space-x-6">
      <div className="cursor-pointer" onClick={() => clickFn(true)}>
        <i
          className={`${valueLayout ? 'ico-grid-active' : 'ico-grid-inactive'}`}
        />
      </div>
      <div className="cursor-pointer" onClick={() => clickFn(false)}>
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
