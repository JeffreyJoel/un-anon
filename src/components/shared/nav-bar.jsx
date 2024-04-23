"use client";

import ConnectButton from "@/hooks/useConnectButton";
import Image from "next/image";
import logo from "../../../public/images/unanon-logo.PNG"


export const NavBar = () => {
  
  return (
    <>
      <div className="fixed top-0 z-50 w-full   bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <div className="mx-auto w-full px-4 sm:w-11/12 md:w-10/12">
          <div className="flex h-24 items-center justify-between">
            <Image src={logo} alt="" className="w-[200px]"/>
            <ConnectButton />      
          </div>
        </div>
      </div>
    </>
  );
};
