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

        <div className="mx-auto  max-w-screen-4xl px-4 pt-8 xl:gap-0">
          <div className="mx-auto place-self-center ">
            <p className="max-w-5xl text-center mx-auto font-mono font-light text-gray-500 text-lg md:text-xl">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of
            </p>

            <div className="mb-4 space-y-4 sm:flex sm:space-x-4 sm:space-y-0"></div>
          </div>
        </div>
      </section>
    </>
  );
};
