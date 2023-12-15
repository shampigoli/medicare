import React from "react";
import { doctors } from "../../assets/data/doctors";
import starIcon from "../../assets/images/Star.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const DoctarCard = ({ doctor }) => {
  const {
    name,
    specialization,
    avgRating,
    totalRating,
    photo,
    totalPatients,
    hospital,
  } = doctor;
  return (
    <div className="p-3 lg:p-5">
      <div>
        <img src={photo} alt="" className="w-full" />
      </div>
      <h2 className="text-[18px] leading-[20px] lg:text-[22px] lg:leading-[26px] text-headingColor font-[600] mt-[10px]">
        {name}
      </h2>
      <div className="flex justify-between items-center mt-4 lg:mt-6">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 lg:py-2 px-2 lg:px-3 text-[12px] rounded lg:text-[16px]">
          {specialization}
        </span>
      <div className="flex gap-[6px] items-center">
        <span className=" text-headingColor flex gap-[6px] items-center text-[14px] lg:text-[16px]">{avgRating}
        <img src={starIcon} alt="" />
        </span>
        <span className=" text-textColor flex gap-[6px] items-center text-[14px] lg:text-[16px]">({totalRating})</span>
      </div>
      </div>
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <div>
            <h3 className=" text-headingColor flex gap-[6px] items-center text-[14px] lg:text-[16px]">+{totalPatients} patients</h3>
        </div>
      </div>
        <div className="flex justify-between items-center">
            <h3 className=" text-textColor flex gap-[6px] items-center text-[14px] lg:text-[16px]">At "{hospital}"</h3>
            <Link
          to="/doctors"
          className="w-[50px] h-[35px] rounded-full border-[1px] border-[#181A1E] hover:bg-primaryColor hover:border-none flex justify-center items-center  hover:text-white"
        >
          <FaArrowRight size={20} />
        </Link>
        </div>
        
    </div>
  );
};

export default DoctarCard;
