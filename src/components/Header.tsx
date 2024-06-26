"use client"
import React from 'react';

type HeaderProps = {
    
};

const Header:React.FC<HeaderProps> = () => {
    
    return (
        <div className='border-b border-[#E7E7E7] '>
            <div className='mt-9 ml-24 p-4'>
        <div className='flex flex-row  text-center align-middle items-center'><h1 className='text-4xl font-bold'>Senior Product Designer</h1>
        <div className='w-[4px] h-[4px] bg-slate-300 ml-8 rounded-md'></div>
        <p className='ml-3 text-gray-400'>posted 2 days ago</p>
        <div className='flex  flex-row items-center align-middle ml-5 border  border-green-500 rounded-full px-3 bg-[#ABEFC6]'>
            <div className='w-[8px] h-[8px] bg-green-500  rounded-md'></div>
        <p className=' ml-2'>Open</p>
        </div>
        </div>
        <div className='flex flex-row mt-4  items-center align-middle'>
            <div className='flex flex-row mr-4 '>
                <img className='w-[24px] h-[24px]' src="images/location.png" alt="" />
                <h1 className='text-xl ml-3 text-[#5D5D5D] font-semibold'>Delware, USA</h1>
            </div>
            <div className='text-center '>
            <p className='font-bold text-2xl mb-4 text-gray-300'>.</p>
            </div>
            <div className='flex flex-row ml-5'>
                <img className='w-[24px] h-[24px]' src="images/money.png" alt="" />
                <p className='text-[#5D5D5D] ml-3 text-xl font-semibold'>$300k-$400k</p>
            </div>
        </div>
    </div>
        </div>
    )
    
    
}
export default Header;