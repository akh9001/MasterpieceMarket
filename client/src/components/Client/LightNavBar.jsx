import {React, useState} from "react";
import { Link } from 'react-router-dom';
import {
  AiOutlineShoppingCart, 
  AiOutlineUser,
  AiOutlineHome,
  AiOutlineStar,
  AiOutlineBook,
  AiOutlineInfoCircle,
  AiOutlineUsergroupAdd,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

import Cart from '../../components/Layout/Cart'
import Sidebar from "../Layout/Sidebar";

const LightNavBar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  return (
    <nav className="relative flex items-center justify-between py-4 px-20 ">
    <AiOutlineUser onClick={toggleSidebar}  color="#000" size={20} className="cursor-pointer hover:scale-150 duration-300"/>
        
    {isSidebarVisible && <Sidebar/>}

    <button onClick={toggleMenu} className="block large:hidden text-black focus:outline-none">
      {isOpen ? <AiOutlineClose/> : <AiOutlineMenu/> }
    </button>

    <div className="large:flex hidden  space-x-12 mx-auto items-center justify-between">
      <Link to="/" className="text-black font-light  text-xs hover:text-white hover:bg-black hover:rounded-full hover:py-2 hover:px-4 duration-300">
        Home
      </Link>
      <Link to="/best-selling" className="text-black font-light text-xs hover:text-white hover:bg-black hover:rounded-full hover:py-2 hover:px-4 duration-300">
        Best selling
      </Link>
      <Link to="/catalog" className="text-black font-light text-xs hover:text-white hover:bg-black hover:rounded-full hover:py-2 hover:px-4 duration-300">
        Catalog
      </Link>
      <div className="Logo text-black">
        <strong>Rent</strong>Car
      </div>
      <Link to="/Faq" className="text-black font-light text-xs hover:text-white hover:bg-black hover:rounded-full hover:py-2 hover:px-4 duration-300">
        FAQ
      </Link>
      <Link to="/join-us" className="text-black font-light text-xs hover:text-white hover:bg-black hover:rounded-full hover:py-2 hover:px-4 duration-300">
        Join Us
      </Link>
      <Link to="/contact-us" className="text-black font-light text-xs hover:text-white hover:bg-black hover:rounded-full hover:py-2 hover:px-4 duration-300">
        Contact Us
      </Link>
    </div>

        <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden w-4/6 md:w-auto absolute text-left rounded-md top-16 bg-white shadow-md z-50`}
      >
        <a
          href="#"
          className=" flex items-center text-black font-semibold text-xs py-2 px-4 hover:text-white hover:bg-black duration-300"
        >
          <AiOutlineHome size={20} className="mr-2" />
          Home
        </a>

        <a
          href="#"
          className=" flex items-center text-black font-semibold text-xs py-2 px-4 hover:text-white hover:bg-black duration-300"
        >
          <AiOutlineStar size={20} className="mr-2" />
          Best selling
        </a>

        <a
          href="#"
          className=" flex items-center text-black font-semibold text-xs py-2 px-4 hover:text-white hover:bg-black duration-300"
        >
          <AiOutlineBook size={20} className="mr-2" />
          Catalog
        </a>

        <a
          href="#"
          className=" flex items-center text-black font-semibold text-xs py-2 px-4 hover:text-white hover:bg-black  duration-300"
        >
          <AiOutlineInfoCircle size={20} className="mr-2" />
          FAQ
        </a>

        <a
          href="#"
          className=" flex items-center text-black font-semibold text-xs py-2 px-4 hover:text-white hover:bg-black duration-300"
        >
          <AiOutlineUsergroupAdd size={20} className="mr-2 text-black" />
          Join Us
        </a>

        <a
          href="#"
          className=" flex items-center text-black font-semibold text-xs py-2 px-4 hover:text-white hover:bg-black  duration-300"
        >
          <AiOutlineMail size={20} className="mr-2" />
          Contact Us
        </a>
      </div>

    
      <AiOutlineShoppingCart
        color="#000"
        size={20}
        className="cursor-pointer hover:scale-150 duration-300"
        onClick={toggleCart}
      />
      
      {isCartVisible && <Cart toggleCart={toggleCart}  />}

     </nav>
  );
};

export default LightNavBar;
