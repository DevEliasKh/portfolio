import React from 'react'
import NavBarLinks from '@/types'
import Link from 'next/link'
import Image from 'next/image';
import downloadIcon from '@/assets/icon/download.svg'

interface NavBarProps {
  links: NavBarLinks
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  return (
    <div className='flex justify-between items-center w-full'>

      <div className="logo">
        {/* logo here */}
        <span>DevEliasKh</span>
      </div>
      <div className="links">
        <ul className='flex gap-3 font-semibold'>

          {links.map((item) => (
            <li key={item.link + item.name}>
              <Link
                href={`#${item.link}`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button className='bg-black resume flex gap-2 px-2 py-2 rounded text-white'>
        <span>Resume</span>
        <Image
          priority
          src={downloadIcon}
          alt='download resume'
        />
      </button>

    </div>
  )
}

export default NavBar