import FooterPart from "./components/FooterPart";
import { HomePage } from "./components/HomePage";


import PackageSlider from "./slider/page";
import Card from "./tourpackages/page";


const Page = () => {
  
    
  
  return (
    <>
      <div>
        <HomePage />
      </div>
      <div className="flex justify-center  h-[70vh]">
        <PackageSlider />
      </div>
      <div className="lg:px-[16.2%] flex flex-col  items-center">
      <div className="text-[#fbbc06]"> Top Offers</div>
      <div><span>Special </span><span className="text-[hsl(180,82%,35%)]">Offers & Discount</span><span>Packages</span></div>
      <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</span>
      </div>

      <div className="bg-white w-full lg:px-[16.2%] py-5"><div className=""><Card/></div></div>
      <footer>
        <FooterPart />
      </footer>
    </>
  );
};
export default Page;
