import React from 'react'
import CountUpComponent from '../ClientComponets/CountUpComponent'

const CountUpForGetToKnowUs = () => {
    return (
        <div>
          <CountUpComponent end={20} duration={10} />
          <p>Years Experiences</p>
    
          <CountUpComponent end={530} duration={3} />
          <p>Tour Packages</p>
    
          <CountUpComponent end={850} duration={10} />
          <p>Happy Customers</p>
    
          <CountUpComponent end={320} duration={3} />
          <p>Award Winning</p>
          
          
        </div>
      );
}

export default CountUpForGetToKnowUs