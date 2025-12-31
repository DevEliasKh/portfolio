'use client';
import { useState } from 'react';
import React from 'react';
import NavBarLinks from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import downloadIcon from '@/assets/icon/download.svg';
import menuIcon from '@/assets/icon/menu.svg';

interface NavBarProps {
  links: NavBarLinks;
}

const NavBar: React.FC<NavBarProps> = ({ links }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function toggleMobileMenu() {
    // Function to toggle mobile menu visibility
    setIsMobileMenuOpen(() => !isMobileMenuOpen);
  }

  return (
    <>
      <div className='hidden w-full basis-2/3 items-center justify-between sm:flex'>
        <div className='links'>
          <ul className='flex gap-3 font-semibold'>
            {links.map((item) => (
              <li key={item.link + item.name}>
                <Link href={`#${item.link}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <button className='resume flex gap-2 rounded bg-black px-2 py-2 text-white'>
          <span>Resume</span>
          <Image priority src={downloadIcon} alt='download resume' />
        </button>
      </div>

      {/* Humber menu in mobile  */}
      <div className='sm:hidden'>
        <Image priority src={menuIcon} alt='menu' onClick={toggleMobileMenu} />
        {isMobileMenuOpen && (
          <div className='absolute left-0 top-16 w-full bg-white/90 p-4 backdrop-blur-md'>
            <ul className='flex flex-col gap-4 font-semibold'>
              {links.map((item) => (
                <li key={item.link + item.name}>
                  <Link href={`#${item.link}`}>{item.name}</Link>
                </li>
              ))}
              <button className='resume flex gap-2 rounded bg-black px-2 py-2 text-white'>
                <span>Resume</span>
                <Image priority src={downloadIcon} alt='download resume' />
              </button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default NavBar;
