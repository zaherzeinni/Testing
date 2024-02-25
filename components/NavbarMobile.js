import { Flex, IconButton, Center, Button, Box } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


export const NavbarMobile = ({ isOpen, onToggle, ...rest }) => {
  return (
    <Flex flexDir="column" {...rest} >
      {isOpen ? (
        <div className=" bg-gray-200 p-2 pr-5  -mt-20  ">
          <CloseIcon
            w={20}
            h={20}
            onClick={onToggle}
            className="  hover:origin-center  hover:rotate-45 duration-1000  cursor-pointer mt-7  "
          />
          <div className="flex flex-col justify-center text-center m-auto">
          <span>
            Home
          </span>
          <span>
            Patients
          </span>
          <span>
            Doctor-Dashboard
          </span>
          <span>
          About Us
          </span>
          </div>
        </div>
      ) : (
        <div className="!flex     w-[100vw] justify-between  bg-gray-200 p-2 pr-5 !py-8 -mt-20    ">

          <HamburgerIcon
            onClick={onToggle}
            w={20}
            h={20}
            className="cursor-pointer"
          />
        </div>
      )}
    </Flex>
  );
};
