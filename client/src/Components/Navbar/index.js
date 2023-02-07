import React , { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import {  BiMenu } from "react-icons/bi";
import {BsSlash} from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import { HiLocationMarker } from 'react-icons/hi';
import { IoMdArrowDropdown, IoMdArrowDropup } from 'react-icons/io';
import { RiSearch2Line } from 'react-icons/ri';

const MobileNav = ({user, isDropdownOpen,setisDropdownOpen}) => {
  return (
    <>
    <div className="flex w-full items-center justify-between lg:hidden">
     <div className="w-28">
       <img
         src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
         alt="logo"
         className="w-full h-full"
       />
     </div>
     <div className="flex items-center gap-3 relative">
       <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
         Use App
       </button>
       {user? (
         <>

           <div
             onClick={() => setisDropdownOpen((prev) => !prev)}
             className="border p-2 border-gray-300 text-zomato-400 w-20 h-20 rounded-full"
           >
             <img
               src="https://www.w3schools.com/howto/img_avatar2.png"
               alt="image"
               className="w-full h-full rounded-full object-cover"
             />
           </div>
           {isDropdownOpen && (
             <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
               <button>Sign Out</button>
             </div>
           )}
         </>
       ) : (
         <>
           <span
             onClick={() => setisDropdownOpen((prev) => !prev)}
             className="border p-2 border-gray-300 text-zomato-400 rounded-full"
           >
             <FaPizzaSlice />
           </span>
           {isDropdownOpen && (
             <div className="absolute shadow-lg py-3 -bottom-20 -right-4 w-full bg-white z-20 flex flex-col gap-2">
               <button >Sign In</button>
               <button>Sign Up</button>
             </div>
           )}
         </>
       )}
     </div>
   </div>
  </>);
};

const NavLg = ({user, isDropdownOpen,setisDropdownOpen}) => {
return (
<>
<div className="hidden lg:inline container px-20 mx-auto">
       <div className="hidden gap-4 w-full items-center justify-around lg:flex ">
         <div className="w-28">
           <img
             src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
             alt="logo"
             className="w-full h-full"
           />
         </div>
         <div className=" w-3/4 bg-white shadow-md p-3 flex items-center gap-3  border border-gray-200 rounded">
           <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
             <span className="text-zomato-400">
               <HiLocationMarker />
             </span>
             <input
               type="text"
               placeholder="Bhavnagar"
               className=" focus:outline-none"
             />
             <IoMdArrowDropdown />
           </div>
           <div className="flex w-full items-center gap-2">
             <RiSearch2Line />
             <input
               type="search"
               placeholder="Search for restaurant, cuisine or a dish"
               className="w-full focus:outline-none"
             />
           </div>
         </div>
        {user? (
          <div className="relative w-20">
          <div onClick={() =>setisDropdownOpen((prev) => !prev)}
          className="border p-2 border-gray-300 text-zomato-400 w-full h-20 rounded-full">
             <img src="https://www.w3schools.com/howto/img_avatar2.png " className="w-full h-full rounded-full object-cover"/>
          </div>
          {isDropdownOpen && (
            <div className="absolute shadow-lg p-3 pl-3 pr-3 bg-white w-32 border-2 border-gray-300 rounded top-16 z-30 flex-col ">
            <button >SignUp </button>

            </div>
          )}
          </div>
        ):(
          <div className="ml-28 flex gap-6">
          <button className="text-gray-500 text-xl hover:text-gray-800">Login</button>
            <button className="text-gray-500 text-xl hover:text-gray-800">SignUp</button>

          </div>
        )}
       </div>
     </div>

</>
);
};

const Navbar = () => {
  const [user,setUser] = useState(null);
  const [isDropdownOpen,setisDropdownOpen]=useState(false);
return (
  <>
    <nav className=" w-full flex bg-white p-4 shadow-md lg:shadow-none items-center ">

      <MobileNav user={user} isDropdownOpen={isDropdownOpen} setisDropdownOpen={setisDropdownOpen}/>


       <NavLg user={user} isDropdownOpen={isDropdownOpen} setisDropdownOpen={setisDropdownOpen}/>


    </nav>
  </>
);

};

export default Navbar;
