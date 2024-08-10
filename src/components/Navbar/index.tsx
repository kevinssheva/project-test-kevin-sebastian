'use client';

import Image from 'next/image';
import { navbarItems } from './constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const pathName = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(false);
  let lastScrollTop = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (currentScrollTop > lastScrollTop) {
        setIsVisible(false);
        setIsTransparent(false);
      } else {
        setIsVisible(true);
        setIsTransparent(currentScrollTop > 50); 
      }
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 py-2 px-10 flex justify-between items-center z-40 transition-all duration-500 ${
        isVisible ? (isTransparent ? 'bg-primary bg-opacity-80' : 'bg-primary') : '-translate-y-full'
      }`}
    >
      <Image
        src={'/navbar-logo.png'}
        alt={'Navbar Logo'}
        width={100}
        height={50}
      />
      <div className='flex gap-6'>
        {navbarItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <p className='text-white'>{item.title}</p>
            <div
              className={`w-full h-[3px] bg-white rounded-full scale-x-0 origin-left transition-all ${
                pathName === item.href && 'scale-x-100'
              }`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
