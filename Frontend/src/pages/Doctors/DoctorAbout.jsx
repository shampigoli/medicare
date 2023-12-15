import React from "react";
import { formateDate } from "../../utils/formateDate";

const DoctorAbout = () => {
  return (
    <div>
      <div>
        <h3 className="lg:text-[20px] text-[14px] text-headingColor font-[700] flex items-center gap-2">
          About of
          <span className="text-irisBlueColor">Ali Jan</span>
        </h3>
        <p className="text__para text-[14px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero itaque
          animi quam cupiditate aperiam consectetur, eos sed vel nihil tempore
          quis. Alias id quaerat officiis natus enim laborum. Nam, quibusdam.
        </p>
      </div>
      <div className="mt-3">
        <h3 className="lg:text-[20px] text-[14px] text-headingColor font-[700]">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-7 font-semibold">
                {formateDate("01-20-2005")} -  {formateDate("01-20-2007")}
              </span>
              <p className="text-headingColor text-[13px]">PHD in Surgeon</p>
            </div>
            <p className="text-headingColor text-[13px]">
              New Mayo Hospital, New york
            </p>
          </li>
        </ul>
      </div>
      {/* <div className="mt-3">
        <h3 className="lg:text-[20px] text-[14px] text-headingColor font-[700]">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          <li className="flex flex-col sm:flex-row sm:justify-between sm:items-end md:gap-5 mb-[30px]">
            <div>
              <span className="text-irisBlueColor text-[15px] leading-7 font-semibold">
                {formateDate("07-20-2007")} -  {formateDate("01-20-2010")}
              </span>
              <p className="text-headingColor text-[13px]">PHD in Surgeon</p>
            </div>
            <p className="text-headingColor text-[13px]">
              New Mayo Hospital, New york
            </p>
          </li>
        </ul>
      </div> */}
      <div className="mt-3">
      <h3 className="lg:text-[20px] text-[14px] text-headingColor font-[700]">
          Experince
        </h3>
        <ul className="grid sm:grid-cols-2 gap-[30px] pt-4 md:p-5">
            <li className="bg-[#fff9ea] p-4 rounded">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("01-20-2010")} -  {formateDate("01-20-2015")}
                </span>
                <p className="text-headingColor text-[13px]">Sr. Surgeon</p>
                <p className="text-headingColor text-[13px]">
              New Mayo Hospital, New york
            </p>
            </li>
            <li className="bg-[#fff9ea] p-4 rounded">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold">
                {formateDate("01-20-2010")} -  {formateDate("01-20-2015")}
                </span>
                <p className="text-headingColor text-[13px]">Sr. Surgeon</p>
                <p className="text-headingColor text-[13px]">
              New Mayo Hospital, New york
            </p>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default DoctorAbout;
