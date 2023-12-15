import React from 'react'
import DoctarCard from '../../components/Doctors/DoctarCard'
import {doctors} from '../../assets/data/doctors.js'
import Testimonials from '../../components/Testimonials/Testimonials.jsx'
import DoctorDetails from './DoctorDetails.jsx'
const Doctors = () => {
  return (
    <>
    <section className='bg-[#fff9ea]'>
      <div className="conatiner text-center">
        <h2 className='heading'>Find a Doctor</h2>
        <div className='max-w-[570px] mt-[30px] mx-auto flex justify-between items-center rounded-md bg-[#0066ff2c]'>
          <input type="search" className=' pl-4 pr-2 bg-transparent w-full cursor-pointer focus:outline-none placeholder:text-textColor' placeholder="Search a doctor here..." />
          <button className='btn rounded-[0px] rounded-r-md mt-0'>Search</button>
        </div>
      </div>
    </section>
    <section>
      <div className='container'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
      {
        doctors?.map((doctor)=><DoctarCard doctor={doctor} key={doctor.id}/>)
      }
    </div>
      </div>
    </section>      
    {/* doctor details */}
    <section>
      <DoctorDetails/>
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
  )
}

export default Doctors
