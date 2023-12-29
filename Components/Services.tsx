import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Services = () => {
  return (
    <div className=' bg-[#121212] pt-[4rem] md"pt-[8rem] pb-[5rem]'>
        <p className='heading'>
            My <span className='text-yellow-400'> Skills</span>

        </p>
      <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>

      <div data-aos="fade-right">
        <div className='bg-red-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 uppercase  font-semibold text-center p-[2rem]'>
            <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
            <h1 className='text-[20px] md"text-[30px] mt-[1.5rem] mb-[1.5rem]'>
            Technical
            </h1>
            
            <p className='text-[15px] text-[#d3d2d2] font-normal'>
            JavaScript <br/>
             C/C++<br/> Python <br/> PHP <br/> Java            </p>
        </div>
        </div>
      
        


        <div data-aos="zoom-in" data-aos-delay="300">
        <div className='bg-orange-700 hover:scale-110 transform transition-all duration-300  uppercase  font-semibold text-center p-[2rem]'>
            <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
            <h1 className='text-[20px] md"text-[30px] mt-[1.5rem] mb-[1.5rem]'>
            Technologies/Frameworks
            </h1>
            
            <p className='text-[15px] text-[#d3d2d2] font-normal'>
            ReactJS, NextJS <br/> GitHub<br/> Figma<br/>Tableau <br/> Bootstrap , NLP            </p>
        </div>
        </div>


         <div data-aos="fade-left" data-aos-delay="550">
        <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:rotate-6 uppercase  font-semibold text-center p-[2rem]'>
            <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]' />
            <h1 className='text-[20px] md"text-[30px] mt-[1.5rem] mb-[1.5rem]'>
            Databases
            </h1>
            
            <p className='text-[15px] text-[#d3d2d2] font-normal'><br/> 
MySql <br/> MondoDB <br/><br/>        <br/>    </p>
        
        </div>
      </div>
      </div>

      </div>
      
  )
}

export default Services
