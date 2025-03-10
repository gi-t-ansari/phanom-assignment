import React from "react";
import Logo from "../../assets/logo-svg.svg";
import { MENU_ITEMS } from "../../config/const";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full h-[11vh] bg-[#ffffff] sticky top-0 flex justify-between items-center px-24 shadow-lg z-10">
      <div className="w-[130px]  overflow-hidden">
        <img className="w-full h-full" src={Logo} alt="pp-logo" />
      </div>
      <div className="flex gap-x-10 items-center">
        <ul className="flex gap-x-6 items-center">
          {MENU_ITEMS.map((ele) => (
            <Link to={ele.name} key={ele.name}>
              <li className="font-medium hover:text-[#6C5FD4] transition-all duration-300 ease-linear">
                {ele.name}
              </li>
            </Link>
          ))}
        </ul>
        <button className="bg-[#6C5FD4] text-white rounded-full px-5 py-2 cursor-pointer">
          Book an Appointment
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
