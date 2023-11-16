import FooterPart from "./components/FooterPart";
import { HomePage } from "./components/HomePage";


import PackageSlider from "./slider/page";

const Page = () => {
  
    
  
  return (
    <>
      <div>
        <HomePage />
      </div>
      <div className="flex justify-center  h-[50vh]">
        <PackageSlider />
      </div>
      <footer>
        <FooterPart />
      </footer>
    </>
  );
};
export default Page;
