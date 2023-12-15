import React from 'react'
import about from '../../assets/images/about.png'
import aboutCard from '../../assets/images/about-card.png'
import {Link} from 'react-router-dom'
const About = () => {
  return (
    <section className='container section'>
    <div className="flex justify-between gap-[30px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row">

        {/* about img */}
        <div className="relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1">
            <img src={about} alt="" />
            <div className='absolute z-20 bottom-4 w-[200px] md:w-[300px] md:right-[7%] right-[30%] lg:right-[22%] '>
                <img src={aboutCard} alt="" />
            </div>
        </div>
        {/* about content */}
        <div className='w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2'>
            <h2 className='heading'>Proud to be one of the best nations</h2>
            <p className='text__para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum neque a minima veniam dolorum nihil amet ex facilis asperiores, assumenda eius rerum animi repellendus eveniet laboriosam delectus magnam consectetur dignissimos?</p>
            <p className='text__para mt-[30px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum neque a minima veniam dolorum nihil amet ex facilis asperiores, assumenda eius rerum animi repellendus eveniet laboriosam delectus magnam consectetur dignissimos?</p>
            <Link to='/'><button className='btn'>Learn More</button></Link>
        </div>
    </div>
      
    </section>
  )
}

export default About
