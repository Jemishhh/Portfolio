import React from 'react'
import SkillsItem from './SkillsItem'
import SkillsLanguage from './SkillsLanguage'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
        <h1 className='heading'>
            ExpeR<span className='text-yellow-400 '>ience</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                <SkillsItem title="Tata Advanced Systems Limited" subtitle="Cyber Security Intern" year = "Sep 2023 - Present" para="Building a cyber-secure data center with the implementation of Graylog and Suricata rules."


            para2="Creating custom rules for real time monitoring and analysis" />
                {/* <SkillsItem title="EngiStack" subtitle="Software Developer Intern" year = "Aug 2022 – Oct 2022" para="Gained knowledge of the software programming team's operations."
                para2='Worked on developing websites using PHP, MySQL (backend) and HTML, CSS, Bootstrap (frontend)."' /> */}
                
            </div>
            <div>
            <SkillsItem title="Exampil Solutions Pvt. Limited" subtitle="Content Creator Intern" year = "Dec 2022 – Jan 2023" para="Teaching mathematical concepts to JEE/CET aspirants via online lectures."
                para2='Worked on developing websites using PHP, MySQL (backend) and HTML, CSS, Bootstrap (frontend)."' />
                                {/* <SkillsItem title="" subtitle="" year = "" /> */}
            </div>
        </div>
        
        <div className='w-[80%] mx-auto pt-[1rem] md:pt-[1rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                {/* <SkillsItem title="Tata Advanced Systems Limited" subtitle="Cyber Security Intern" year = "Sep 2023 - Present" para="Building a cyber-secure data center with the implementation of Graylog and Suricata rules."


            para2="Creating custom rules for real time monitoring and analysis" /> */}
                <SkillsItem title="EngiStack" subtitle="Software Developer Intern" year = "Aug 2022 – Oct 2022" para="Gained knowledge of the software programming team's operations."
                para2='Worked on developing websites using PHP, MySQL (backend) and HTML, CSS, Bootstrap (frontend)."' />
                
            </div>
            <div>
            {/* <SkillsItem title="Exampil Solutions Pvt. Limited" subtitle="Content Creator Intern" year = "Dec 2022 – Jan 2023" para="Teaching mathematical concepts to JEE/CET aspirants via online lectures."
                para2='Worked on developing websites using PHP, MySQL (backend) and HTML, CSS, Bootstrap (frontend)."' /> */}
                                {/* <SkillsItem title="" subtitle="" year = "" /> */}
            </div>
        </div>


        <div className='w-[80%] mx-auto pt-[1rem] md:pt-[1rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
            <SkillsLanguage skill1='html' skill2='css' skill3='javascript'   level1="w-[91%]" level2='w-[88%]' level3="w-[80%]"/>

            </div>
            <div>
            <SkillsLanguage skill1='React JS' skill2='Node JS' skill3='TyoeScript'   level1="w-[81%]" level2='w-[78%]' level3="w-[60%]"/>

            </div>
        </div>



    </div>
  )
}

export default Skills
