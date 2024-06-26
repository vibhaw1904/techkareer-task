"use client"
import React from 'react';

type SecondAppBarProps = {};

const SecondAppBar: React.FC<SecondAppBarProps> = () => {
  return (
    <div className='border-b-2 border-[#E7E7E7]'>
 <div className="flex flex-row items-center p-4 text-center   px-4 gap-10 h-[67px] ml-24">
      <div className="font-bold  font-sans text-[#DC4A2D] relative job-preview-border ">
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
    </div>
   
  );
}

export default SecondAppBar;
