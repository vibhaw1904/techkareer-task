"use client";
import React from 'react';

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
    return (
        <div className='border-b border-[#E7E7E7]'>
<div className="mt-6 ml-24 p-4">
            <div>
         
            <h3 className='text-[#6E6D6D]'>About the Job</h3>
            </div>
            <div className='mt-2'>
                <p>1. Handle the UI/UX research design</p>
                <p>2. Work on researching the latest web application designs & trends</p>
                <p>3. Work on conceptualizing and visualizing</p>
                <p>4. Work on creating graphics content and other graphic-related works</p>
            </div>
            <div>
                <p>Benefits:</p>
                <ul className='list-disc list-inside ml-2 '>
                    <li>Health insurance</li>
                    <li>Provident Fund</li>
                </ul>
                <p>Schedule:</p>
                <ul className='list-disc list-inside ml-2'>
                    <li>Full-time</li>
                    <li>Flexible hours</li>
                </ul>
                <p>Supplemental pay types:</p>
                <ul className='list-disc list-inside ml-2'>
                    <li>Performance bonus</li>
                    <li>Yearly bonus</li>
                </ul>
            </div>
        </div>
        </div>
        
    );
};

export default About;