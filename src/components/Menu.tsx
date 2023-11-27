'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Menu: React.FC = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className=''>
      <Link href='/animes' className={`text-[1.1rem] mr-4 hover:text-primary transition-all ${pathname === "/animes" ? "text-primary" : "text-white"}`}>All Anime</Link>
      <Link href='/animes/genres' className={`text-[1.1rem] hover:text-primary transition-all ${pathname === "/animes/genres" ? "text-primary" : "text-white"}`}>Genres</Link>
    </div>
  )
}

export default Menu