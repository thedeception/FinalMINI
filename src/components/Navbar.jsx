import React from "react";
import logo from "../assets/logo.png";
import avatar from "../assets/avatar.jpg";
import { MdKeyboardArrowDown } from "react-icons/md";
export default function Navbar({ from, to, totalRecipes }) {

  return (
    <>
      <div className="navbar justify-between bg-primary-content text-neutral-focus">
        <div className="flex md:order-1 order-2 ">
          <a href="/">
            <img
              src={logo}
              alt="recipe logo"
              style={{ height: "75px", width: "175px" }}
            />
          </a>
        </div>
      </div>
    </>
  );
  
}
