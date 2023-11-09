import FooterPart from "./components/FooterPart";
import { HomePage } from "./components/HomePage";

import apiConfiguration from "./config";

const Page = () => {
  {
    console.log(apiConfiguration.externalservice);
  }
  return (
    <>
      <div>
        <HomePage />
      </div>
      <div className="flex justify-center p-10 h-[50vh]">
        Home page contents here...
      </div>
      <footer>
        <FooterPart />
      </footer>
    </>
  );
};
export default Page;
