import React, { useState } from "react";
import avator from "../../assets/images/avatar-icon.png";
import {AiFillStar} from 'react-icons/ai'
import { formateDate } from "../../utils/formateDate";
import FeedbackForm from "./FeedbackForm";
const DoctorFeedback = () => {
    const [feedbackForm,setFeedbackForm] =useState(false)
  return (
    <div className="mb-[50px]">
      <h2 className="lg:text-[20px] text-xl leading-7 text-headingColor font-bold">
        All reviews (272)
      </h2>
      <div className="flex justify-between gap-[10px]">
        <div className="flex gap-3 mt-5">
          <figure className="w-15 h-15 rounded-full">
            <img src={avator} alt="" />
          </figure>
          <div>
            <h2 className="lg:text-[20px] text-[16px]  leading-6 text-primaryColor font-bold">
              Ali Jan
            </h2>
            <p className="text-irisBlueColor text-[13px]  font-semibold">
              {formateDate("01-20-2023")}
            </p>
            <p className="text__para text-[14px] mt-0">
              Good Services,highly recomended 👍
            </p>
          </div>
        </div>
        <div className="flex gap-1">
            {[...Array(5).keys()].map((_,index)=> <AiFillStar key={index} color="#0067FF"/>)}
        </div>
      </div>
      {
        !feedbackForm &&       <div className="text-center">
        <button className="btn" onClick={()=> setFeedbackForm(true)}>Give feedback</button>
      </div>
      }
      {
        feedbackForm && <FeedbackForm/>
      }
    </div>
  );
};

export default DoctorFeedback;
