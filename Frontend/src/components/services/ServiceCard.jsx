import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5">
      <h2 className="text-headingColor  leading-8 font-[700] text-[26px]">
        {name}
      </h2>
      <p className="text__para mt-3">{desc}</p>

      <div className="flex justify-between items-center mt-[30px]">
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border-[1px] border-[#181A1E] hover:bg-primaryColor hover:border-none flex justify-center items-center mt-[30px] hover:text-white"
        >
          <FaArrowRight size={24} />
        </Link>
        <span className="w-[44px] h-[44px] flex justify-center items-center leading-[30px] text-[18px] font-[600]" style={{backgroundColor:`${bgColor}`,color:`${textColor}`,borderRadius:"6px 0 0 6px"}}>{index + 1}</span>
      </div>
    </div>
  );
};

export default ServiceCard;
