import React from 'react'
import useMousePosition from '../../hooks/useMousePos'

const Cursor = () => {
    const {x,y} = useMousePosition()
  return (
    <div className='custom-cursor' style={{top:`${y}px`, left:`${x}px`}}></div>
  )
}

export default Cursor