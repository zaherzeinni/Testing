import { Button } from '@mui/material';
import React from 'react';
import { Flex } from '@chakra-ui/react';
const Navbar = ({...rest}) => {
    return (
        <Flex {...rest}>
        <div className='flex flex-row justify-center   md:space-x-60 space-x-28 mt-3 '>
            {/* --------------LOGO----------- */}
            <div >
           <img src='dentist-logo.jpg' alt='img'
           className='w-28 h-18'
           />
           </div>

        <div className='md:space-x-8 mt-3 space-x-2 '>
            <span className='hovergreen'>Home</span>
            <span className='hovergreen'>Patients</span>
            <span className='hovergreen'>Doctor-Dashboard</span>
            <span className='hovergreen'>About Us</span>
        </div>

           {/* -----------------Button-small logo - call---------- */}
           <div className='flex flex-row text-center mt-3 space-x-3'>
           <div>
            <Button className='text-green-600 border border-solid border-green-600 py-2'>Sign in</Button>
           </div>
           <img src='dentalcare.jpg' alt='img'
           className='w-24 h-12 mx-1 object-contain'
           />
           <div className='flex flex-col'>
            <span>Call Us</span>
            <span>+12345678</span>
           </div>
           </div>

        </div>
        </Flex>
    );
}

export default Navbar;
