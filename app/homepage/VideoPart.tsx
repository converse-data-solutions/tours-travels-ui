"use client";
import { faPlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CSSProperties } from "react";
import { useState, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Playfair_Display, Poppins } from "next/font/google";

const playFair = Playfair_Display({
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const VideoPart = () => {
  const [brightness, setBrightness] = useState(1);
  const [videoElement, setVideoElement] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const videoUrl =
    "https://assets-travels-ui.s3.ap-south-1.amazonaws.com/travelvideo.mp4";
  const titleFontStyle: CSSProperties = {
    fontFamily: "Playfair Display, serif",
  };
  const contentFontStyle: CSSProperties = {
    fontFamily: "Poppins, sans-serif",
  };

  const togglePlay = () => {
    setVideoElement(!videoElement);
    setBrightness(videoElement ? 0.2 : 1);
    setIsOverlayVisible(!videoElement);

    const videoPartElement = document.getElementById("video-part");
    if (videoPartElement) {
      videoPartElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  const handleClickOutsideVideo = (e: any) => {
    if (videoElement && !e.target.closest(".videoelement")) {
      setVideoElement(false);
      setBrightness(1);
      setIsOverlayVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutsideVideo);

    return () => {
      document.removeEventListener("click", handleClickOutsideVideo);
    };
  }, [videoElement]);

  return (
    <div className="bg-white xl:h-full " id="video-part">
      <div className="Videopart pt-[50px] lg:pt-[130px] lg:h-[600px] w-full h-[600px] flex flex-row bg-white cloud-image">
        <div className="lg:w-2/12"></div>
        <div className="w-12/12 lg:w-8/12 flex flex-col items-center">
          <div
            className="text-[#028B8A] text-[18px] font-serif font-bold"
            style={playFair.style}
          >
            Love Where You're Going
          </div>

          <div className="block md:hidden text-center">
            <span
              className="hover:text-[#028B8A] font-bold text-[28px] lg:text-[46px] font-serif"
              style={playFair.style}
            >
              Explore Your Life,
            </span>
            <span
              className="text-yellow-400 font-bold text-[28px] lg:text-[46px]"
              style={playFair.style}
            >
              Travel Where
            </span>
          </div>
          <div className="block md:hidden text-yellow-400 font-bold text-center text-[28px] lg:text-[46px] pb-3 font-serif">
            You Want!
          </div>

          <div className="flex">
            <span
              className="hidden md:block hover:text-[#028B8A] text-[46px]  md:text-[36px] sm:text-[32px] font-bold"
              style={playFair.style}
            >
              Explore Your Life,
            </span>{" "}
            <span
              className="hidden md:inline-block text-[46px] lg:text-[40px] md:text-[36px] sm:text-[32px] text-yellow-400 font-bold"
              style={playFair.style}
            >
              Travel Where You{" "}
            </span>
          </div>
          <div
            className="hidden md:inline-block text-[44px] text-yellow-400 font-bold"
            style={playFair.style}
          >
            Want!
          </div>

          <div className="text-[16px] px-4 lg:px-20 md:px-16 xl:px-[20%] text-center text-gray-500">
            <span className="flex justify-center" style={poppins.style}>
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
        <div className="lg:w-2/12"></div>
      </div>

      {videoElement && isOverlayVisible && (
        <>
          <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20"></div>

          <div className="fixed top-1/3 left-0 w-full lg:top-[20%] lg:pb-[40%] lg:pl-[10%] lg:pr-[6%] xl:top-1/4  xl:pl-[20%] xl:pr-[20%] flex  videoelement z-40">
            <div className="w-full  max-w-screen  ">
              <video width="100%" height="100%" controls autoPlay loop>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <button
                className=""
                onClick={() => {
                  setVideoElement(false);
                  setBrightness(1);
                  setIsOverlayVisible(false);
                }}
              >
                <CloseIcon className="hidden lg:inline-block text-[40px] text-white z-50 bg-transparent font-thin relative top-[-40px]" />
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPart;
