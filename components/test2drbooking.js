
import Link from 'next/link';
import React from 'react';
import { GoArrowRight,GoArrowLeft } from "react-icons/go";

const Test2drbooking = () => {
    return (
   <div className='justify-center items-center flex flex-col w-[100%] m-auto'>
   
    <div className='border-gray-200 sm:px-8 sm:py-4 border border-solid flex justify-center items-center shadow-sm  m-auto  '>
    <GoArrowLeft className='mr-3  text-xl '/>
   <span className='text-center sm:mr-20 mr-3'>
    <h4 className=' font-semibold'>
    MON
    </h4>
    <h5 className='text-gray-400'>
    11 NOV 2019
    </h5>
   </span>
   <span className='text-center'>
    <h4 className=' font-semibold'>
    TUE
    </h4>
    <h5 className='text-gray-400'>
    12 NOV 2019
    </h5>
   </span>
   <span className='text-center sm:mx-20 mx-1'>
    <h4 className=' font-semibold'>
    WED
    </h4>
    <h5 className='text-gray-400'>
    13 NOV 2019
    </h5>
   </span>
   <span className='text-center'>
    <h4 className=' font-semibold'>
    THU
    </h4>
    <h5 className='text-gray-400'>
    14 NOV 2019
    </h5>
   </span>
   <span className='text-center sm:mx-20 mx-1'>
    <h4 className=' font-semibold'>
    FRI
    </h4>
    <h5 className='text-gray-400'>
    15 NOV 2019
    </h5>
   </span>
   <span className='text-center'>
    <h4 className=' font-semibold'>
    SAT
    </h4>
    <h5 className='text-gray-400'>
    16 NOV 2019
    </h5>
   </span>
   <span className='text-center sm:ml-20 ml-3'>
    <h4 className=' font-semibold'>
    SUN
    </h4>
    <h5 className='text-gray-400'>
    17 NOV 2019
    </h5>
   </span>
   <GoArrowRight className='ml-3  text-xl' />
   </div>
        
        {/* -----------------time of day------------- */}
        <div className='flex justify-center p-4 py-8 border-gray-200 border-solid border shadow-sm m-auto '>
        <div className='md:mx-6 mx-1 '>
        <div className='bg-gray-200 text-gray-500 sm:px-8 sm:py-1 px-2 hover:bg-white border-solid border-gray-200 border'>9:00 AM</div>
        <div className='my-3 bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>10:00 AM</div>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>11:00 AM</div>
        </div>
        <div className='md:mx-6 mx-1' >
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>9:00 AM</div>
        <div className='my-3 bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>10:00 AM</div>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>11:00 AM</div>
        </div>
        <div className='md:mx-6 mx-1'>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>9:00 AM</div>
        <div className='my-3 bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>10:00 AM</div>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>11:00 AM</div>
        </div>
        <div className='md:mx-6 mx-1'>
         <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>9:00 AM</div>
        <div className='my-3 bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>10:00 AM</div>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>11:00 AM</div>
        </div>
        <div className='md:mx-6 mx-1'>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>9:00 AM</div>
        <div className='my-3 bg-blue-400 sm:px-8 sm:py-1 px-2 text-white border-solid border-gray-200 border'>10:00 AM</div>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>11:00 AM</div>
        </div>
        <div className='md:mx-6 mx-1'>
         <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>9:00 AM</div>
        <div className='my-3 bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>10:00 AM</div>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>11:00 AM</div>
        </div>
        <div className='md:mx-6 mx-1'>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>9:00 AM</div>
        <div className='my-3 bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>10:00 AM</div>
        <div className='bg-gray-200 sm:px-8 sm:py-1 px-2 text-gray-500 hover:bg-white border-solid border-gray-200 border'>11:00 AM</div>
        </div>
        
        </div>
        
        <div className='lg:place-content-start lg:w-[70%] lg:flex lg:flex-row md:w-auto my-3    '>
            <Link href='/checkout' className=' bg-green-500 p-2 text-white font-bold hover:text-white hover:bg-green-600'>Reservation</Link>
        </div>
        
   </div>
   
    );
}

export default Test2drbooking;
