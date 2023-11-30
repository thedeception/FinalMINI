import React from 'react'
import Navbar from './Navbar'
import { NavLink } from 'react-router-dom'
import WFDLogo from "../assets/What'sForDinnerLogo.png"
import WFDSVG from "../assets/What'sforDinnerSVG.svg"

const Landing = () => {

  return (
    <div className='h-[445px] flex flex-col justify-center items-center bg-white'>
        <NavLink to="/home"><img className="w-[650px] h-[150px]" src={WFDSVG} /></NavLink>
        <h1 className="w-[500px] text-[20px] font-bold mx-auto text-[#183a1d] bg-[#F0F6EE] border border-[#f8f9fa] text-justify p-5 shadow-lg">Greetings to What's For Dinner, your reliable companion in the realm of culinary delights! Beyond being a mere software, we stand as your culinary ally, guiding you to transform everyday ingredients into exceptional dining experiences.</h1>
    </div>
  )
}

export default Landing