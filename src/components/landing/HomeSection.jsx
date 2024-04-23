"use client";

import Image from "next/image";

import { Mixer } from "./Mixer";

import unanon from "../../../public/images/unanon.gif";

export const HomeSection = () => {
  return (
    <>
      <section className="container mx-auto mt-[76px] lg:mt-16 ">
        <Image src={unanon} alt="" className="w-[200px] md:w-[300px] lg:w-[380px] block mx-auto" />

        {/* Mixer */}
        <Mixer />
      </section>
    </>
  );
};
