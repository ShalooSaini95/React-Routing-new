import React from 'react'
import { NavLink } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='d-flex justify-content-center align-items-center' style={{height:"60vh",marginTop:"40px"}}>
    
    <div className='card ' style={{width:"18rem",height:"60vh"}}>
      <div className='card-body ' >
          <div className='text-center'><h5 className='card-title my-5 text-danger' style={{fontSize:"30px"}}>Other Details</h5></div>
          <p className='card-text text-success ' >Hello, this presentation is about the React-router-dom.</p>
         <div className='text-center'>
          <NavLink to="/" className=" btn btn-danger text-white w-50 ml-3" >Back</NavLink>
      </div></div></div></div>
  )
}

export default Contact
