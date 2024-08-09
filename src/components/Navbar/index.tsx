'use client';

import Image from 'next/image';
import { navbarItems } from './constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathName = usePathname();
  return (
    <div className='fixed inset-x-0 top-0 py-2 px-10 flex justify-between items-center bg-primary z-40'>
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
