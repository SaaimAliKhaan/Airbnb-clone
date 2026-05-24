import React from 'react'
import logo2 from "../assets/logo2.png"
import { FiSearch } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { FaTreeCity } from "react-icons/fa6";
import { MdOutlinePool } from "react-icons/md";
import { MdBedroomParent } from "react-icons/md";
import { BiBuildingHouse } from "react-icons/bi";
import { IoBedOutline } from "react-icons/io5";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";





function Nav() {
  return (
    <div>
      <div className='w-[100vw] min-h-[80px] border-b-[1px] border-[#dcdcdc] px-[40px] flex items-center justify-between'>

        <div>
          <img src={logo2} alt="" className='w-[130px]' />
        </div>

        <div className='w-[35%] relative'>
          <input type="text" className='w-[100%] px-[30px] py-[10px] border-[2px] border-[#bdbaba] outline-none overflow-auto rounded-[30px] 
            text-[17px]' placeholder='Any Where | Any Location | Any City' />
          <button className='absolute p-[10px] rounded-[50px] bg-[red] right-[3%] top-[5px]'><FiSearch className='w-[20px] h-[20px] text-white' /></button>
        </div>

        <div className='flex items-center justify-center gap-[10px] '>
          <span className='text-[18px] cursor-pointer rounded-[50px] hover:bg-[#f2f2f2] px-[8px] py-[5px]' >List your home</span>
          <button className='px-[20px] py-[10px] flex items-center justify-center gap-[5px] border-[1px] border-[#bdbaba] rounded-[50px] hover:shadow-lg' >
            <span>
              <GiHamburgerMenu className='w-[20px] h-[20px]' />
            </span>
            <span>
              <CgProfile className='w-[23px] h-[23px]' />
            </span>
          </button>
        </div>
      </div>


      <div className='w-[100vw] h-[85px] bg-white flex items-center justify-center cursor-pointer gap-[40px] '>
        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
          <MdWhatshot className='w-[30px] h-[30px] text-black'/>
          <h3>Trending</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
          <GiFamilyHouse className='w-[30px] h-[30px] text-black'/>
          <h3>Villa</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
          <FaTreeCity className='w-[30px] h-[30px] text-black'/>
          <h3>Farm House</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
          <MdOutlinePool className='w-[30px] h-[30px] text-black'/>
          <h3>Pool House</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
          <MdBedroomParent className='w-[30px] h-[30px] text-black'/>
          <h3>Rooms</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
          <BiBuildingHouse className='w-[30px] h-[30px] text-black'/>
          <h3>Flat</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
          <IoBedOutline  className='w-[30px] h-[30px] text-black'/>
          <h3>PG</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
          <GiWoodCabin className='w-[30px] h-[30px] text-black'/>
          <h3>Cabins</h3>
        </div>

        <div className='flex items-center justify-center flex-col hover:border-b-[1px] border-[#a6a5a5] text-[13px] '>
          <SiHomeassistantcommunitystore className='w-[30px] h-[30px] text-black'/>
          <h3>Shops</h3>
        </div>

        
      
      </div>
    </div>
  )
}
export default Nav