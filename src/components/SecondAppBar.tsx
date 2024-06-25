import React from 'react';

type SecondAppBarProps = {};

const SecondAppBar: React.FC<SecondAppBarProps> = () => {
  return (
    <div className="flex flex-row items-center p-4 text-center border-b border-slate-300 shadow-md px-4 gap-20">
      <div className="font-bold ml-14 font-sans text-[#DC4A2D] relative job-preview-border">
        Job Preview
      </div>
      <div className="ml-10 font-sans text-[#888888]">
        Applicants
      </div>
      <div className="ml-10 font-sans text-[#888888]">
        Match
      </div>
      <div className="ml-10 font-sans text-[#888888]">
        Messages
      </div>
    </div>
  );
}

export default SecondAppBar;
