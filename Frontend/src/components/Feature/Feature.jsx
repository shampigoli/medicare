import React from 'react'
import { Link } from 'react-router-dom'
import featureImg from '../../assets/images/feature-img.png'
import video from '../../assets/images/video-icon.png'
import avator from  '../../assets/images/avatar-icon.png'
const Feature = () => {
  return (
    <section>
      <div className="container">
        <div className="flex justify-between items-center flex-col lg:flex-row">
            {/* hero content */}
            <div className='xl:w-[670px]'>
                <h2 className='heading'>Get virtual treatement
                <br />
                anytime
                </h2>
                <ul className='pl-4'>
                    <li className='text__para'>1. Schedule the appointment directly.</li>
                    <li className='text__para'>2. Search for the physician here, and contact their office.</li>
                    <li className='text__para'>3.View your physicians who are acceppting new patients, use the online scheduling tool to select an appointment tool .</li>
                    <Link to='/'><button className='btn'>Learn More</button></Link>
                </ul>
            </div>
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
                <img src={featureImg} alt=""  className='w-3/4'/>
                <div className='w-[150px] lg:w-[250px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]'>
                    <div className='flex justify-between items-center'>
                        <div className="flex items-center gap-[5px] lg:gap-3">
                            <div className='text-[10px] leading-[10px] lg:text-[18px] lg:leading-5 text-headingColor font-[700]'>
                                Tue,26
                            </div>
                            <div className='text-[10px] leading-[10px] lg:text-[18px] lg:leading-5 text-headingColor font-[400]'>
                                10:00 a.m
                            </div>
                    </div>
                            <div className='w-5 h-5 lg:w-[35px] lg:h-[35px] flex justify-center items-center bg-yellowColor rounded py-1 '>

                                <img src={video} alt="" className='z-50' />
                            </div>
                        </div>
                            <div className='w-[65px] lg:w-[96px] py-1 lg:py-2 px-2 lg:px-10 text-[10px] lg:text-[12px] rounded-full bg-[#CCF0F3] flex items-center justify-center text-irisBlueColor font-[500] mt-2 lg:mt-4'>
                                Consultation
                            </div>
                            <div className='flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]'>
                                <img src={avator} alt="" />
                                Ali Jan
                            </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Feature
