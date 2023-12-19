'use client';
import { faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { CSSProperties } from "react";
import { useState,useEffect } from "react";
import CloseIcon from '@mui/icons-material/Close';
// import path from "path";
// import video from "../../"



// const path_dir = path.dirname;
// console.log(path_dir,'$$#$%%%%%$$');
const VideoPart = () => {
  const [brightness, setBrightness] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoElement, setVideoElement] = useState(false);
  
   const videoUrl = '/travelvideo.mp4';
 const titleFontStyle: CSSProperties = {
    fontFamily: 'Playfair Display,serif',
  };
  const contentFontStyle: CSSProperties = {
    fontFamily: 'Poppins, sans-serif',
  };

  const togglePlay=()=>{
    setVideoElement(!videoElement);
    setBrightness(videoElement ? 0.2 : 1);
  }

  const handleClickOutsideVideo = (e:any) => {
    
    if (videoElement && !e.target.closest(".videoelement")) {
      setVideoElement(false);
      setBrightness(1); 
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideVideo);

    return () => {
      document.removeEventListener("click", handleClickOutsideVideo);
    };
  }, [videoElement]); 


  return (
    <div className="bg-white  xl:h-full" style={{ filter: `brightness(${brightness})` }}>
      <div className="Videopart pt-[50px] lg:pt-[130px] lg:h-[600px] w-full h-[600px] flex flex-row bg-white  cloud-image">
        <div className="lg:w-2/12 "></div>
        <div className=" w-12/12 lg:w-8/12 flex flex-col items-center">
          <div className="text-[#028B8A]  text-[20px] font-serif font-semibold" style={titleFontStyle}>
            Love Where Your're Going
          </div>

          <div className="block  md:hidden text-center">
            <span className="hover:text-[#028B8A] font-bold text-[28px] font-serif " style={titleFontStyle}>
              Explore Your Life,
            </span>
            <span className=" text-yellow-400 font-bold text-[28px]">
              Travel
            </span>
          </div>
          <div className="block md:hidden text-yellow-400 font-bold text-center text-[28px] pb-3 font-serif ">
            {" "}
            Where You Want!
          </div>

          <div className="flex">
            <span className="hidden md:block  hover:text-[#028B8A] text-[46px] lg:text-[40px] md:text-[36px] sm:text-[32px] font-bold" style={titleFontStyle}>
              Explore Your Life,
            </span>{" "}
            <span className="hidden md:inline-block text-[46px] lg:text-[40px] md:text-[36px] sm:text-[32px] text-yellow-400 font-bold" style={titleFontStyle}>
              Travel Where You{" "}
            </span>
          </div>
          <div className=" hidden md:inline-block text-[44px] text-yellow-400 font-bold" style={titleFontStyle}>
            Want!
          </div>

          <div className="text-[16px] lg:px-20  md:px-16 text-center text-gray-500 " >
            <span className="flex justify-center" style={contentFontStyle} >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </span>
            <div className="mt-24">
              {" "}
              <div>
                <FontAwesomeIcon
                  icon={faPlay}
                  className="text-white text-3xl bg-[#028B8A] px-[22px] py-[18px] rounded-[50%]"
                 onClick={togglePlay}
                />
              </div>
            </div>
            <div className="spinner-wrap text-center relative top-[-58px] ">
              <div className="spinner-item"></div>
              <div className="spinner-item spinner-item--2"></div>
              <div className="spinner-item spinner-item--3"></div>
            </div>
          </div>
        </div>
        <div className="  lg:w-2/12 "></div>
      </div>

      {videoElement && (
      <div className="fixed top-0 left-0 w-full h-full  bg-zinc-600 z-10 opacity-10"></div>
    )}

      {videoElement&&<div className=" h-0 z-30 xl:px-[25%] relative top-[-54vh] flex videoelement ">

     <div className= " w-full xl:w-11/12">
       <video width="100%" height="100%" controls autoPlay loop>
        <source src={videoUrl}  type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      
     
      </div> 
      <div><button className=" "  onClick={()=>setVideoElement(!videoElement)}><CloseIcon className="text-[40px] text-white z-50 bg-transparent font-thin  relative top-[-50px]  "/></button></div>
    </div>}


    </div>
  );
};

export default VideoPart;
