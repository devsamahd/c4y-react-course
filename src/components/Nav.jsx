import React from 'react'

const Nav = () => {
  return (
    <nav className='bg-dark p-3 text-light d-flex space-evenly'>
        <div className="logo">C4Y ToDo</div>
        <div className="nav-items">
            <span className='ni'><a href='/'>Home</a></span>
        </div>
    </nav>
  )
}

export default Nav