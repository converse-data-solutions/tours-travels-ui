import React,{CSSProperties} from 'react';
import { Inter,Inter as InterFont, Poppins } from 'next/font/google';
import { BusinessCenterOutlined, FolderOutlined, LocationOnOutlined } from '@mui/icons-material';
import { Playfair_Display } from 'next/font/google';


const inter = Inter({
  subsets: ['latin'],
});

const sansSerif = InterFont({
  subsets: ['latin'],
});
const poppins = Poppins({ 
  weight:'400',
  style: ['normal'],
  subsets: ['latin'] })


const playFair = Playfair_Display({
  subsets: ['latin'],
  variable: '--poppins',
  
});


const GetToKnowUsContent: React.FC = () => {
    const titleFontStyle: CSSProperties = {
      fontFamily: 'poppins,sansSerif',
      color: '#777777',
    
      fontWeight: '',
    
    };

    const contentFontStyle: CSSProperties = {
      fontFamily:"playFair",
      color: '#777777',
    
      fontWeight: '',
    
    };
    
    
    

    
    
  return (
    
    <div className='px-5 bg-white md:px-10 lg:px-8'>
      <div className='text-[24px] text-[#029e9d] text-center lg:text-start font-serif font-semibold'>Get To Know Us</div>

      <div className='text-[30px] lg:text-[46px] text-[#2e2e2e]   lg:text-start font-serif  font-bold text-center'>Explore All Tour Of The World With Us.</div>

      <hr className='border border-dashed border-[#f1f1f1]' ></hr>
      <br></br>

      <div style={{...poppins.style}} className='text-[16px] text-center lg:text-start text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
     <br></br>
       <div  className='text-[16px] text-center lg:text-start text-gray-500'  style={{...poppins.style}}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.</div> 
    <br></br>
      <hr className='border border-dashed border-[#f1f1f1]'></hr>
      <br></br>
      <div className='flex text-center text-[16px] flex-col md:flex-row md:hidden' style={titleFontStyle}>
        <div className='flex justify-center '>
       <div className='flex ' style={{...poppins.style}}><LocationOnOutlined className='text-[#029e9d] '/>Tour Guide</div>
       <div style={{...poppins.style}}><BusinessCenterOutlined className='text-[#029e9d] pr-1'/>Friendly Price</div>
       </div>
       <div className='flex justify-center pt-2' style={{...poppins.style}}><FolderOutlined className='text-[#029e9d] pr-1'/>Reliable Tour Package</div>
      </div>

      <div className='hidden md:flex text-center text-[16px] justify-between ' style={titleFontStyle}>
        
       <div className=' ' style={{...poppins.style}}><LocationOnOutlined className='text-[#029e9d] '/>Tour Guide</div>
       <div style={{...poppins.style}}><BusinessCenterOutlined className='text-[#029e9d] pr-1'/>Friendly Price</div>

       <div style={{...poppins.style}}><FolderOutlined className='text-[#029e9d] pr-1'/>Reliable Tour Package</div>
      </div>


    </div>
  )
}

export default GetToKnowUsContent;