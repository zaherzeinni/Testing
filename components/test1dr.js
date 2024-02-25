import React from 'react';
import { Button } from '@mui/material';


const Test1dr = () => {
    return (
        <div className='flex h-[100vh] justify-center items-center'>
            <div>
            <h2 className='!text-xl !text-blue-600'>
            Adding care to your life.
            </h2>
            <h1 className='!text-3xl !text-blue-800 font-bold my-11'>
            Protecting and Taking Care To Of Your Health
            </h1>
            <Button className='!bg-orange-500 !text-white'>
                Read More
            </Button>
            </div>
            <div>
            <img 
            className='w-[450px] h-[530px] img' 
            src='https://safehealth.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdoctor.7c2bc96d.b87237d7.png&w=750&q=75' />
            </div>
        
        </div>
    );
}

export default Test1dr;
