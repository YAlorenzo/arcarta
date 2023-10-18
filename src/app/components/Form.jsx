"use client"

import React from 'react';

function Form() {
    const onClickGo = () => {
        document.getElementById('input').value = '';
    }
  return (
      <div className='fix-container bg-[#FAF7F3] flex justify-center max-sm:flex-wrap mt-20 lg:mt-48 xsm:pt-10 lg:pt-[89px] rounded-xl'>
          <img src="/formImg.png" alt="img" />
          <div className='sm:ml-12'>
              <h2 className='text-[#1A1918] text-3xl max-sm:text-center  md:text-[40px] font-bold'>
                  Art world insight.
              </h2>
              <p className='xsm:text-base md:text-xl max-sm:text-center mt-2 md:mt-6 font-medium'>
                  Receive our newsletter direct to your inbox to follow updates <br/> to legislation and the EU art-market's response.
              </p>
              <div className='mt-8 py-3 px-2 bg-white rounded-xl flex justify-between max-sm:mb-10 max-sm:mx-2 md:w-max'>
                  <input type="text" placeholder='Your email' id='input' className='placeholder:text-[#00000073] 
                  outline-none border-none text-xl text-[#00000073] max-md:w-1/2 font-medium ml-5' />
                  <div className='w-7 h-7 rounded-full bg-gray flex items-center justify-center'>
                       <img src="/arrowForm.svg" alt="img" className='cursor-pointer' onClick={onClickGo}/>
                  </div>
                 
              </div>
          </div>
      </div>
  )
}

export default Form