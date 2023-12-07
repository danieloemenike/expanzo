import Image from 'next/image'
import React from 'react'
import Tab from '../Tab'
import { TabMenu } from '@/StaticData/MenuRoutes'
type Props = {}


function Hero({}: Props) {
  return (
      <div className="">
          <div className="flex justify-center items-center mt-4">
              <Image src = "./logo-expanzo-black.svg" alt = "Expanzo Logo" width = "180" height="180" priority/>
        </div>
         <Tab items = {TabMenu}/>
    </div>
  )
}

export default Hero