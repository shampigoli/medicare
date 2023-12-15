import React, { useState } from "react";
import doctor2 from '../../assets/images/doctor-img02.png'
import starIcon from '../../assets/images/Star.png'
import DoctorAbout from "./DoctorAbout";
import DoctorFeedback from "./DoctorFeedback";
import SidePanel from "./SidePanel";
const DoctorDetails = () => {
  const [tab,setTab] =useState('about')
  return (
    <div className="max-w-[1170px] m-auto px-5">
      <div className="grid md:grid-cols-3 gap-[50px]">
        <div className="md:col-span-2">
          <div className="flex items-center gap-5">
            <figure className="max-w-[200px] max-h-[200px]">
              <img src={doctor2} alt="" className="w-full"/>
            </figure>
            <div>
          <span className="bg-[#CCF0F3] text-irisBlueColor p-2 rounded-md text-[14px] md:text-[18px] font-semibold">Surgeons</span>
          <h3 className="text-headingColor mt-3 md:text-[22px] text-[17px] font-bold">Ali Jan</h3>
          <div className="flex items-center gap-[6px]">
            <span  className="flex items-center gap-[6px] text-headingColor md:text-[20px] text-[17px]">
              <img src={starIcon} alt="" />
              4.8
            </span>
            <span className="flex items-center gap-[6px] text-headingColor md:text-[19px] text-[14px]">(272)</span>
          </div>
            <p className="flex items-center gap-[6px] leading-6 text-headingColor md:text-[14px] text-[10px] max-w-[390px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, consectetur.</p>
            </div>
          </div>
          <div className="mt-[50px] border-b border-sloid border-[#0066ff34]">
            <button className={`${tab === 'about' && ' border-b border-solid border-primaryColor'} px-5 py-2 leading-7 text-[16px] mr-5 text-headingColor font-semibold`}
            onClick={()=>setTab('about')}
            >About</button>
            <button className={`${tab === 'feedback' && ' border-b border-solid border-primaryColor'} px-5 py-2 leading-7 text-[16px] mr-5 text-headingColor font-semibold`}
            onClick={()=>setTab('feedback')}
            >Feedback</button>
          </div>
          <div className="mt-[50px]">
            {
              tab === 'about' && <DoctorAbout/>
            }
            {
              tab === 'feedback' && <DoctorFeedback/>
            }
          </div>
        </div>
          <div>
            <SidePanel/>
          </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
