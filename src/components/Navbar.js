import React,{useState} from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import {BsFillCartFill, BsFillSaveFill} from "react-icons/bs"
import {TbTruckDelivery} from "react-icons/tb"
import { MdFavorite, MdHelp } from "react-icons/md"
import { FaUserFriends, FaWallet } from "react-icons/fa"
const Navbar = () => {
  const[nav,setNav]=useState(false);
  return (
    <div className="max-w-[1650px] mx-auto flex justify-between items-center p-4 ">
      {/* Left Side */}
      <div className="flex items-center">
        <div onClick={()=>setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-3">
          Best<span className="font-bold">Eats</span>
        </h1>
        <div className="hidden lg:flex item-center bg-gray-200 rounded-full " >
          <p className="bg-black text-white p-2 rounded-full">Delivery</p> 
          <p className="p-2">Pickup</p>
        </div>
      </div>
      {/* Search Input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] ">
    <AiOutlineSearch size={20}/>
    <input className="bg-transparent focus:outline-none p-2 w-full" type="text" placeholder="Search Foods" />
      </div>
      {/* Cart button */}
      <button className="bg-black text-white hidden md:flex items-center py-1 rounded-full ">
        <BsFillCartFill className="mr-2"/>Cart
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav? <div className="bg-black/80 fixed top-0 left-0 w-full h-screen z-10">
      </div>:""}
      
{/*  Side Drawer Menu */}
<div className={nav?" fixed top-0 left-0 bg-white w-[300px] h-screen z-10 duration-300":" fixed top-0 left-[-100%] bg-white w-[300px] h-screen z-10 duration-300"}>
 <AiOutlineClose onClick={()=>setNav(!nav)} size={25} className="absolute  top-4 right-3 cursor-pointer"/>
 <h1 className="text-2xl p-3">Best<span className="font-bold">Eats</span></h1>
 <nav>
  <ul className="flex flex-col p-4 text-gray-800">
    <li className="text-xl py-3 flex"><TbTruckDelivery size={25} className="mr-4"/>Orders</li>
    <li className="text-xl py-3 flex"><MdFavorite size={25} className="mr-4"/>Favorites</li>
    <li className="text-xl py-3 flex"><FaWallet size={25} className="mr-4"/>Wallet</li>
    <li className="text-xl py-3 flex"><MdHelp size={25} className="mr-4"/>Help</li>
    <li className="text-xl py-3 flex"><AiFillTag size={25} className="mr-4"/>Promotions</li>
    <li className="text-xl py-3 flex"><BsFillSaveFill size={25} className="mr-4"/>Best Ones</li>
    <li className="text-xl py-3 flex"><FaUserFriends size={25} className="mr-4"/>Friends</li>
  </ul>
 </nav>
</div>
    </div>
  );
};

export default Navbar;
