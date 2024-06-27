"use client"
import React from 'react';
import CenterAppBar from './CenterAppBar';

type AppbarProps = {};

const Appbar: React.FC<AppbarProps> = () => {
  return (
   
         <div className='flex flex-row justify-between items-center   p-4  text-center border-b border-[#E7E7E7]  px-4 h-[109px] shadow-sm'>
      <div className='flex justify-center items-center h-[55px]  px-[25px] gap-[10px] bg-gray-200 ml-8'>
        <p className='text-red-500 font-bold text-20px leading-27px'>Logo</p>
      </div>
      <div>
        <CenterAppBar />
      </div>
      <div className='flex items-center p-2'>
        <img className='relative w-8 h-8 top-[2.67px] left-[4.35px] mr-2' src="images/icon.png" alt="icon" />
        <img className='relative w-10 h-10 top-[2.67px] left-[4.35px]  ml-2' src="images/Rectangle.png" alt="rectangle" />
        <img className='ml-4 w-4 h-4' src="images/drop.png" alt="" />
      </div>
    </div>
   
  );
}

export default Appbar;
