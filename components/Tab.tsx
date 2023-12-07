"use client"
import React, { useState } from 'react'

type Props = {
    items: {
        id: number,
        title: string,
        path: string
    }[]
   
}

function Tab({ items }: Props) {
    const [activeTab, setActiveTab] = useState(0);
    const handleTabClick = (index:number) => {
        setActiveTab(index);
    }
    
  return (
      <div className = " text-center grid place-items-center mt-11 ">
          <ul className="flex flex-wrap -mb-px">
                  { items.map((menu,index) => (
              <li key={menu.id} className="inline-block p-4 rounded-t-lg ">
                      <button className={`text-[1.2rem] font-bold tracking-tighter w-32 ${activeTab === index ? "text-primary border-b-2 border-primary" : ""}`} onClick = {() => handleTabClick(index)}>{ menu.title}</button>
                
              </li>
                  ))}
          </ul>
    </div>
  )
}

export default Tab