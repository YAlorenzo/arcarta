import React from 'react'
import Button from './Button'
import { partners } from '../constants'

function Hero() {
  return (
    <div className='fix-container flex flex-col justify-center items-center relative '>
          <div className='flex mt-14 sm:mt-20 lg:mt-32'>
              <div className='bg-accentPer rounded-[20px] text-xs font-bold text-white py-2 px-3'>
                New
              </div>
              <div className='bg-[#f9ede2] text-xs font-bold py-2 px-5 text-[#4D4D4D] rounded-[20px] relative right-2'>
                The Art Market Report
              </div>
          </div>
          <div className='text-center mt-4'>
               <h1 className='text-5xl xsm:text-7xl sm:text-8xl lg:text-[110px] font-bold'>
              Rely on us
            </h1>
            <p className='max-w-[524px] mt-4 xsm:mt-7 text-base xsm:text-xl font-medium'>
            Our Customer Due Diligence platform helps you avoid fines or losing clients due to AML while protecting you from cybercrime.
            </p>   
          </div>
          <Button text="Learn More" styles="bg-accent text-white mt-5"/>
          <ul className='hidden xsm:flex gap-11 mt-12'>
              {partners.map((elem) => (
                <li key={elem.id}>
                      <img src={elem.img} alt="icon" />    
                </li>  
              ))}
          </ul>
          
          <div className='flex cursor-pointer mt-5'>
              <a href='#arcarta' className='text-accent text-base font-bold mr-2 start_animate_arrow hover:scale-[1.1] transition-transform cursor-pointer'>What is arcarta?</a>
              <img src="/arrowHero.svg" alt="arrow" className='animate_arrow transition-transform' />
          </div>
    </div>
  )
}

export default Hero