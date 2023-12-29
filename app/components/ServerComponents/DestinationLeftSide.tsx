import React from 'react';
import { Playfair_Display,Poppins } from 'next/font/google';
import { LocationOnOutlined } from '@mui/icons-material';
import StarIcon from '@mui/icons-material/Star';
import Image from 'next/image';
import img from "../../../public/DestinationLeftPart.jpg";
import gallery1 from "../../../public/gallery1.jpg";
import gallery2 from "../../../public/gallery2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import DestinationReview from '../ClientComponets/DestinationReview';




const playFair=Playfair_Display({
    subsets:["latin"]
});
const poppins=Poppins({
    subsets:["latin"],
    weight:'400',   
})


const DestinationLeftSide = () => {
    const rating = 5;
  return (
    <div>
        <div className='text-[28px] lg:text-[46px] font-bold pb-3' style={playFair.style}> Bangkok Thailand</div>
        <div className='flex justify-between text-[16px] text-[#777777]' >
            <div className='text-[16px] text-[#777777]' style={poppins.style}><LocationOnOutlined/>Greater London, United Kingdom</div>
             <div className='text-[16px] text-[#777777]' style={poppins.style}>{[...Array(5)].map((_, index) => (
            <StarIcon key={index} style={{ color: '#FFD700' }} />))}</div>
          <div className='text-[16px] text-[#777777]' style={poppins.style}>(1,186 Reviews)</div>
          </div>

          <br></br>

        <div><Image height={100} width={1000} src={img} alt='' className='h-full w-full rounded-lg'></Image></div>  

        <br></br>
        <div className='text-[22px] font-bold' style={playFair.style}>Description </div>
        <br></br>
        <div className='text-[16px] text-[#777777] pb-2' style={poppins.style}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.
         The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.Lorem ipsum,
        or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.

        </div>
        
        <div className='text-[16px]  text-[#777777] pb-4' style={poppins.style}>The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts 
        of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.

        </div>

        <div className='flex flex-col md:flex-row gap-4'>
            <div className='px-5 py-6 bg-[#f1f1f1] rounded-lg'>
              <div className='text-[18px] font-bold' style={playFair.style}>Price Includes</div>
              <br></br>
              <div className='text-[16px] text-[#777777] ' style={poppins.style}><FontAwesomeIcon icon={faCheck} className='font-bold'/> Air Fares</div>
              <div className='text-[16px] text-[#777777]' style={poppins.style}><FontAwesomeIcon icon={faCheck} className='font-bold'/> 3 Nights Hotel Accomodation</div>
              <div className='text-[16px] text-[#777777]' style={poppins.style}><FontAwesomeIcon icon={faCheck} className='font-bold'/> Tour Guide</div>
              <div className='text-[16px] text-[#777777]' style={poppins.style}><FontAwesomeIcon icon={faCheck} className='font-bold'/> Entrance Fees</div>

            </div>
            <div className='px-5 py-6 bg-[#f1f1f1] rounded-lg '>
            <div className='text-[22px] font-bold' style={playFair.style}>Departure & Return Location</div>
              <br></br>
              <div className='text-[16px] text-[#777777]' style={poppins.style}><FontAwesomeIcon icon={faCheck} className='font-bold'/> Guide Service Fee</div>
              <div className='text-[16px] text-[#777777]' style={poppins.style}><FontAwesomeIcon icon={faCheck} className='font-bold'/> Driver Service Fee</div>
              <div className='text-[16px] text-[#777777]' style={poppins.style}><FontAwesomeIcon icon={faCheck} className='font-bold'/> Any Private Expenses</div>
              <div className='text-[16px] text-[#777777]' style={poppins.style}><FontAwesomeIcon icon={faCheck} className='font-bold'/> Room Service Fees</div>


            </div>
        </div>


        <div className='text-[22px] font-bold pb-4 pt-7 ' style={playFair.style}>Gallery</div>
        <div className='flex flex-col md:flex-row gap-5'>
            <div><Image height={100} width={1000} src={gallery1} alt='' className='h-full w-full rounded-lg' ></Image></div>
            <div><Image height={100} width={1000} src={gallery2} alt='' className='h-full w-full rounded-lg'></Image></div>
        </div>

        <div className='text-[22px] font-bold pb-4 pt-7 ' style={playFair.style}>Average Reviews</div>
        <div className='w-full flex flex-col md:flex-row md:gap-7 '>
         <div className='rounded-lg lg:w-4/12 items-center flex-col justify-center py-6 px-2  bg-[#17233e] text-white text-center md:w-5/12'> 
         <div className=' text-[28px] md:text-[36px] lg:text-[46px] font-bold' style={playFair.style}>2.2/5</div>
         <div className='text-[22px] font-bold pb-1' style={playFair.style}>"Feel So Much Worst Than Thinking"</div>
         <div className='text-[16px] font-bold' style={poppins.style}>From 40 Reviews</div>
         </div>
         <div className='w-full pt-4 lg:pt-0 '>
  


  <div className='text-[16px] text-[#777777]' style={poppins.style}>Cleanliness </div>

  <div className="static-reviews mb-2  ">
    <div className="filled-section rounded-l-2xl" style={{ width: '40%' }}></div>
    <div className="unfilled-section rounded-r-2xl" style={{ width: '60%' }}></div>
  </div>

  <div className='text-[16px] text-[#777777]' style={poppins.style}>Facilities</div>

  <div className="static-reviews mb-2 ">
    <div className="filled-section rounded-l-2xl" style={{ width: '30%' }}></div>
    <div className="unfilled-section rounded-r-2xl" style={{ width: '70%' }}></div>
  </div>
  <div className='text-[16px] text-[#777777]' style={poppins.style}>Value for money</div>

  <div className="static-reviews mb-2  ">
    <div className="filled-section rounded-l-2xl" style={{ width: '60%' }}></div>
    <div className="unfilled-section rounded-r-2xl" style={{ width: '40%' }}></div>
  </div>
  <div className='text-[16px] text-[#777777]' style={poppins.style}>Service </div>

  <div className="static-reviews mb-2  ">
    <div className="filled-section rounded-l-2xl" style={{ width: '20%' }}></div>
    <div className="unfilled-section rounded-r-2xl" style={{ width: '80%' }}></div>
  </div>
  <div className='text-[16px] text-[#777777]' style={poppins.style}>Location</div>

  <div className="static-reviews mb-2  ">
    <div className="filled-section rounded-l-2xl" style={{ width: '50%' }}></div>
    <div className="unfilled-section rounded-r-2xl" style={{ width: '50%' }}></div>
  </div>
</div>



        </div>


    <div><DestinationReview/></div>    





    </div>
  )
}

export default DestinationLeftSide;



