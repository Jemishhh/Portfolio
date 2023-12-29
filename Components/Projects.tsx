import React from 'react'
import Image from 'next/image';

const Projects = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[1rem] bg-[#02050a]'>
        <h1 className='heading'>
            Pro<span className='text-yellow-400 '>Ject</span>

        </h1>   
        <div className='w-[80%] mx-auto pt-[2rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] '>
            <div data-aos="fade-up">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px]' >
            <Image 
            src ="/images/p1.jpg"
            alt="portfolio"
            layout='fill'
            className="object-contain"
            />
            
            </div>
            <p className="pt-[1rem] empty:font-normal w-[80%] text-[17px] opacity-80 mx-auto text-white">
            Imposter
            </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px]' >
            <Image 
            src ="/images/p2.jpg"
            alt="portfolio"
            layout='fill'
            className="object-contain"
            />
            </div>
            <p className="pt-[1rem] font-normal w-[80%] text-[17px] opacity-80 mx-auto text-white">
            e-Commerce Website
            </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="600">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px]' >
            <Image 
            src ="/images/p3.jpg"
            alt="portfolio"
            layout='fill'
            className="object-contain"
            />
            </div>
            <p className="pt-[1rem] font-normal w-[80%] text-[17px] opacity-80 mx-auto text-white">
            Question Generation Using NLP
            </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="900">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px]' >
            <Image 
            src ="/images/p4.jpg"
            alt="portfolio"
            layout='fill'
            className="object-contain"
            />
            </div>
            <p className="pt-[1rem] font-normal w-[80%] text-[17px] opacity-80 mx-auto text-white">
            HireHub
            </p>
        </div>


        <div data-aos="fade-up" data-aos-delay="1200">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px]' >
            <Image 
            src ="/images/p5.jpg"
            alt="portfolio"
            layout='fill'
            className="object-contain"
            />
            </div>
            <p className="pt-[1rem] font-normal w-[80%] text-[17px] opacity-80 mx-auto text-white">
            WellTrack
            </p>
        </div>


        <div data-aos="fade-up" data-aos-delay="1500">
            <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[100%] md:h-[300px]' >
            <Image 
            src ="/images/p1.jpg"
            alt="portfolio"
            layout='fill'
            className="object-contain"
            />
            </div>
            <p className="pt-[1rem] font-normal w-[80%] text-[17px] opacity-80 mx-auto text-white">
            Student Management System
            </p>
        </div>
        </div>
    </div>
  )
}

export default Projects
