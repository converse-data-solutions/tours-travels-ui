import SearchBox from "./SearchBox/page";
import CarouselSearch from "./SearchCarousel/page";
import BestTourPackages from "./components/BestTourPackage";
import OutlinedCard from "./components/CardComponent";
import SubDestinationCard from "./components/SubDestinationCard";
import { DestinationCard } from "./components/DestinationCard";
import FooterPart from "./components/FooterPart";
import { HomePage } from "./components/HomePage";
import LastMinuteDeals from "./components/LastMinuteDeals";
import TopDestinations from "./components/TopDestionContent";
import TravelPerfection from "./components/TravelPerfection";
import PackageSlider from "./slider/page";
import Card from "./tourpackages/page";
import TourPackageCard from "./components/TourPackage";
import LastMinuteCardRight from "./components/LastMinuteCardRight";
import LastMinutePackageCard from "./components/LastMinutePackage";
import DealsForLastMinute from "./components/DealsForLastMinute";

const Page = () => {
  return (
    <>
      <div>
        <HomePage />
      </div>
      <div className="flex justify-center">
        <PackageSlider />
      </div>

      
      <div className="hidden xl:block relative top-[-150px] z-10  lg:h-0">
        <CarouselSearch />
      </div>
      

      <div className=" z-0  mx-4 mt-20  xl:z-10  xl:mx-[16%] xl:mt-0   xl:relative xl:top-[-120px]  xl:h-12">
        <SearchBox />
      </div>
      <br></br>
      <div className="travel-perfection  xl:h-[70vh]">
        <div className="lg:px-[20%]">
          <TravelPerfection />
        </div>
        <div className=" flex flex-col lg:flex-row  lg:mx-[10%] xl:mx-[15%]">
          <OutlinedCard />
        </div>
      </div>
      <div className="Destination-background">
        <div className="lg:px-[20%] ">
          <TopDestinations />
        </div>

        <div className=" flex flex-col lg:flex-row h-full w-full px-6 py-2 lg:gap-7  lg:px-[10%] xl:px-[16%] ">
          <div className="w-full lg:w-8/12 ">
            <DestinationCard />
          </div>
          <div className="w-full mt-7 lg:mt-0  lg:w-[95%] xl:[97%]">
            <SubDestinationCard />
          </div>
        </div>
      </div>
      <div className=" ">
        <BestTourPackages />
      </div>
      <div className=" px-4 lg:px-[10%] xl:px-[16%]">
        <TourPackageCard />
      </div>
      <div className="flex justify-center py-7">
        <button className="px-4 py-3 text-white bg-[#029e9d] rounded-lg booking">
          View All Packages
        </button>
      </div>

      <div className="last-minute-deals ">
        <div>
          <LastMinuteDeals />
        </div>

        <div className="lg:pl-[6%] lg:pr-[8%] xl:px-0 xl:mx-[13%]">
          <DealsForLastMinute />
        </div>
      </div>

      <footer>
        <FooterPart />
      </footer>
    </>
  );
};
export default Page;
