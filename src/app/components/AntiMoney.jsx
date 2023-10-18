import React from 'react'
import Button from './Button'

function AntiMoney() {
  return (
    <div className='fix-container mt-20 lg:mt-48'>
          <div className='bg-accentPer rounded-[20px] w-max flex mx-auto text-xs font-bold text-white py-2 px-3'>
                New
          </div> 
          <div className='flex max-xsm:flex-wrap justify-center'>
              <img src="/antiMoney.png" alt="img" className='max-h-[300px]' />
              <div className='max-w-[465px] lg:ml-20 xsm:ml-5 mt-[18px]'>
                  <h2 className=' max-xsm:text-center text-2xl xsm:text-3xl sm:text-4xl lg:text-5xl font-bold'>
                      Does Anti-money Laundering affect you?
                  </h2>
                  <p className='max-xsm:text-center text-sm mt-2 xsm:text-base sm:text-lg lg:text-xl font-medium sm:mt-3 lg:mt-[25px]'>
                      A short, interactive quiz to check if your art business is affected by 5AMLD regulation.
                  </p>
                  <Button text="Take the Quiz" styles="rounded-[50px] border border-silver text-black mt-[23px] max-xsm:flex max-xsm:mx-auto "/>
              </div>
          </div>
    </div>
  )
}

export default AntiMoney