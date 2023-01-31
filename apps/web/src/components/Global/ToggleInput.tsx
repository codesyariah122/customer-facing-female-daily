import React from 'react';

const ToggleInput = ({
  label,
  clickToggle,
}: {
  label: String;
  clickToggle: () => void;
}) => {
  return (
    <div className="radio-toggle" onClick={clickToggle}>
      <label className="flex cursor-pointer items-center">
        <div className="mr-3 text-xs">{label}</div>
        <div className="relative">
          <input type="checkbox" id="toggleB" className="sr-only" />
          <div className="wrapper block rounded-full"></div>
          <div className="dot absolute left-1 top-1 rounded-full bg-white shadow transition"></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleInput;
