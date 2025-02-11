import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between w-full'>

      <div className="logo">
        {/* logo here */}
        <span>DevEliasKh</span>
      </div>
      <div className="links">
        <ul className='flex gap-3'>
          <li>About Me</li>
          <li>About Me</li>
          <li>About Me</li>
          <li>About Me</li>
        </ul>
      </div>
      <div className="resume">
        <button> <span>Resume</span>
          {/* SVG here */}
        </button>
      </div>

    </div>
  )
}

export default NavBar