import React from "react";
import logo from "../assets/logo.png";
import WFDLogo from "../assets/What'sForDinnerLogo.png"
import avatar from "../assets/avatar.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Navbar({ from, to, totalRecipes }) {

  return (
    <>
      <div className="navbar justify-center bg-[#e1eedd] text-neutral-focus shadow-md w-full rounded-xl">
        <div className="flex md:order-1 order-2 ">
          <a href="/">
            <img
              src={WFDLogo}
              alt="recipe logo"
              style={{ height: "70px", width: "250px"}}
            />
          </a>
        </div>
      </div>
    </>
  );
  
}
