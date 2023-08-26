import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'

function index(props) {
    
  return (
    <div>
      <ReactDatePicker
    //   selected={date}
    //   onChange={props.onChange} //only when value has changed
      dateFormat="yyyy/MM/dd"
    //   maxDate={Date.now()}
      {...props}
      />
    </div>
  )
}

export default index
