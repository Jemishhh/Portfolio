import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LeadershipActivity from './LeadershipActivity';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const LeadershipSlider = () => {
  return (
    <Carousel
    // additionalTransform={0}
    arrows={true}
    autoPlay={true}
    autoPlaySpeed={5000}
    centerMode={false}
    infinite
    responsive={responsive}
    itemClass="item"
    
>
  <LeadershipActivity image="/images/c1.jpg" name="DJNSS" role="Editorial Head" para ="Led a team to manage social media handles and come up with creative ideas and captions for the page. Drafting official letters addressed to government organizations outside the college" />
  <LeadershipActivity image="/images/c1.jpg" name="Nusta Bhatkanti" role="Admin" para="Leading a group of 50 on a trek and assisting them in making lasting experiences. 
Bringing potential clients that are interested in conducting such activities" />
  <LeadershipActivity image="/images/c1.jpg" name="S4DS" role="Logistics Head" para="Worked and led as a member for the committee."/>
  {/* <LeadershipActivity image="/images/c1.jpg" name="DJNSS" role="Editorial Head" /> */}
</Carousel>
  )
}

export default LeadershipSlider
