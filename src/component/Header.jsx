import React from 'react'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { profileurl } from '../util/constant';
const Header = () => {
  return (
    <>
    <div className='flex justify-between px-4 py-10 '>
      <div className='flex flex-row gap-3 items-center '>
        <div  className=' flex justify-center items-center w-16 h-16 rounded-full text-white bg-opacity-55 bg-orange-300 shadow-lg'>
        <MenuOpenIcon/>
        </div>
        <div>
          <p className=' text-gray-200 capitalize'>location</p>
          <h3 className='text-white font-bold md:text-2xl lg:text-2xl sm:text-sm'>Dl <ArrowDropDownIcon/> </h3>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center gap-5 '>
        <div>
           <p className=' text-gray-200 capitalize'>hello welcome !</p>
           <h3 className='text-white font-bold md:text-2xl lg:text-2xl sm:text-sm'>Jhon waston</h3>
        </div>
        <div className='w-16 h-16 rounded-full'> 
          <img src={profileurl} alt="profile" className='rounded-full h-16 w-16' />
        </div>
      </div>
    </div>
    </>
  )
}

export default Header