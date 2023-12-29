import React from 'react';
import { Playfair_Display,Poppins } from 'next/font/google';


const playFair=Playfair_Display({
    subsets:["latin"]
});

const poppins=Poppins({
    subsets:["latin"],
    weight:'400'
});

const DurationType = () => {
  return (
    <div className=''>
        <div className='text-[26px] font-bold pb-2' style={playFair.style}>Duration Type</div>
        

        <div
        className='flex'
        style={{
          height: '2px',
        }}
      >
        <div style={{ flex: '15%', background: '#029e9d' }}></div>
        <div style={{ flex: '85%', background: '#f1f1f1' }}></div>
      </div>

      <br></br>


        <div className='flex justify-between text-[16px] pb-4 pt-2' style={poppins.style}>
            <div><input type='checkbox'/> up to 1 hour</div>
            <div>92</div>
        </div>

        <div className='flex justify-between text-[16px] pb-4' style={poppins.style}>
            <div><input type='checkbox'/> 1 to 2 hour</div>
            <div>22</div>
        </div>

        <div className='flex justify-between text-[16px] pb-4' style={poppins.style}>
            <div><input type='checkbox'/>  2 to 4 hour</div>
            <div>35</div>
        </div>
        
        <div className='flex justify-between text-[16px] pb-4' style={poppins.style}>
            <div><input type='checkbox'/> 4 to 8 hour</div>
            <div>41</div>
        </div>

        <div className='flex justify-between text-[16px] pb-4' style={poppins.style}>
            <div><input type='checkbox'/> 8 to 1 Day </div>
            <div>11</div>
        </div>

        <div className='flex justify-between text-[16px] pb-4' style={poppins.style}>
            <div><input type='checkbox'/>  1 Day to 2 Days</div>
            <div>61</div>
        </div>

       

    </div>
  )
}

export default DurationType;