"use client"
import React from 'react';
import SideBar from './SideBar';
import Header from './Header';
import Requirements from './Requirements';
import About from './About';
import Company from './Company';

type pageProps = {
    
};

const Dashboard:React.FC<pageProps> = () => {
    
     return (
        <div className="flex">
          <div className="w-3/4  ">
          
          <Header/>

       <Requirements/>
       <About/>
       <Company/>
          </div>
          <div className="w-1/4 p-4 bg-[#FCFCFC] border-l-4  border-[#E7E7E7] shadow-md ">
           <SideBar/>
          </div>
        </div>
      );
}
export default Dashboard;