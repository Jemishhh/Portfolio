import React from 'react'

interface Props {
    title: string;
    subtitle: string;
    year: string;
    para: string;
    para2: string;
}
const SkillsItem = ({title,year,subtitle,para,para2}: Props) => {
  return (
    <div className='mb-[4rem] md:mb-[8rem]'>
        <span className='px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5]'  >
            {year}
        </span>
        <h1 className='mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white'>
            {title}
        </h1>
        <h5 className='mt-[0.5rem] uppercase font-semibold mb-[1rem] text-[10px] sm:text-[20px] md:text-[18px] text-gray-300'>
            {subtitle}
        </h5>
        <p className='text-[#aaaaaa] font-normal w-[80%] text-[17px] opacity-80'>
        {para}  
        <br />
              
</p>
      
    </div>
  )
}

export default SkillsItem
