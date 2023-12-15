import React from 'react'

import {faqs} from '../../assets/data/faqs'
import FaqItem from './faqItem'
const FaqList = () => {
  return (
    <ul>
      {
        faqs?.map((item,index)=><FaqItem item={item} key={index}/>)
      }
    </ul>
  )
}

export default FaqList
