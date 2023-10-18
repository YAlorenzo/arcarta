import React from 'react'
import Button from './Button'
import { forList } from '../constants'

function CardsList() {
  return (
    <ul className='flex gap-8 flex-wrap justify-center mt-28' id='arcarta'>
      {forList.map((elem) => (
          <li key={elem.id} className='flex bg-[#FFFAF2] flex-col max-xsm:mx-4 w-full xsm:w-[350px] sm:w-1/2 lg:w-1/3 justify-center items-center border border-[#DDD] rounded-xl item-shadow'>
              <img src={elem.img} alt="img" className='mt-12' />
              <h2 className='text-3xl xsm:text-[42px] font-bold mt-6 text-center'>{elem.title}</h2>
              <p className='text-gray font-medium mt-4 text-center'>{elem.text}</p>
              <Button text="Learn More" styles="border border-silver text-black text-sm font-bold mt-8 mb-8"/>
         </li> 
      ))}      
    </ul>
  )
}

export default CardsList