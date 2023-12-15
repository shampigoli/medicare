import React from 'react'
import {services} from './../assets/data/services'
import ServiceCard from '../components/services/ServiceCard'
const Services = () => {
  return (
    <div className='container w-[1149px] m-auto'>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-[30px] gap-5 lg:gap-[30px]">
    {services?.map((item,index)=> <ServiceCard item={item} index={index} key={index}/>)}
    </div>
    </div>
  )
}

export default Services
