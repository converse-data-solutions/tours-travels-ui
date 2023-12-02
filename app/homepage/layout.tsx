// components/Layout.js
// import React from "react";
import { HomePage } from "../components/HomePage";
import FooterPart from "../components/FooterPart";
import VideoPart from "./VideoPart";
import PartnersHeading from "./OurPartners";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <header>
        <HomePage />
      </header>
      <main className="">{children}</main>
      <div className="relative top-[-200px] bg-white">
        <VideoPart />
      </div>
      <div className="relative top-[-200px] bg-white ">
        <PartnersHeading />
      </div>

      <footer className="relative top-[-200px]">
        <FooterPart />
      </footer>
    </div>
  );
};

export default Layout;
