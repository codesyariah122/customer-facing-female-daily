import Grid from './Grid';
import Sort from './Sort';

const Toolbar = ({
  valueLayout,
  clickFunc,
}: {
  valueLayout: Boolean;
  clickFunc: (value: Boolean) => void;
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="font-semibold tracking-wider">12.527 Products</div>
      <div className="flex items-center">
        <Sort />
        <i className="ico-line-2 mx-10"></i>
        <Grid valueLayout={valueLayout} clickFunc={clickFunc} />
      </div>
    </div>
  );
};

export default Toolbar;
