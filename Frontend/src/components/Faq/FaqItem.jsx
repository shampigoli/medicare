import React, { useState } from 'react'
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
const FaqItem = ({item}) => {
  const [isOpen,setIsOpen] =useState(false)
  const toogleAcordian = () =>{
    setIsOpen(!isOpen)
  }
  return (
    <div className='p-3 lg:p-5  border-[1px] rounded-[12px] bg-[#CCf0F5] mb-5 cursor-pointer'>
    <div className='flex items-center justify-between gap-5' onClick={toogleAcordian}>
      <h4 className='text-[14px] lg:text-[18px] text-headingColor leading-7 lg:leading-8'>{item.question}</h4>  
      <div className={`${isOpen} w-7 h-7 flex justify-center items-center lg:h-8 lg:w-8 rounded border-[#141F21]`}>
        {
          isOpen ? <CiSquareMinus /> :<CiSquarePlus /> 
        }
      </div>
    </div>
      {
        isOpen && <div className='mt-4'>
        <p className='text__para'>{item.content}</p>

        </div>
      }
      
    </div>
  )
}

export default FaqItem
