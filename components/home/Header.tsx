'use client';

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import logo from '../../assets/logo2.png';
import Image from 'next/image';
import { HeaderLink } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const headerLinks: HeaderLink[] = [
  {
    text: 'home',
    link: '/',
  },
  {
    text: 'Company',
    link: '/company',
  },
];

const Header = () => {
  const pathname: string = usePathname();

  console.log(pathname);

  return (
    <div className="h-[8rem] text-[1.6rem] w-full flex items-center px-[10rem] shadow-sm ">
      <div>
        {headerLinks.map((linkObj: HeaderLink, i: number) => (
          <Link
            key={i}
            href={linkObj.link}
            className={`mr-[2rem] capitalize ${pathname === linkObj.link ? 'text-color-primary' : 'text-color-secondary hover:text-color-primary'} transition-all duration-100 ease-in`}
          >
            {linkObj.text}
          </Link>
        ))}
      </div>
      <Image src={logo} alt="logo" width={50} height={50} className="mx-auto" />
      <div>
        {pathname !== '/login' && (
          <Link
            href={'/login'}
            className="mr-[2rem] capitalize text-color-primary"
          >
            Login
          </Link>
        )}
        {pathname !== '/register' && (
          <Link
            href={'/register'}
            className="p-[1.3rem] bg-color-primary text-color-white rounded-[.8rem] border border-color-transparent hover:bg-color-transparent hover:border-color-primary hover:text-color-primary transition-all duration-100 ease-in"
          >
            Create partnership account
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
