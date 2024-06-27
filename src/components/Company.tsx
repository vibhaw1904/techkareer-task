"use client"
import React from 'react';

type CompanyProps = {
    
};

const Company:React.FC<CompanyProps> = () => {
    
    return <div  className='ml-24 gap-4 mt-9'>
        <div className='flex items-center'>
            <img className='w-10 h-10 rounded' src="images/atlsn.png" alt="" />
            <h1 className='text-[#4F4F4F] leading-7 ml-3	'>Atlassian</h1>
        </div>
        <div className='gap-12 mt-8 max-w-3xl h-48'>
           <div className='flex'>
            <div>
            <div className='gap-2 w-80 h-12'>
            <p className='text-[#6E6D6D] text-sm leading-4'>Company Size</p>
                <p className='text-[#3D3D3D] w-[477px] h-5 font-medium	mt-1 text-base	'>1k-2k Employes</p>
            </div>
            <div className='gap-2 w-80 h-12 mt-4'>
            <p className='text-[#6E6D6D] text-sm leading-4'>Sector</p>
            <p className='text-[#3D3D3D] w-[477px] h-5 font-medium mt-1 text-base		'>Information Technology, Infrastructure
            </p>
            </div>
            <div className='gap-2 w-80 h-12 mt-4'>
            <p className='text-[#6E6D6D] text-sm leading-4'>Founded in</p>
            <p className='text-[#3D3D3D] w-[477px] h-5 font-medium mt-1 text-base		'>2019</p>
            </div>
            </div>
            <div>
            <div className='gap-2 w-80 h-12'>
            <p className='text-[#6E6D6D] text-sm leading-4'>Type</p>
                <p className='text-[#3D3D3D] w-[477px] h-5 font-medium mt-1 text-base		'>Private</p>
            </div>
            <div className='gap-2 w-80 h-12 mt-4'>
            <p className='text-[#6E6D6D] text-sm leading-4'>Funding</p>
            <p className='text-[#3D3D3D] w-[477px] h-5 font-medium	mt-1 text-base	'>Bootstraped</p>
            </div>
            <div className='gap-2 w-80 h-12 mt-4'>
            <p className='text-[#6E6D6D] text-sm leading-4'>Founded By</p>
            <p className='text-[#3D3D3D] w-[477px] h-5 font-medium mt-1 text-base		'>Scott Farquhar, Mike Cannon-Brookes</p>
            </div>
            </div>
           </div>
        </div>
    </div>
}
export default Company;