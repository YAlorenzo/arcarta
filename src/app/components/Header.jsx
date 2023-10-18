"use client"

import React, { useState } from 'react'
import { headerNav } from '../constants'
import Button from './Button'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import MobileMenu from './MobileMenu';

function Header() {
  const [active, setActive] = useState(false);
  return (
    <>
       <header className='bg-[#FFF8EE] pt-4'>
        <div className='fix-container flex justify-between'>
         <img src="/logo.svg" alt="" /> 
        <div className="hidden md:flex items-center justify-between ">
          <nav>
             <ul className='flex gap-6 lg:gap-11 mr-7 '>
            {headerNav.map((elem) => (
              <li key={elem.title} className='text-sm font-bold hover:text-accentPer transition-colors cursor-pointer'>
                <a href="#">{elem.title}</a>
              </li>
            ))}
           </ul>
          </nav>
          <Button text="Get Started" styles="bg-accent text-white"/>
        </div>
        <div className='md:hidden'>
          {
            active ? (
              <CloseIcon className='w-12 h-12'  onClick={() => setActive((prev) => !prev)}/>
            )
            :
            (
              <MenuIcon className='w-12 h-12'  onClick={() => setActive((prev) => !prev)}/> 
            )
          }
          
        </div>
        </div>   
      </header>
      <MobileMenu isOpen={active}/>
    </>
   
   
  )
}

export default Header