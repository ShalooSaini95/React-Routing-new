import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
   <div className='d-flex justify-content-center align-items-center' style={{height:"60vh",marginTop:"40px"}}>
   <div className='card bg-basic' style={{width:"18rem",height:"60vh", boxShadow:"2px 2px 4px #000000"}}>
        <h3 className='text-info text-center my-2'>React-Routing</h3>
        <div className='card-body ' >
        <ul className='list-group text-center ' style={{listStyleType:"none"}}>
        <li><NavLink to="/about" className="text-primary w-100" style={{fontSize:"30px"}}>About</NavLink></li>
        <li><NavLink to="/contact" className="text-warning w-100" style={{fontSize:"30px"}}>Contact</NavLink></li>
        <li><NavLink to="/others" className="text-secondary w-100" style={{fontSize:"30px"}}>Others</NavLink></li>
    </ul>
        </div></div></div>
  
  )
}

export default Home
