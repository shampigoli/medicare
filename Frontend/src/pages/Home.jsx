import React from "react";
import heroImg1 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import iconImg01 from "../assets/images/icon01.png";
import iconImg02 from "../assets/images/icon02.png";
import iconImg03 from "../assets/images/icon03.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import About from "../components/About/About";
import Service from "../components/services/Service";
import Feature from "../components/Feature/Feature";
import DoctorList from "../components/Doctors/DoctorList";
import faq from '../assets/images/faq-img.png'
import FaqList from "../components/Faq/FaqList";
import Testimonials from "../components/Testimonials/Testimonials";
const Home = () => {
  return (
    <>
      {/* hero-banner */}
      <section className="hero__section pt-[50px] 2xl:h-[800px]">
        <div className="container">
          <div className="flex justify-between items-center gap-[90px] flex-col lg:flex-row">
            {/* hero content */}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="font-[800] leading-[46px] text-[30px] md:text-[54px] md:leading-[70px] text-headingColor">
                  We help pateints live a healthy, longer life
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Natus provident, repellendus suscipit commodi deleniti aperiam
                  eligendi alias nemo, soluta non perspiciatis atque iste
                  eveniet sunt eaque odio! Placeat, nesciunt possimus.
                </p>
                <button className="btn">Request an Appointment</button>
                {/* hero content */}
                <div className="flex mt-[30px] lg:mt-[70px] flex-col lg:items-center lg:flex-row gap-5 lg:gap-[30px]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[80px] h-2 bg-yellow-500 rounded-full mt-[-10px] block"></span>
                    <p className="text__para">Years of Expereience</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      15+
                    </h2>
                    <span className="w-[80px] h-2 bg-purple-700 rounded-full mt-[-10px] block"></span>
                    <p className="text__para">Clinic Locations</p>
                  </div>
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      100+
                    </h2>
                    <span className="w-[80px] h-2 bg-irisBlueColor rounded-full mt-[-10px] block"></span>
                    <p className="text__para">Patient Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-[30px]">
              <div>
                <img className="w-full" src={heroImg1} alt="" />
              </div>
              <div className="mt-[30px]">
                <img src={heroImg02} alt="" className="w-full mb-[30px]" />
                <img src={heroImg03} alt="" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* head 2 */}
      <section className="container section">
        <div className="lg:w-[470px] mx-auto">
          <h2 className="heading text-center">
            Providing the best medical services
          </h2>
          <p className="text__para text-center">
            World-class care for everyone.Our health system offers unmatched,
            expert health care.
          </p>
        </div>
        {/* <div className="flex flex-wrap flex-col md:flex-row justify-between items-center gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]"></div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[30px] lg:mt-[55px] gap-5 lg:gap-[30px]">
          <div className="py-[30px] px-4">
            <div className="flex items-center justify-center flex-col">
              <img src={iconImg01} alt="" />
              <h2 className="mt-[30px] leading-6 text-headingColor font-[700]">
                Find a Doctor
              </h2>
              <p className="text__para text-center">
                World-class care for everyone.Our health system offers
                unmatched, expert health care.From the lab to the clinic.
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border-[1px] border-[#181A1E] hover:bg-primaryColor hover:border-none flex justify-center items-center mt-[30px] hover:text-white"
              >
                <FaArrowRight size={24} />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-4">
            <div className="flex items-center justify-center flex-col">
              <img src={iconImg02} alt="" />
              <h2 className="mt-[30px] leading-6 text-headingColor font-[700]">
                Find a Location
              </h2>
              <p className="text__para text-center">
                World-class care for everyone.Our health system offers
                unmatched, expert health care.From the lab to the clinic.
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border-[1px] border-[#181A1E] hover:bg-primaryColor hover:border-none flex justify-center items-center mt-[30px] hover:text-white"
              >
                <FaArrowRight size={24} />
              </Link>
            </div>
          </div>
          <div className="py-[30px] px-4">
            <div className="flex items-center justify-center flex-col">
              <img src={iconImg03} alt="" />
              <h2 className="mt-[30px] leading-6 text-headingColor font-[700]">
                Book Appointment
              </h2>
              <p className="text__para text-center">
                World-class care for everyone.Our health system offers
                unmatched, expert health care.From the lab to the clinic.
              </p>
              <Link
                to="/doctors"
                className="w-[44px] h-[44px] rounded-full border-[1px] border-[#181A1E] hover:bg-primaryColor hover:border-none flex justify-center items-center mt-[30px] hover:text-white"
              >
                <FaArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Service />
      <Feature />
      {/* blog our famous doctors */}
      <section>
        <div className="conatiner">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Great Doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone.Our health system offers unmatched,
              expert health care.From the lab to the clinic.
            </p>
          </div>
          <DoctorList/>
        </div>
      </section>
      {/* faq section */}
      <section>
        <div className="conatiner">
          <div className="flex justify-between gap-[50px] lg:gap-0">
             <div className="hidden md:block w-1/2"><img src={faq} alt="" /></div>
          <div className="w-full md:w-1/2">
            <h2 className="heading mb-2">Most of the questions asked by our beloved patients</h2>
            <FaqList/>
          </div>
          </div>
        </div>
      </section>
      {/* testimonials */}
      <section>
      <div className="conatiner">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our Patient Say</h2>
            <p className="text__para text-center">
              World-class care for everyone.Our health system offers unmatched,
              expert health care.From the lab to the clinic.
            </p>
          </div>
          <Testimonials/>
        </div>
      </section>
    </>
  );
};

export default Home;
