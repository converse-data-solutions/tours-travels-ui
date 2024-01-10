import SearchBox from "./search-box/page";
import CarouselSearch from "./search-carousel/page";
import BestTourPackages from "./components/ServerComponents/BestTourPackage";
import OutlinedCard from "./components/ServerComponents/CardComponent";
import SubDestinationCard from "./components/ClientComponets/SubDestinationCard";
import { DestinationCard } from "./components/ClientComponets/DestinationCard";
import FooterPart from "./components/CommonComponents/FooterPart";
import { HomePage } from "./components/CommonComponents/HomePage";
import LastMinuteDeals from "./components/ServerComponents/LastMinuteDeals";
import TopDestinations from "./components/ServerComponents/TopDestionContent";
import TravelPerfection from "./components/ServerComponents/TravelPerfection";
import PackageSlider from "./slider/page";
import Card from "./tourpackages/page";
import TourPackageCard from "./components/ClientComponets/TourPackage";
import LastMinuteCardRight from "./components/ClientComponets/LastMinuteCardRight";
import LastMinutePackageCard from "./components/ClientComponets/LastMinutePackage";
import DealsForLastMinute from "./components/ServerComponents/DealsForLastMinute";
import GetToKnowUsContent from "./components/ServerComponents/GetToKnowUs";
import ImageGetToKnowUs from "./components/ServerComponents/ImageGetToKnowUs";
import CountUpForGetToKnowUs from "./components/ServerComponents/CountUpForGetToKnowUs";
import TourGuideSlider from "./components/ClientComponets/TourGuideList";
import TourGuidesHeading from "./components/ServerComponents/TourGuideHeading";
import SpecialTourPackageCard from "./components/ClientComponets/SpecialOfferPackage";
import SpecialOffersHeading from "./components/ServerComponents/SpecialOffersHeading";
import VideoPart from "./homepage/VideoPart";
import OurTestimonails from "./components/ServerComponents/OurTestimonials";
import OurTestimonailsSlider from "./components/ClientComponets/OurTestimonails";
import BackgroundShape from "./components/ServerComponents/BackgroundShape8";
import BlogOffersHead from "./components/ServerComponents/BlogOffersHead";
import BlogOffersCard from "./components/ClientComponets/BlogOffers";
import OurPartnersHeading from "./components/ServerComponents/OurPartnersHeading";
import PartnersHeading from "./homepage/OurPartners";
import ArrowPart from "./components/ClientComponets/ArrowPart";
import ScrollDetailsComponent from "./components/ClientComponets/ScrollDetails";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Page = () => {
  return (
    <>
      <div className="z-40 bg-white w-full relative">
        <div className="relative z-40">
          <HomePage />
        </div>
        <div className="flex justify-center z-20">
          <PackageSlider />
        </div>

        <div className="hidden xl:block relative top-[-150px] z-10  lg:h-0">
          <CarouselSearch />
        </div>

        <div className=" z-0  mx-4 mt-20 md:mx-[10%] xl:z-10  xl:mx-[16%] xl:mt-0   xl:relative xl:top-[-120px]  xl:h-12">
          <SearchBox />
        </div>
        <br></br>
        <br></br>
        <br className="lg:hidden"></br>
        <div className="travel-perfection  xl:h-[70vh]  z-50">
          <div className=" lg:px-[20%] perfection">
            <TravelPerfection />
          </div>
          <div className=" flex flex-col lg:flex-row md:mx-[4%]  xl:mx-[15%]">
            <OutlinedCard />
          </div>
        </div>
        <br className=""></br>

        <div className="Destination-background">
          <div className="lg:px-[20%] ">
            <TopDestinations />
          </div>
          <br className=""></br>

          <div className=" flex flex-col lg:flex-row h-full w-full px-4 py-2 lg:py-0 lg:px-[5%] xl:pl-[16%]  xl:pr-[12%]">
            <div className="w-full lg:w-8/12 md:mx-[5%] lg:mx-0 xl:w-full">
              <DestinationCard />
            </div>
            <div className="w-full mt-7 lg:mt-0 md:mx-[5%] lg:mx-7 lg:w-[95%] xl:w-[142%] ">
              <SubDestinationCard />
            </div>
          </div>
        </div>
        <br className=""></br>
        <br className=""></br>
        <br className=""></br>
        <div className=" ">
          <BestTourPackages />
        </div>
        <br className=""></br>
        <div className=" px-4 md:px-[7%] lg:px-[5%] xl:px-[16%] ">
          <TourPackageCard />
        </div>
        <div className="flex justify-center py-7">
          <button
            className="px-4 py-3 text-white text-[14px] bg-[#029e9d] rounded-lg booking"
            style={poppins.style}
          >
            View All Packages
          </button>
        </div>
        <br className="hidden lg:block"></br>
        <div className="last-minute-deals ">
          <div>
            <LastMinuteDeals />
          </div>
          <br className=""></br>

          <div className="md:px-[6%] lg:px-[4%]   xl:pl-[15%] xl:pr-[16%] pb-10 lg:pb-0">
            <DealsForLastMinute />
          </div>
          <br></br>
        </div>

        <div className="getToKnowUs lg:h-[90%]">
          <div className="flex flex-col lg:flex-row  xl:mx-[15%]  xl:mt-10">
            <div className=" w-full lg:w-6/12  lg:px-4 xl:mt-[11%]">
              <GetToKnowUsContent />
            </div>
            <div className="w-full h-auto  lg:w-6/12">
              <ImageGetToKnowUs />
            </div>
          </div>

          <div className=" mx-4  my-8 lg:my-0 shadow-sm rounded-lg md:mx-[10%] lg:w-9/12 lg:mx-8 lg:top-[-60px] lg:py-4 lg:z-10 xl:mx-[15.3%] xl:w-6/12 xl:top-[-50px] lg:relative bg-white">
            <CountUpForGetToKnowUs />
          </div>
        </div>

        <br></br>
        <div>
          <TourGuidesHeading />
        </div>
        <br></br>
        <div className=" lg:px-[5%] xl:px-[16%]">
          <TourGuideSlider />
        </div>
        <br></br>

        <div className=" xl:pt-10 xl:pb-5">
          <SpecialOffersHeading />
        </div>

        <div className="px-4 lg:px-[5%] xl:px-[1.5%] bg-white4">
          <SpecialTourPackageCard />
        </div>

        <div>
          <VideoPart />
        </div>
        <div>
          <BackgroundShape />
        </div>
        <br></br>
        <div className="bg-white relative top-[-70px] lg:top-[-80px]">
          <OurTestimonails />
        </div>

        <div className=" px-4 lg:px-[5%] xl:px-[12%]">
          <OurTestimonailsSlider />
        </div>
        <br className="hidden lg:block"></br>
        <br className="hidden lg:block"></br>
        <br></br>
        <div>
          <BlogOffersHead />
        </div>
        <br></br>
        <div className=" px-4 xl:px-[16%]">
          <BlogOffersCard />
        </div>
        <br className="hidden lg:block"></br>
        <br></br>
        <div className="pb-6">
          <OurPartnersHeading />
        </div>
        <div className="">
          <PartnersHeading />
        </div>

        <div>
          <ArrowPart />
        </div>

        <div>
          <ScrollDetailsComponent />
        </div>
      </div>

      <footer className="z-0">
        <FooterPart />
      </footer>
    </>
  );
};
export default Page;
