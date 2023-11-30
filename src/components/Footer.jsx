import React from "react";
import logo from "../assets/footer logo.png";
import { FiYoutube, FiFacebook } from "react-icons/fi";
import WFDLogo from "../assets/What'sForDinnerLogo.png"
import { RxInstagramLogo } from "react-icons/rx";
import { TbBrandTwitter } from "react-icons/tb";
export default function Footer() {
  return (
    <div className="bg-[#e1eedd]  md:px-32"style={{ color: '#e1eedd' }}>
    <footer className="bg-[#e1eedd] footer p-10 text-neutral-focus justify-items-center md:flex md:justify-items-stretch hidden" style={{ color: '#183a1d', fontWeight: 'bold' }}>
        <div className="justify-items-center md:justify-items-stretch">
          <a href="/">
            <img src={WFDLogo} alt="recipe logo" style={{ height: "50px" }} />
          </a>
          <span className="text-left" style={{ maxWidth: "300px" }}>
          "Cooking is an art, but all art requires knowing something about the techniques and materials. 
          Using modernist techniques shows you’re not a slave to tradition; respecting tradition shows you’re not a slave to fashion. 
          Find your own path." - Ferran Adria

          </span>
        </div>
        <div className="mt-7">
          <a className=""style={{ color: '#4056a1' }}>About Us</a>
          <span className="text-left" style={{ maxWidth: "300px" }}>
          Welcome to What's For Dinner, your trusted partner in the world of gastronomy! 
          We are more than just a software; we are your culinary confidante, 
          helping you turn everyday ingredients into extraordinary meals.
          </span>
          
        </div>
        <div className="mt-7">
          <span className=""style={{ color: '#4056a1' }}>Our Mission</span>
          <span className="text-left" style={{ maxWidth: "300px" }}>
          At What's For Dinner, we believe that cooking should be a delightful journey, 
          and we're here to make that journey both exciting and accessible. 
          Our mission is to empower home cooks and professional chefs alike by providing instant and creative recipe solutions based on the ingredients you have at hand.
          </span>
        </div>
        <div className="mt-7">
          <span className=""style={{ color: '#4056a1' }}>Features</span>
          <a className="link link-hover">User-Friendly Interface</a>
          <a className="link link-hover">Versatility and Flexibility</a>
          <a className="link link-hover">Efficiency</a>
          <a className="link link-hover">Creativity</a>
        </div>
      </footer>
      <footer className="footer w-full md:px-10 py-4 border-t justify-items-center flex border-gray-300">
        <div className="items-center w-full justify-center flex"style={{ color: '#183a1d' }}>
          <p>@What's For Dinner- Akash A S</p>
        </div>
      </footer>
    </div>
  );
}
