
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LargeScreenDropdown } from "./LargeScreenDropDown";
import { HomeDropDown } from "./HomePageDropDown";
import {
  faCalendarDays,
  faLocationDot,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
export const HomePage = () => {
  
  return (
    <>
      <div>
        <div className="hidden lg:block">
        <div className="h-[4.2vh] bg-[hsl(180,82%,35%)] shadow-md flex justify-around text-white items-center text-sm">
          <div className="flex  gap-2">
            <div className="border-r-[1px] pr-[8px]">
              <FontAwesomeIcon icon={faCalendarDays} />{" "}
              <span>Sunday, Mar 26, 2021</span>
            </div>
            <div className="border-r-[1px] pr-[8px]">
              <FontAwesomeIcon icon={faLocationDot} />{" "}
              <span>Hollywood, America</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faClock} /> Mon-Fri:10 AM-5 PM
            </div>
          </div>
          <div></div>
        </div>
        </div>
        <div className="h-[12vh] bg-white px-2 py-4">
          <div className="z-10">
            <LargeScreenDropdown />
            <HomeDropDown />
          </div>
        </div>
      </div>
    </>
  );
};