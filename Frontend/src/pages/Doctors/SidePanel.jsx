import React from 'react'

const SidePanel = () => {
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
    <div className='flex items-center justify-between'>
      <h2 className='text__para text-[18px] mt-0 font-[700]'>Ticket Price</h2>
      <span className='text-headingColor text-[18px] lg:text-[20px] font-semibold'>BDT 500</span>
    </div>
    <div className='mt-3'>
        <p className='font-[600]'>Available Time Slots:</p>
        <ul className='mt-3 flex flex-col gap-3'>
            <li className='text-[18px] flex justify-between items-center'>
                <span className='text-[15px] text-textColor font-[500]'>Sunday</span>
                <span className='text-[15px] text-textColor font-[500]'>4:00pm - 9:30 pm</span>
            </li>
            <li className='text-[18px] flex justify-between items-center'>
                <span className='text-[15px] text-textColor font-[500]'>Monday</span>
                <span className='text-[15px] text-textColor font-[500]'>4:00pm - 9:30 pm</span>
            </li>
            <li className='text-[18px] flex justify-between items-center'>
                <span className='text-[15px] text-textColor font-[500]'>Tuesday</span>
                <span className='text-[15px] text-textColor font-[500]'>4:00pm - 9:30 pm</span>
            </li>
            <li className='text-[18px] flex justify-between items-center'>
                <span className='text-[15px] text-textColor font-[500]'>Wednesday</span>
                <span className='text-[15px] text-textColor font-[500]'>4:00pm - 9:30 pm</span>
            </li>
        </ul>
        <button className='btn rounded-lg w-full mt-2'>Book Appointment</button>
    </div>
    </div>
  )
}

export default SidePanel
