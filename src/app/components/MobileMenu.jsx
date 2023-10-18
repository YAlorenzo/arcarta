import React from 'react'
import { headerNav } from '../constants'
import Button from './Button'

function MobileMenu({ isOpen }) {
  return (
    <div
      className={`md:hidden bg-[#f9ede2] rounded-xl xsm:mt-3 text-center z-10 fixed right-0 w-full h-full xsm:h-max xsm:w-64  transition-transform transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className='mt-5 flex flex-col gap-7 '>
        {headerNav.map((elem) => (
          <li key={elem.title} className='text-sm font-bold'>
           <a href="#">{elem.title}</a> 
          </li>
        ))}
      </ul>
      <Button text="Get Started" styles="bg-accent text-white mt-5 mb-5 text-sm font-bold"/>
    </div>
  )
}

export default MobileMenu