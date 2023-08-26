import React from 'react'
import "./index.css"
import { useNavigate } from 'react-router-dom'

export default function index() {
    const navigate= useNavigate();
  return (
    <div id='blogs-nav'>
      <div className='text-secondary fw-semibold fs-5' style={{cursor:"pointer"}} onClick={()=>navigate("/blogs/articles")} >Articles</div>
      <div className='text-secondary fw-semibold fs-5' style={{cursor:"pointer"}} onClick={()=>navigate("/blogs/changelog")} >Changelog</div>
    </div>
  )
}
