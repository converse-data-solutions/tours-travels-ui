import React from 'react'
import CountUpComponent from '../ClientComponets/CountUpComponent'

const CountUpForGetToKnowUs = () => {
    return (
        <div className='flex w-full justify-between  py-4'>
           <div className='border-r-2  pr-8'>
    <CountUpComponent end={20} duration={10} class/>
    <p>Years Experiences</p>
  </div>

  <div  className='border-r-2 pr-8'>
    <CountUpComponent end={530} duration={3} />
    <p>Tour Packages</p>
  </div>

  <div className='border-r-2 pr-8'>
    <CountUpComponent end={850} duration={10} />
    <p>Happy Customers</p>
  </div>

  <div>
    <CountUpComponent end={320} duration={3} />
    <p>Award Winning</p>
  </div>
          
        </div>
      );
}

export default CountUpForGetToKnowUs