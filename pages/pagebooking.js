import React from 'react';
import Test2drbooking from '@/components/test2drbooking';
import Navbar from '../components/Navbar';
import Navbar1 from "../components/Navbar1";
import Doctorinfo from '@/components/doctorinfo';
import { NavbarMobile } from '@/components/NavbarMobile';
import { useDisclosure } from '@chakra-ui/react';

const Pagebooking = () => {


    const { isOpen, onToggle } = useDisclosure();

    return (
        <div>
           
            <Navbar 
            display={{ base: "none", md: "flex" }}
            />
           
            <NavbarMobile
            isOpen={isOpen}
            onToggle={onToggle}
            display={{ base: "flex", md: "none" }}
            />
            
            <Navbar1 />
            <Doctorinfo />
            <Test2drbooking/>
        </div>
    );
}

export default Pagebooking;
