"use client"

import React from 'react';

type RequirementsProps = {};

const Requirements: React.FC<RequirementsProps> = () => {
  return (
    <div className="border-b border-[#E7E7E7]">
      <div className="mt-4 ml-24 p-4">
        <div className="flex flex-col">
          <div className="flex">
            <div className="flex-1 text-gray-400 p-2">Skills Required</div>
            <div className="flex-1 text-gray-400 p-2">Preferred Language</div>
            <div className="flex-1 text-gray-400 p-2">Type</div>
            <div className="flex-1 text-gray-400 p-2">Years of Experience</div>
          </div>
          <div className="flex">
            <div className="flex-1 flex items-center p-2 ">
             <div className='flex rounded-lg  border-gray-300 border-2 pt-1 pr-2 pb-1 pl-2'>
             <img src="images/figma.png" alt="Figma" className="mr-2" /> 
              <p className='text-sm'>
              Figma
              </p>
             </div>
            </div>
            <div className="flex-1 font-bold p-2">English</div>
            <div className="flex-1 font-bold p-2">Full time</div>
            <div className="flex-1 font-bold p-2">3+ Years of Experience</div>
          </div>
          <div className="flex">
            <div className="flex-1 flex items-center p-2">
              
             <div className='flex rounded-lg  border-gray-300 border-2 pt-1 pr-2 pb-1 pl-2'>
             <img src="images/ai.png" alt="Adobe Illustrator" className="mr-2" /> 
              <p className='text-sm'>
              Adobe Illustrator
              </p>
             </div>
            </div>
            <div className="flex-1 p-2"></div>
            <div className="flex-1 p-2"></div>
            <div className="flex-1 p-2"></div>
          </div>
          <div className="flex">
            <div className="flex-1 flex items-center p-2">
             <div className='flex rounded-lg  border-gray-300 border-2 pt-1 pr-2 pb-1 pl-2'>
             <img src="images/xd.png" alt="Adobe XD" className="mr-2" /> <p className='text-sm'>
                Adobe Xd
              </p>
             </div>
            </div>
            <div className="flex-1 p-2"></div>
            <div className="flex-1 p-2"></div>
            <div className="flex-1 p-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
