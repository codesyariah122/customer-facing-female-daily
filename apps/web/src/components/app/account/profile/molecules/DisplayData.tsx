import { useState } from 'react';
import { displayTops, displayBottoms } from '../formatting';

const DisplayData = (props: any) => {
  const [password, setPassword] = useState<string>('Password*1');
  const profiles = props.profiles ? props.profiles : null;
  const displayings =
    props.position === 'top'
      ? displayTops(profiles, password)
      : displayBottoms(profiles);

  return (
    <>
      {props.position === 'top'
        ? displayings.map((data: any) => (
            <>
              <div className="flex flex-col space-y-2.5">
                <label
                  htmlFor={data.label}
                  className={`${
                    data.name === 'email' || data.name === 'mobile'
                      ? 'flex items-center justify-between'
                      : ''
                  } text-sm`}
                >
                  {data.name === 'email' || data.name === 'mobile' ? (
                    <>
                      <span>{data.title}</span>
                      <span className="text-success-dark items-centers flex text-xs">
                        <i className="ico-circle-verified" />
                        Verified
                      </span>
                    </>
                  ) : (
                    <span>{data.title}</span>
                  )}
                </label>
                <input
                  type={data.type}
                  name={data.name}
                  className="border-american-silver block h-[50px] w-full cursor-pointer rounded border bg-white px-3.5 text-sm focus:outline-none disabled:opacity-25"
                  id={data.label}
                  placeholder="John Doe"
                  value={data.value}
                />
              </div>
            </>
          ))
        : displayings.map((data: any) => (
            <>
              <div className="flex flex-col space-y-2.5">
                <label
                  htmlFor={data.label}
                  className="flex items-center justify-between text-sm"
                >
                  {props.isLoadingProfile && <span>Loading ... </span>}
                  <span>{data.title}</span>
                </label>
                <div className="border-american-silver h-[50px] w-full rounded border bg-white px-3.5 text-sm">
                  <div className="mt-4 flex items-center justify-between">
                    <div>
                      <input
                        name={data.name}
                        type={data.type}
                        id={data.label}
                        className="border-0 focus:outline-none"
                        value={data.value}
                      />
                    </div>
                    <div className="order-last">
                      <span
                        className="text-pink-primary cursor-pointer text-sm font-semibold"
                        onClick={() => props.handleClick(data.name)}
                      >
                        Edit
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
    </>
  );
};

export default DisplayData;
