import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav bg-dark text-light mb-5 p-3'>
        <h2>C4Y Blog</h2>
        <div className='d-flex'>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
        </div>
    </div>
  )
}

export default Nav