import React from 'react'
import Image from 'next/image';
import { FooterMenu } from '../StaticData/MenuRoutes';
import Link from 'next/link';

type Props = {}

function Footer({}: Props) {
  return (
      <footer className='bg-gray-100 w-full h-60 absolute inset-x-0 bottom-0 flex justify-between items-center'>
          <nav className="flex w-full h-full items-center justify-evenly">
              
          <div>
              <Image src="./logo-expanzo-black.svg" width={180} height={180} priority alt ="expanzo logo" />
            </div>
              <div className = "flex space-x-6">
                  { FooterMenu.map((menu) => (
                      <Link key={menu.id} href={menu.path}>
                          <p className="font-bold">
                              {menu.title}
                      </p>
                      </Link>
                  )
                  )}  
            </div>
        </nav>
   </footer>
  )
}

export default Footer