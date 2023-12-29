import React from 'react'
import LeadershipSlider from './LeadershipSlider'

const LeadershipSection = () => {
  return (
    <div className='bg-[#02050a] pt-[4rem] md:pt-[4rem]'>
        <h1 className='heading'>
        Leadership <span className='text-yellow-400'>& Activities</span>
        </h1>
      <div className='pt-[5rem] pb-[4rem] w-[80%] mx-auto'>
        <LeadershipSlider/>
      </div>
    </div>
  )
}

export default LeadershipSection
