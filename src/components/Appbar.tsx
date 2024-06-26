"use client"
import React from 'react';
import CenterAppBar from './CenterAppBar';

type AppbarProps = {};

const Appbar: React.FC<AppbarProps> = () => {
  return (
   
         <div className='flex flex-row justify-between items-center   p-4  text-center border-b border-[#E7E7E7]  px-4 h-[109px] shadow-sm'>
      <div className='flex justify-center items-center h-[55px]  px-[25px] gap-[10px] bg-gray-200'>
        <p className='text-red-500 font-bold text-20px leading-27px'>Logo</p>
      </div>
      <div>
        <CenterAppBar />
      </div>
      <div className='flex items-center'>
        <img className='relative w-[32px] h-[32px] top-[2.67px] left-[4.35px] mr-2' src="images/icon.png" alt="icon" />
        <img className='relative w-[32px] h-[32px] top-[2.67px] left-[4.35px]' src="images/Rectangle.png" alt="rectangle" />
        <p className='ml-2 items-center'>▾</p>
      </div>
    </div>
   
  );
}

export default Appbar;
