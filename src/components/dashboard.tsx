"use client"
import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import Requirements from './Requirements';

type pageProps = {
    
};

const Dashboard:React.FC<pageProps> = () => {
    
     return (
        <div className="flex">
          <div className="w-3/4  border-r-2  border-[#E7E7E7] ">
          
          <Header/>

       <Requirements/>
          </div>
          <div className="w-1/4 p-4">
           <SideBar/>
          </div>
        </div>
      );
}
export default Dashboard;