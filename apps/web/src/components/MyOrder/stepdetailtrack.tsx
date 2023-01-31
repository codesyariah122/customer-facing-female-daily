import Image from 'next/image';
import icon1Active from '@assets/img/ico-track-activ/1.svg';
import icon2Active from '@assets/img/ico-track-activ/2.svg';
import icon3Active from '@assets/img/ico-track-activ/3.svg';
import icon4Active from '@assets/img/ico-track-activ/4.svg';
import icon1 from '@assets/img/ico-track/1.svg';
import icon2 from '@assets/img/ico-track/2.svg';
import icon3 from '@assets/img/ico-track/3.svg';
import icon4 from '@assets/img/ico-track/4.svg';

interface detailStepTrack {
  width?: number | string;
  numberofactive: number;
}
const setWidth = (recentData: number = 0): string => {
  return `${((recentData / 3) * 100).toString()}%`;
};

const stepdetailtrack = ({
  width = '100%',
  numberofactive = 0,
}: detailStepTrack) => {
  const active = [icon1Active, icon2Active, icon3Active, icon4Active].splice(
    0,
    numberofactive
  );
  const component = [icon1, icon2, icon3, icon4];
  active.map((e, i) => {
    component[i] = e;
  });
  return (
    <>
      <div className="relative" style={{ isolation: 'isolate', width }}>
        <div className="relative z-40 flex w-full justify-between ">
          {component.map((images, i) => (
            <div key={i}>
              <Image width={40} height={40} src={images} alt={`step-${i}`} />
            </div>
          ))}
        </div>
        <span
          className="bg-flash-white  absolute left-1/2 h-[3px] w-full  -translate-x-1/2 transform"
          style={{ width: '92%', bottom: '7.5px', zIndex: '0' }}
        >
          <span
            className="bg-teal-primary absolute h-[3px]"
            style={{ width: setWidth(numberofactive - 1) }}
          ></span>
        </span>
      </div>
    </>
  );
};

export default stepdetailtrack;
