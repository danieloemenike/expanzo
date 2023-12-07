import { faEnvelope, faLocation, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

type Props = {}

function Hero({}: Props) {
  return (
      <div className='w-full h-full'>
          {/** Heading */}
          <div className="flex justify-center items-center mt-24">
          <h2 className='font-bold text-black'>Contact</h2>
          </div> 
          <div className='flex items-center justify-evenly mx-60 mt-2 '>
              {/** Headquarter */}
              <div className=' h-40 w-40'>    
                  <div className = "flex items-center space-x-4">
                      <FontAwesomeIcon icon ={faLocationDot} className='text-2xl text-primary'/>
                      <h3> Headquarters</h3>
                      
                  </div>
                  <div className="mt-6">
                      <p>
                          DHO s.r.o. <br />
                          Borivojova 878/35 <br />
                          130 00 Praha 3 <br />
                      </p>
                  </div>
              </div>
              <div className = " h-40 w-40">
                  <div className="flex items-start justify-start space-x-4 ">
                      <FontAwesomeIcon icon = {faEnvelope} className='text-2xl text-primary'/>
                  <h4>Email</h4>
                  </div>
                  <div className = "mt-6">
                      <p>
                        info@expanzo.com
                      </p>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Hero