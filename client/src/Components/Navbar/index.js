import React from "react";
import { FaPizzaSlice } from "react-icons/fa";
import { BiChevronRight, BiSearch, BiChevronDown, BiMenu,BiChevronLeft,BiShareAlt} from "react-icons/bi";
import {BsSlash} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';

const MobileNav = () => {
  return (<>
<div className="items-center justify-between flex w-full  lg:hidden">
<div className="w-28">
  <img
    src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
    alt="logo"
    className="w-full h-full"
  />
</div>
<div className="flex items-center gap-3">
  <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">Use App</button>
  <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
    <FaPizzaSlice />
  </span>
</div>
</div>
  </>);
};

const NavLg = () => {
return (
<>
<div className="container mx-auto px-4 flex items-center justify-between">
   <div className="flex items-center w-full">
      <div className="w-30 h-12 px-4 p-1">
         <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full" />
      </div>
      <div className='w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded'>
           <div className='flex items-center gap-2 border-r-2 border-gray-300 pr-2'>
             <span className='text-zomato-300'>
               <HiLocationMarker />
             </span>
             <input
               type='text'
               placeholder='Bhavngar,Gujrat'
               className='focus:outline-none'
             />
             <IoMdArrowDropdown />
           </div>
           <div className='flex w-full items-center gap-2'>
             <RiSearch2Line />
             <input
               type='text'
               placeholder='Search for restaurant cusine or a dish'
               className='w-full focus:outline-none'
             />
           </div>
         </div>
   </div>




   <div className="flex items-center gap-2">

  <span className="text-gray-800 text-xl flex items-center cursor-pointer ">
  LogIn
  <BsSlash />
  LogOut
  </span>

   <div className="w-8 h-8 text-white">
   <BiMenu className="w-full h-full" />
   </div>
   </div>
</div>
</>
)
};

const Navbar = () => {
return (
  <>
    <nav className=" w-full flex bg-white px-4 py-4 items-center ">

      <MobileNav />

      <div className="hidden lg:flex w-full">
       <NavLg />
     </div>

    </nav>
  </>
)

};

export default Navbar;
