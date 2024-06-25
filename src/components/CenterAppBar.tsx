"use client"

import React from 'react';

type CenterAppBarProps = {
    
};

const CenterAppBar:React.FC<CenterAppBarProps> = () => {
    
    return (
        <div className="flex space-x-16 items-center border rounded-full p-2 w-[538px] justify-between ">
      <div className="flex items-center space-x-2  bg-red-500 text-white py-4 px-4 rounded-full shadow cursor-pointer">
      
        <img src="images/jobs.png" alt="" />
        <span>Jobs</span>
      </div>
      <div className="flex items-center space-x-2 text-[#888888] relative cursor-pointer">
      <img src="images/message.png" alt="" />
      <span>Message</span>
     </div>
     <div className='flex items-center space-x-2 text-[#888888] relative cursor-pointer'>
      <img src="images/payment.png" alt="" />

        <span>Payments</span>

      </div>
    </div>
    )
}
export default CenterAppBar;