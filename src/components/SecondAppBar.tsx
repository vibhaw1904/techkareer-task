"use client"
import React from 'react';

type SecondAppBarProps = {};

const SecondAppBar: React.FC<SecondAppBarProps> = () => {
  return (
    <div className='border-b-2 border-[#E7E7E7]'>
 <div className="flex flex-row items-center p-4 text-center   px-4 gap-10 h-[67px] ml-24">
      <div className="font-semibold  items-center align-middle  text-center  font-sans text-[#DC4A2D] relative border-b-2 pb-4 cursor-pointer text-xl leading-7 justify-center mt-5 border-[#DC4A2D] ">
        Job Preview
      </div>
      <div className="ml-10 font-sans text-[#888888] cursor-pointer text-xl leading-7 font-medium">
        Applicants
      </div>
      <div className="ml-10 font-sans text-[#888888] cursor-pointer text-xl leading-7 font-medium">
        Match
      </div>
      <div className="ml-10 font-sans text-[#888888] cursor-pointer text-xl leading-7 font-medium">
        Messages
      </div>
    </div>
    </div>
   
  );
}

export default SecondAppBar;
