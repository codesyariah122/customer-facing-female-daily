import React from 'react';

export function InfoPoint(): React.ReactElement {
  return (
    <>
      <div className="border-dodger-blue bg-info-light rounded border py-5 px-4">
        <div className="text-sm tracking-wider">
          Pay with Allo Payment & Bank Mega to get :
        </div>
        <div className="mt-3.5 flex items-center justify-between text-sm">
          <div className="flex items-center tracking-wider">
            <i className="ico-mpc mr-2.5" />
            Estimation MPC Points
          </div>
          <div className="font-semibold">783 Points</div>
        </div>
      </div>
    </>
  );
}
