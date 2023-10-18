import React from 'react'
import { footerLinks, footerResources, footerSolutions, socialMedia } from '../constants'

function Footer() {
    return (
        <div className='fix-container max-md:mx-6 mb-10  mt-24 lg:mb-20 lg:mt-32'>
         <div className='flex justify-between'>
            <div className='flex flex-col md:max-w-[340px]'>
                <div className='flex flex-col max-md:items-center '>
                    <img src="/logo.svg" alt="logo" className='w-1/2 md:max-w-[150px]'/>
                        <p className='max-md:text-center text-sm font-normal mt-5'>
                            Our Customer Due
                            Diligence platform helps you avoid fines or
                            losing clients due to AML while protecting you from cybercrime.
                        </p>
                </div>
                <div className='max-md:flex max-xsm:flex-wrap  max-md:justify-between'>
                      <div className='max-md:flex max-md:flex-col'>
                  <h2 className='text-lg md:text-sm font-medium mt-8'>
                      Approved Service Provider
                  </h2>
                  <img src="/bada.svg" alt="img" className='mt-2 max-md:max-w-[100px]' />
                    </div>
                    <div className='max-md:flex max-md:flex-col'>
                    <h2 className='text-lg md:text-sm font-medium mt-8'>
                      In Partnership with
                    </h2>
                      <img src="londonArt.svg" alt="img"  className='mt-2'/>
                    </div>   
                </div>
               
                    <div>
                          <p className='text-darkSilve text-sm font-normal mt-5'>
                      Registered with the Information Commissioner's Office (ICO) Registration number: ZA679248
                  </p>
                  <p className='text-darkSilve text-sm font-normal mt-5'>
                      © Arc-Pay Ltd 2021
                  </p>
                    </div>
                
              </div>
                    <div className='flex max-md:hidden md:gap-28'>
                        <div>
                           <h2 className='text-sm font-medium'>Links</h2>
                  <ul className='flex flex-col gap-2 mt-3'>
                      {footerLinks.map((elem) => (
                          <li key={elem.title} className='text-sm font-normal cursor-pointer hover:text-accentPer transition-colors'>
                              { elem.title }
                          </li>
                      )) }
                  </ul>
                        </div>
                        <div>
                               <h2 className='text-sm font-medium'>Solutions</h2>
                  <ul className='flex flex-col gap-2 mt-3'>
                      {footerSolutions.map((elem) => (
                          <li key={elem.title} className='text-sm font-normal cursor-pointer hover:text-accentPer transition-colors'>
                              { elem.title }
                          </li>
                      )) }
                  </ul>
                  </div>
                        <div>
                               <h2 className='text-sm font-medium'>Resources</h2>
                  <ul className='flex flex-col gap-2 mt-3'>
                      {footerResources.map((elem) => (
                          <li key={elem.title} className='text-sm font-normal cursor-pointer hover:text-accentPer transition-colors'>
                              { elem.title }
                          </li>
                      )) }
                  </ul>
                 </div>
               
              </div>
          </div>
          <div className='flex flex-wrap justify-between items-center md:items-baseline mt-8'>
              <img src="footerImg.png" alt="img" />
              <div className='flex max-sm:mt-5'>
                  <p className='text-darkSilve text-sm font-normal mr-4'>
                      Privacy & Terms
                  </p>
                  <ul className='flex items-center gap-2 '>
                      {socialMedia.map((elem) => (
                          <li key={elem.id} className='cursor-pointer'>
                              <img src={elem.icon} alt="icon" width={22} height={22}/>
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
    </div>  
  )
}

export default Footer