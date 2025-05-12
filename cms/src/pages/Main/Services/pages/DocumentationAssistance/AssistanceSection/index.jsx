import React from 'react'
import Tab from './Tab'
import AssistanceListing from './AssistanceListing'

const AssistanceSection = () => {
  return (
    <div className='space-y-8'>
    <Tab/>
    <AssistanceListing/>
  </div>
  )
}

export default AssistanceSection