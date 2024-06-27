"use client"
import React from 'react';

type SideBarProps = {
    
};

const SideBar:React.FC<SideBarProps> = () => {
    
    return <div className='mt-9  w-80 h-80 p-4 ml-6'>
        <div className='flex gap-4 items-center justify-center'>
            <button className='flex items-center pt-3 pr-6 pb-3 pl-6 border rounded-md text-[#DC4A2D] bg-[#FEF4F2]'><img src="images/del.png" alt="" />Delete job</button>
            <button className='flex pt-3 pr-6 pb-3 pl-6 border items-center rounded-md text-white bg-[#DC4A2D]'><img src="images/edit.png" alt="" />Edit job</button>
        </div>
        <div  className='p-3  h-72'>
            <div className='flex flex-row justify-between border-b border-[#E7E7E7] items-center mt-2 mb-2'>
                <div className='flex p-3'>
                <img className='w-5 h-5' src="images/users.png" alt="" />
                <p className='text-base ml-2'>Applicants</p>
                </div>
               <div><p className='font-bold'>400</p></div>
            </div>
            <div className='flex flex-row justify-between border-b border-[#E7E7E7] items-center mt-2 mb-2'>
                <div className='flex p-3 items-center'>
                <img className='w-5 h-5' src="images/applicants.png" alt="" />
                <p className='text-base ml-2'>Matches</p>
                </div>
               <div>
                <p className='font-bold'>100</p>
               </div>
            </div>
            <div className='flex flex-row justify-between border-b border-[#E7E7E7] items-center mt-2 mb-2'>
               <div className='flex p-3 items-center'>
               <img className='w-5 h-5' src="images/message.png" alt="" />
               <p className='text-base ml-2'>Messages</p>
               </div>
               <div><p className='font-bold'>147</p></div>
            </div>
            <div className='flex flex-row justify-between items-center'>
             <div className='flex p-3'>
             <img className='w-5 h-5' src="images/eye.png" alt="" />
             <p className='text-base ml-2'>Views</p>
             </div>
             <div><p className='font-bold'>800</p></div>
            </div>
        </div>

    </div>
}
export default SideBar;